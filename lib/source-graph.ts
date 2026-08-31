import { readFileSync, statSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";

/**
 * Every local source file that renders into a route, found by walking its imports.
 *
 * WHY THIS EXISTS. `app/sitemap.ts` dated the twelve static routes with
 * `lastChanged(...GLOBAL, `app${p}/page.tsx`)`, the page file and nothing else.
 * Measured 2026-08-30: commit 1459197 edited `components/site/BuyersGuide.tsx`,
 * which changed the visible text of the homepage, /gallery and /service-areas,
 * and moved zero lastmods. The sitemap said nothing had changed on the three
 * pages that had. On a domain with no Search Console property and no Business
 * Profile the sitemap is the only per-url freshness signal there is, so a page
 * that changes silently is a signal thrown away.
 *
 * The service and area groups had the same hole patched by hand. They list
 * `components/site/LongFormFaq.tsx` and `components/site/Breadcrumbs.tsx`
 * explicitly, which is the tell: a hand-maintained list of "files that render
 * here" goes stale the first time somebody adds a component and does not think
 * about the sitemap. This module derives the list instead, so it cannot.
 *
 * WHAT COUNTS AS RENDERING INTO A PAGE. Static imports, re-exports, side-effect
 * imports (`import "./globals.css"`) and dynamic `import()`, because next/dynamic
 * loads real markup and a lazily imported component is still content. Type-only
 * imports are excluded deliberately: `import type { Area } from "@/lib/areas"`
 * emits nothing, so dating a page by it would claim a change no reader can see.
 * Bare specifiers (`react`, `next/link`, `lucide-react`) are skipped, because a
 * dependency upgrade is not a content change and is not in this git history.
 *
 * WHERE THE WALK STOPS, AND WHY IT IS NOT THE SHELL. Call this on a route's own
 * page file. Do NOT hand it `app/layout.tsx` as an entry to walk: the layout
 * pulls in the footer, the footer imports `content/services.ts` to render
 * SERVICES.slice(0, 8), and a walked shell therefore puts that one file in all
 * 132 graphs. Measured 2026-08-31 on exactly that version: every url in the
 * sitemap moved to one date, so a copy edit to a single service body would have
 * redated the whole site. That is the failure 402e157 already removed once when
 * it took out `lastModified: new Date()`, and Google ignores an inconsistently
 * accurate lastmod site-wide, so a false "this changed" is the expensive
 * direction to err in. The shell stays a shallow, unwalked entry.
 *
 * The cost of that boundary, stated plainly: an edit to the navbar, footer or
 * layout subtree still moves no lastmod. That hole predates this module and is
 * the smaller of the two errors, because it under-reports on the rare commit
 * rather than over-reporting on the common one.
 *
 * This is a build-time heuristic on top of `lastChanged`, not a compiler. It
 * reads text and matches specifiers; it does not typecheck. Granularity is the
 * file, not the field, the same tradeoff `lib/source-dates.ts` already documents:
 * all 101 area pages share one date because one template renders all 101.
 */

const ROOT = process.cwd();

/** Extension guesses for an extensionless specifier, in resolution order. */
const CANDIDATES = [".ts", ".tsx", ".json", "/index.ts", "/index.tsx"];

/**
 * `from "x"` catches static imports and re-exports, `import("x")` catches
 * next/dynamic, `import "x"` catches side-effect imports. Group 1 matches only
 * when the statement opened with `import type`, and those are dropped.
 */
const SPECIFIER = /(\bimport\s+type\b[^"']*)?(?:\bfrom\s*|\bimport\s*\(?\s*)["']([^"']+)["']/g;

const cache = new Map<string, string[]>();

function isFile(p: string): boolean {
  try {
    return statSync(p).isFile();
  } catch {
    return false;
  }
}

/** Absolute path for a local specifier, or null for anything in node_modules. */
function resolveSpecifier(spec: string, fromFile: string): string | null {
  let base: string;
  if (spec.startsWith("@/")) base = join(ROOT, spec.slice(2));
  else if (spec.startsWith(".")) base = resolve(dirname(fromFile), spec);
  else return null;

  if (isFile(base)) return base;
  for (const ext of CANDIDATES) {
    if (isFile(base + ext)) return base + ext;
  }
  return null;
}

/**
 * Repo-relative paths for `entries` and everything they import, transitively.
 * Pass a route's page file, not the shell. The result goes straight to
 * `lastChanged`, which takes an argv array, so the forward slashes here survive
 * on Windows without any quoting.
 */
export function renderGraph(...entries: string[]): string[] {
  const key = entries.join("\u0000");
  const hit = cache.get(key);
  if (hit) return hit;

  const seen = new Set<string>();
  const queue = entries.map((e) => join(ROOT, e));
  while (queue.length) {
    const file = queue.pop() as string;
    if (seen.has(file) || !isFile(file)) continue;
    seen.add(file);
    // A json data file is a leaf: no imports to follow, and reading it to find
    // none would cost the whole of content/service-areas.json on every walk.
    if (file.endsWith(".json")) continue;

    let src: string;
    try {
      src = readFileSync(file, "utf8");
    } catch {
      continue;
    }
    for (const m of src.matchAll(SPECIFIER)) {
      if (m[1]) continue; // type-only import: emits nothing
      const target = resolveSpecifier(m[2], file);
      if (target) queue.push(target);
    }
  }

  const paths = [...seen]
    .map((f) => relative(ROOT, f).split("\\").join("/"))
    .sort();
  cache.set(key, paths);
  return paths;
}

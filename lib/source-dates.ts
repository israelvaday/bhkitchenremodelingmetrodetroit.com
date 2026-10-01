import { execFileSync } from "node:child_process";

/**
 * Last-commit date for the source files that actually render a route group.
 *
 * WHY THIS EXISTS. `app/sitemap.ts` stamped `lastModified: new Date()` on 118 of
 * the 130 urls, so every build told Google that every page had changed that
 * minute — including builds that touched one word on one page. Google's sitemap
 * documentation is explicit that a lastmod it finds to be inconsistently
 * accurate is ignored for the whole site, and this domain cannot afford that:
 * there is no Search Console property, no Business Profile and no backlinks, so
 * the sitemap is the only per-url freshness signal it can emit at all.
 *
 * Granularity is the file, not the url. All 101 area pages share one date
 * because one template and one data file render all 101 — when either changes,
 * all 101 genuinely did change. That is over-broad in the other direction (a
 * one-city edit to area-insights.json redates the group) but it is still a
 * statement about content rather than about build time.
 *
 * Pathspecs are passed with `:(literal)` because route paths contain `[slug]`,
 * which git would otherwise read as a character class. execFileSync takes an
 * argv array, so no shell sees these strings and no quoting can go wrong.
 */

const cache = new Map<string, Date>();

/** Build time. The fallback whenever git cannot answer — never worse than the old behaviour. */
const BUILD_TIME = new Date();

/**
 * A commit whose message carries the trailer line `Lastmod: chrome-only` is
 * skipped when dating. Use it ONLY for a commit that changes no page's main
 * content: header, footer, mobile dock, CTA buttons and bands, metadata,
 * JSON-LD or social images. Those files sit in GLOBAL or in nearly every
 * render graph, so without the trailer one button label redates all ~136 urls
 * and tells Google every page changed when none of their content did. A
 * commit that rewrites what a page says must NOT carry it. Added 2026-09-30
 * for the owner's no-prices / contact-forms-only pass, which split the
 * chrome relabel from the body rewrites for exactly this reason.
 *
 * The bh-painting repo uses the same mechanism under the trailer
 * `Sitemap-Lastmod: keep`; both spellings are honoured here so one fleet rule
 * works on both repos. THE RULE (same as painting's): the trailer is allowed
 * only when the commit's diff changes no sentence any page shows in its main
 * content. One body sentence on one page forbids it; split such a change into
 * a chrome commit with the trailer and a copy commit without it. The skip is
 * silent, so a wrong trailer hides a real edit from every url its files date.
 */
const SKIP_TRAILERS = ["^Lastmod: chrome-only$", "^Sitemap-Lastmod: keep$"];

function gitDate(paths: string[]): Date | null {
  try {
    const out = execFileSync(
      "git",
      ["log", "-1", "--format=%cI", "--invert-grep", ...SKIP_TRAILERS.map((t) => `--grep=${t}`), "--", ...paths.map((p) => `:(literal)${p}`)],
      { cwd: process.cwd(), encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] },
    ).trim();
    if (!out) return null;
    const d = new Date(out);
    return Number.isNaN(d.getTime()) ? null : d;
  } catch {
    // No git binary, no repository, or a shallow clone with no history for the
    // path. All three mean "cannot tell", which is what the fallback is for.
    return null;
  }
}

/**
 * The most recent commit date across `paths`. Memoised per call site: a build
 * renders 101 area pages from one answer, so this shells out once per group.
 */
export function lastChanged(...paths: string[]): Date {
  const key = paths.join("\u0000");
  const hit = cache.get(key);
  if (hit) return hit;
  const d = gitDate(paths) ?? BUILD_TIME;
  cache.set(key, d);
  return d;
}

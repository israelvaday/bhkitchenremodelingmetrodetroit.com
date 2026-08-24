import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { BIZ } from "@/lib/business";
import { breadcrumbJsonLd } from "@/lib/schema";

export type Crumb = { name: string; href: string };

/**
 * The site's first breadcrumb trail, visible and machine-readable from one list.
 *
 * WHY THIS EXISTS. `lib/schema.ts` has carried `breadcrumbJsonLd()` since
 * onboarding and nothing ever imported it, so all 135 pages shipped exactly one
 * structured-data block — the site-wide LocalBusiness in `app/layout.tsx` — and
 * no page-level markup at all. Same wiring gap as `content/faq.ts` and
 * `content/area-insights.json` before it: the material was written, the import
 * was never made. BreadcrumbList is the one rich result still worth adding here.
 * FAQPage was retired in May 2026 and measures zero appearances across this
 * fleet, and rating markup is forbidden on this brand because no genuine reviews
 * exist, so this is what is left that Google actually renders.
 *
 * The visible trail and the JSON-LD are built from the SAME array on purpose.
 * Google asks that structured data describe what the reader sees, and two lists
 * maintained separately drift apart.
 *
 * `href` is the site-relative path for the on-page link; the JSON-LD item is
 * absolutised WITH a trailing slash, because next.config.ts sets
 * `trailingSlash: true` on the export and that is the url actually served — the
 * same reason `app/sitemap.ts` emits `/path/`.
 */
export function Breadcrumbs({ trail, className }: { trail: Crumb[]; className?: string }) {
  const absolute = (href: string) => `${BIZ.url}${href === "/" ? "/" : `${href}/`}`;
  const jsonLd = breadcrumbJsonLd(trail.map((c) => ({ name: c.name, url: absolute(c.href) })));
  const last = trail.length - 1;

  return (
    <>
      <nav aria-label="Breadcrumb" className={className}>
        <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-xs font-semibold md:text-sm">
          {trail.map((crumb, i) => (
            <li key={crumb.href} className="flex items-center gap-x-1.5">
              {i > 0 && <ChevronRight aria-hidden="true" className="h-3.5 w-3.5 shrink-0 text-ink-400" />}
              {i === last ? (
                <span aria-current="page" className="text-ink-200">
                  {crumb.name}
                </span>
              ) : (
                <Link href={crumb.href} className="text-brass-300 underline-offset-4 hover:underline">
                  {crumb.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}

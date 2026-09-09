import type { MetadataRoute } from "next";
import { BIZ } from "@/lib/business";
import { SERVICES } from "@/content/services";
import { AREAS } from "@/lib/areas";
import { BLOG_POSTS } from "@/content/blog";
import { lastChanged } from "@/lib/source-dates";
import { renderGraph } from "@/lib/source-graph";

export const dynamic = "force-static";

// The shared shell. Deliberately NOT walked: the footer imports content/services.ts
// to render SERVICES.slice(0, 8), so walking it would put that one file in all 132
// graphs and redate the whole site on any service-copy edit. See lib/source-graph.ts.
const GLOBAL = ["app/layout.tsx", "lib/business.ts"];

// Hoisted out of the maps below: one template renders 10 service pages and
// another renders 101 area pages, so the walk happens once per group, not once
// per url. renderGraph memoises too, but not building 111 identical keys is
// cheaper than looking them up.
const SERVICE_SOURCES = [...GLOBAL, ...renderGraph("app/services/[slug]/page.tsx")];
const AREA_SOURCES = [...GLOBAL, ...renderGraph("app/service-areas/[slug]/page.tsx")];

// The blog template's own commit date, deliberately NOT its renderGraph. Measured
// 2026-09-09: that walk reaches content/services.ts and lib/areas.ts through
// FinalCTA and LongFormFaq, and content/blog.ts on top, so one service copy edit
// or one newly published article would redate all nine posts that did not change.
// Over-reporting is the expensive direction -- Google discounts a lastmod it finds
// inaccurate across the whole site -- so this stays the two shell files plus the
// single template that renders all nine urls.
const BLOG_TEMPLATE = lastChanged(...GLOBAL, "app/blog/[slug]/page.tsx");

export default function sitemap(): MetadataRoute.Sitemap {
  const base = BIZ.url;
  // next.config.ts sets trailingSlash: true on export, so every page is served at
  // /path/ and its canonical carries the slash. Emitting /path here made all 128
  // non-homepage entries 301 redirects that disagreed with their own canonical.
  const loc = (p: string) => `${base}${p}/`;
  const staticPages = [
    "", "/services", "/service-areas", "/about", "/license",
    "/gallery", "/reviews", "/contact", "/hours", "/quote",
    "/blog", "/faq",
  ];
  return [
    ...staticPages.map((p) => ({
      url: loc(p),
      // The route's whole import graph, not just its page file. Dating these by
      // `app${p}/page.tsx` alone meant a component edit moved no lastmod at all:
      // 1459197 changed the visible text of three of these twelve urls and this
      // sitemap reported none of them. See lib/source-graph.ts.
      lastModified: lastChanged(...GLOBAL, ...renderGraph(`app${p}/page.tsx`)),
      changeFrequency: "weekly" as const,
      priority: p === "" ? 1.0 : 0.8,
    })),
    ...SERVICES.map((s) => ({
      url: loc(`/services/${s.slug}`),
      // The hand-listed files this replaces (content/services.ts, LongFormFaq,
      // Breadcrumbs) are all in the graph, so no date can move backwards.
      lastModified: lastChanged(...SERVICE_SOURCES),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...BLOG_POSTS.map((p) => ({
      url: loc(`/blog/${p.slug}`),
      // The post's own date is a real content date, not a build stamp, and it stays
      // the floor. But one template renders all nine of these urls, so an edit to it
      // changes all nine pages, and until 2026-09-09 that moved no lastmod at all:
      // e23f1e19 rewrote every post's social card and this sitemap reported nothing.
      // On a domain with no Search Console property the sitemap is the only refetch
      // signal there is, so a template fix that cannot ask for a recrawl is inert.
      lastModified: new Date(Math.max(new Date(p.date).getTime(), BLOG_TEMPLATE.getTime())),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...AREAS
      .filter((a) => a.kind !== "zip-area") // exclude noindex zip-area pages from sitemap for first 30 days
      .map((a) => ({
        url: loc(`/service-areas/${a.slug}`),
        lastModified: lastChanged(...AREA_SOURCES),
        changeFrequency: "monthly" as const,
        priority: a.main ? 0.8 : 0.6,
      })),
  ];
}

import type { Metadata } from "next";
import { AREAS, CITIES } from "@/lib/areas";
import { AreaSearch } from "@/components/site/AreaSearch";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { BIZ } from "@/lib/business";
import { LongFormFaq } from "@/components/site/LongFormFaq";
import { BuyersGuide } from "@/components/site/BuyersGuide";

const title = "Kitchen Remodeling Service Areas | Metro Detroit";
const description = `${BIZ.name} serves ${AREAS.length} Metro Detroit cities, communities, and neighborhoods. Search your area and request a kitchen remodeling quote.`;

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: `${BIZ.url}/service-areas` },
  // Per-page social identity. Without this block og:url names the homepage
  // and both og:title and twitter:title are the root layout's one shared
  // string. openGraph replaces rather than merges, so type/siteName/locale
  // AND the card image are restated here. The image is not optional: the
  // first build of this change dropped og:image from all eleven pages,
  // because the root's images do not survive the replacement and the root
  // opengraph-image route does not cascade into a segment that declares an
  // openGraph of its own - only services/[slug] and service-areas/[slug]
  // get away with omitting it, and only because each has its own route file.
  openGraph: {
    type: "website",
    siteName: BIZ.name,
    locale: "en_US",
    url: `${BIZ.url}/service-areas`,
    title: title,
    description,
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: `${BIZ.name} — Metro Detroit kitchen remodeling company` }],
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description,
    images: ["/opengraph-image.png"],
  },
};

export default function AreasPage() {
  return (
    <>
      <section className="relative bg-aurora py-20">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative mx-auto max-w-5xl px-4 text-center md:px-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-brass-400">Service Areas</p>
          <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight md:text-6xl">
            Every corner of <span className="text-brass-gradient">Metro Detroit</span>.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-ink-200">
            We cover {AREAS.length} cities, communities, and neighborhoods — from {CITIES[0]?.name} to {CITIES[CITIES.length - 1]?.name}.
          </p>
        </div>
      </section>
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <AreaSearch areas={AREAS} />
        </div>
      </section>
      <LongFormFaq subject="Metro Detroit Kitchen Remodeling" kind="service" />
      <BuyersGuide />
      <FinalCTA />
    </>
  );
}

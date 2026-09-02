import type { Metadata } from "next";
import { SERVICES } from "@/content/services";
import { BIZ } from "@/lib/business";
import { ServiceCard } from "@/components/site/ServiceCard";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { LongFormFaq } from "@/components/site/LongFormFaq";

const title = "Kitchen Remodeling Services | Metro Detroit, MI";
const description =
  "Custom kitchen remodeling, cabinet installation, countertop replacement, and kitchen design across Wayne, Oakland, and Macomb counties in Metro Detroit.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: `${BIZ.url}/services` },
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
    url: `${BIZ.url}/services`,
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

export default function ServicesPage() {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return (
    <>
      <section className="relative bg-aurora py-20">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative mx-auto max-w-5xl px-4 text-center md:px-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-brass-400">Services</p>
          <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight md:text-6xl">
            Kitchen remodeling services across <span className="text-brass-gradient">Metro Detroit</span>.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-ink-200">
            Explore ten service lines with the layout, material, and sequencing details behind each, from cabinets,
            countertops, and islands to backsplash, flooring, lighting, and full kitchen remodels.
          </p>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:grid-cols-2 md:px-6 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
              <ServiceCard
                key={s.slug}
                slug={s.slug}
                name={s.name}
                shortName={s.shortName}
                tagline={s.tagline}
                Icon={s.icon}
                photoSrc={`${base}/photos/service-hero-${s.slug}.png`}
                photoAlt={`${s.name} project inspiration`}
                photoW={1600}
                photoH={900}
                city="Metro Detroit, MI"
                priority={i < 3}
              />
          ))}
        </div>
      </section>
      <LongFormFaq subject="Metro Detroit Kitchen Remodeling" kind="service" />
      <FinalCTA />
    </>
  );
}


import type { Metadata } from "next";
import { CustomerExperience } from "@/components/sections/CustomerExperience";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { LongFormFaq } from "@/components/site/LongFormFaq";
import { BIZ } from "@/lib/business";

const title = "Customer Experience";
const description = `Review the service commitments ${BIZ.name} uses to guide kitchen remodeling projects across Metro Detroit.`;
// The root layout's "%s — <brand>" template lengthens the rendered <title>,
// so the social title is spelled out to mirror what the page actually serves.
const socialTitle = `${title} — ${BIZ.name}`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${BIZ.url}/reviews` },
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
    url: `${BIZ.url}/reviews`,
    title: socialTitle,
    description,
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: `${BIZ.name} — Metro Detroit kitchen remodeling company` }],
  },
  twitter: {
    card: "summary_large_image",
    title: socialTitle,
    description,
    images: ["/opengraph-image.png"],
  },
};

export default function CustomerExperiencePage() {
  return (
    <>
      <section className="relative bg-aurora py-20">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative mx-auto max-w-4xl px-4 text-center md:px-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-brass-400">Customer experience</p>
          <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight md:text-6xl">
            The service experience we aim to deliver.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-ink-200">
            We are not publishing customer testimonials or a verified rating here. Instead, this page lists the
            commitments that shape our kitchen remodeling process.
          </p>
        </div>
      </section>
      <CustomerExperience />
      <LongFormFaq subject="Metro Detroit Kitchen Remodeling" kind="service" />
      <FinalCTA />
    </>
  );
}

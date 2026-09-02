import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import { BIZ } from "@/lib/business";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { LogoMark } from "@/components/site/Logo";

const title = "Business & Insurance Information";
const description = `Request current business and insurance information for ${BIZ.name} kitchen remodeling work in Metro Detroit.`;
// The root layout's "%s — <brand>" template lengthens the rendered <title>,
// so the social title is spelled out to mirror what the page actually serves.
const socialTitle = `${title} — ${BIZ.name}`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${BIZ.url}/license` },
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
    url: `${BIZ.url}/license`,
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

export default function CredentialsPage() {
  return (
    <>
      <section className="relative bg-aurora py-20">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative mx-auto max-w-3xl px-4 text-center md:px-6">
          <ShieldCheck className="mx-auto h-10 w-10 text-brass-400" />
          <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight md:text-6xl">
            Business &amp; insurance information
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-ink-200">
            This page does not claim or publish a specific contractor license. Remodeling requirements can vary by work
            type and jurisdiction. Ask {BIZ.name} for current business and insurance information relevant to your
            project before approval.
          </p>
        </div>
      </section>
      <section className="py-12">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <div className="overflow-hidden rounded-2xl border border-brass-500/30 bg-ink-900/50 p-6 text-center">
            <LogoMark className="mx-auto h-24 w-24 text-2xl" />
            <p className="mt-4 text-sm text-ink-300">
              Need documentation for a property or commercial project? Call {BIZ.phone} or email {BIZ.email}.
            </p>
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}

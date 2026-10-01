import type { Metadata } from "next";
import { Building2 } from "lucide-react";
import { BIZ } from "@/lib/business";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { LogoMark } from "@/components/site/Logo";

// 2026-09-30, owner decision: there is no licence, so this page claims none.
// It used to be "Business & Insurance Information"; it now only invites the
// reader to ask for business details. The url keeps answering 200 so old
// links still land somewhere, but the page is noindex, is out of the sitemap
// (app/sitemap.ts) and is not linked from the nav or footer. Do not add a
// licence, insurance or bonding statement here, and do not re-index it.
const title = "Business Details | BH Kitchen Remodeling";
const description = `Ask ${BIZ.name} for the business details you need before a kitchen remodeling project in Metro Detroit.`;
const socialTitle = title;

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  robots: { index: false, follow: true },
  alternates: { canonical: `${BIZ.url}/license` },
  // Per-page social identity. openGraph replaces rather than merges, so
  // type/siteName/locale AND the card image are restated here.
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

export default function BusinessDetailsPage() {
  return (
    <>
      <section className="relative bg-aurora py-20">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative mx-auto max-w-3xl px-4 text-center md:px-6">
          <Building2 className="mx-auto h-10 w-10 text-brass-400" />
          <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight md:text-6xl">
            Business details
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-ink-200">
            Have a question about {BIZ.name} before you start a kitchen project? Ask us for the business details you
            need and we will answer them directly.
          </p>
        </div>
      </section>
      <section className="py-12">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <div className="overflow-hidden rounded-2xl border border-brass-500/30 bg-ink-900/50 p-6 text-center">
            <LogoMark className="mx-auto h-24 w-24 text-2xl" />
            <p className="mt-4 text-sm text-ink-300">
              Call {BIZ.phone} or email {BIZ.email} with your question.
            </p>
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}

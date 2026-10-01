import type { Metadata } from "next";
import { BIZ } from "@/lib/business";
import { QuoteWizard } from "@/components/site/QuoteWizard";
import { ContactCTA } from "@/components/site/ContactCTA";
import { LongFormFaq } from "@/components/site/LongFormFaq";

// 2026-09-30, owner decision: BH brand sites carry contact forms only and no
// prices, so this url (kept, it is linked from every page) is the contact form
// page. Its title stays distinct from /contact/ ("Contact Us | ..."), absolute,
// and under 60 chars (51). Since 2026-09-02 the same string is also the
// og:title and twitter:title. Never put quote, estimate or price wording back.
const title = "Send Us a Message | Kitchen Remodeling Metro Detroit";
const description = `Message ${BIZ.name} about your kitchen. Describe the project in the form, then text photos or plans to ${BIZ.phone}.`;
// The title is absolute now, so the social title is the same string rather
// than a spelled-out copy of what the template used to append.
const socialTitle = title;

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/quote" },
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
    url: `${BIZ.url}/quote`,
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

export default function QuotePage() {
  return (
    <>
      <section className="relative bg-aurora py-14 md:py-20">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative mx-auto max-w-3xl px-4 text-center md:px-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-brass-400">Contact form</p>
          <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight md:text-6xl">
            Send us a <span className="text-brass-gradient">message</span>.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-ink-200">
            One question at a time: choose the kitchen remodeling service and property type, then share your layout goals, materials, condition, and timing.
          </p>
          <div className="mt-6 flex justify-center">
            <ContactCTA size="md" />
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <QuoteWizard />
        </div>
      </section>

      <section className="border-t border-ink-800 py-16">
        <div className="mx-auto max-w-3xl space-y-6 px-4 text-sm text-ink-200 md:px-6">
          <div>
            <h2 className="font-display text-2xl font-bold text-white md:text-3xl">How the form works</h2>
            <p className="mt-3">
              The picture-driven wizard collects the basic information needed to understand a Metro Detroit Kitchen Remodeling
              request. There is no account to create and no obligation to proceed.
            </p>
            <p className="mt-3">
              The form sends your details only. After you send it, text wide shots of the room and close-ups of
              cabinets, countertops, the backsplash, flooring, the sink and appliance run, or existing plans and
              elevations to {BIZ.phone}. Photos can clarify condition and scope, though some projects still need an
              on-site review.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-white md:text-3xl">What you can ask us about</h2>
            <p className="mt-3">
              Choose custom kitchen remodeling, cabinet installation, countertop replacement, kitchen design,
              backsplash and tile, lighting upgrades, kitchen flooring, a kitchen island, appliance layout, or a
              partial kitchen refresh.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-white md:text-3xl">What drives the cost</h2>
            <p className="mt-3">
              The cost of a kitchen project is driven by the layout, cabinet and countertop selections, backsplash and
              flooring, lighting and electrical coordination, appliance fit, demolition and disposal, exclusions, and
              timing. Call {BIZ.phone} for a price on your job. If scope changes, confirm the added work in writing.
              You can also text project photos to {BIZ.phone}.
            </p>
          </div>
        </div>
      </section>
      <LongFormFaq subject="Metro Detroit Kitchen Remodeling" kind="service" />
    </>
  );
}

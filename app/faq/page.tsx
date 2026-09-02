import type { Metadata } from "next";
import Image from "next/image";
import { BIZ } from "@/lib/business";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { LongFormFaq } from "@/components/site/LongFormFaq";
import { FAQ_SECTIONS, FAQ_HERO_IMAGE, FAQ_HERO_ALT } from "@/content/faq";

const ALL_FAQ_ITEMS = FAQ_SECTIONS.flatMap((section) => section.items);

const title = "Kitchen Remodeling FAQ";
const description = `Kitchen remodel cost, cabinets, countertops, permits, timelines, and living at home during a remodel. Answers from ${BIZ.name}.`;
// The root layout's "%s — <brand>" template lengthens the rendered <title>,
// so the social title is spelled out to mirror what the page actually serves.
const socialTitle = `${title} — ${BIZ.name}`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${BIZ.url}/faq` },
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
    url: `${BIZ.url}/faq`,
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

export default function FAQPage() {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: ALL_FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="relative bg-aurora py-20">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 md:grid-cols-2 md:px-6">
          <div className="text-center md:text-left">
            <p className="text-sm font-semibold uppercase tracking-wider text-brass-400">FAQ</p>
            <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight md:text-6xl">
              Practical answers about <span className="text-brass-gradient">kitchen remodeling</span>.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-ink-200 md:mx-0">
              Cost, scope, cabinets, countertops, permits, timelines, materials, and living at home while the work happens.
            </p>
          </div>
          <div className="relative aspect-[5/4] overflow-hidden rounded-3xl border border-brass-500/30">
            <Image
              src={`${base}${FAQ_HERO_IMAGE}`}
              alt={FAQ_HERO_ALT}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="border-y border-ink-800 bg-ink-950 py-6">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <ul className="flex flex-wrap items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider md:text-sm">
            {FAQ_SECTIONS.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-ink-700 bg-ink-900/70 px-3 py-1.5 text-ink-200 transition hover:border-brass-500/60 hover:text-brass-300"
                >
                  <span>{section.emoji}</span>
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto flex max-w-3xl flex-col gap-12 px-4 md:px-6">
          {FAQ_SECTIONS.map((section) => (
            <div key={section.id} id={section.id} className="scroll-mt-28">
              <div className="mb-5 text-center">
                <div className="text-3xl">{section.emoji}</div>
                <h2 className="mt-1 font-display text-2xl font-extrabold tracking-tight md:text-3xl">
                  {section.title}
                </h2>
                <p className="mt-1 text-sm text-ink-400">{section.description}</p>
              </div>
              <FAQAccordion items={[...section.items]} sectionId={section.id} />
            </div>
          ))}
        </div>
      </section>

      <LongFormFaq subject="Metro Detroit Kitchen Remodeling" kind="service" />
      <FinalCTA />
    </>
  );
}

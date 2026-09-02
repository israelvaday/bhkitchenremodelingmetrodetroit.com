import type { Metadata } from "next";
import { Clock } from "lucide-react";
import { BIZ } from "@/lib/business";
import { ContactCTA } from "@/components/site/ContactCTA";

const title = "Business Hours";
const description = `${BIZ.name} hours: Sunday–Thursday 9:00 AM–5:00 PM, Friday 9:00 AM–12:00 PM, and Saturday closed.`;
// The root layout's "%s — <brand>" template lengthens the rendered <title>,
// so the social title is spelled out to mirror what the page actually serves.
const socialTitle = `${title} — ${BIZ.name}`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/hours" },
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
    url: `${BIZ.url}/hours`,
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

function displayTime(value: string) {
  const [hourText, minute] = value.split(":");
  const hour = Number(hourText);
  const period = hour >= 12 ? "PM" : "AM";
  const displayHour = hour % 12 || 12;
  return `${displayHour}:${minute} ${period}`;
}

export default function HoursPage() {
  return (
    <section className="relative overflow-hidden bg-aurora py-24">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative mx-auto max-w-5xl px-4 text-center md:px-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-brass-500/40 bg-brass-500/10 px-4 py-2 text-sm font-semibold text-brass-300">
          <Clock className="h-4 w-4" /> Posted business hours
        </div>
        <h1 className="mt-6 font-display text-5xl font-extrabold tracking-tight md:text-7xl">
          kitchen remodeling project <span className="text-brass-gradient">hours</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-200">
          Contact {BIZ.name} during the schedule below. Quote requests received outside these hours can be reviewed
          during business hours.
        </p>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-7">
          {BIZ.hours.map((entry) => {
            const isClosed = "closed" in entry && entry.closed;
            return (
              <div
                key={entry.day}
                className={`rounded-2xl border px-3 py-4 text-center ${
                  isClosed
                    ? "border-ink-700 bg-ink-900/60"
                    : "border-emerald-500/30 bg-emerald-500/5"
                }`}
              >
                <p className={`text-xs font-semibold uppercase tracking-wider ${isClosed ? "text-ink-400" : "text-emerald-300"}`}>
                  {entry.label}
                </p>
                <p className="mt-2 font-mono text-sm font-bold text-white">
                  {isClosed ? "Closed" : `${displayTime(entry.open)}–${displayTime(entry.close)}`}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <ContactCTA size="lg" />
        </div>
      </div>
    </section>
  );
}

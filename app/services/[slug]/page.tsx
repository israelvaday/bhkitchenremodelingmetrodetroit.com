import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ShieldCheck, Clock, MapPin } from "lucide-react";
import { BIZ } from "@/lib/business";
import { SERVICES } from "@/content/services";
import { ContactCTA } from "@/components/site/ContactCTA";
import { LogoMark } from "@/components/site/Logo";
import { ServiceMap } from "@/components/site/ServiceMap";
import { AvailabilityChecker } from "@/components/site/HomeDispatchTracker";
import { LongFormFaq } from "@/components/site/LongFormFaq";
import { Reveal, RevealItem, RevealStagger } from "@/components/site/Reveal";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

// Meta descriptions were a hard slice(0, 160), which cut all ten of these mid-word:
// countertop-replacement served "...We coordinate templating, seam placement, " with
// a dangling comma. Prefer whole sentences. Seven of the ten fill the budget that
// way; the other three open with a short sentence whose successor cannot fit, so
// those fall through to a WORD boundary marked with an ellipsis, which reads as a
// deliberate cut where a severed comma read as a bug.
const DESCRIPTION_LIMIT = 158;
const DESCRIPTION_FLOOR = 110;

function serviceDescription(description: string): string {
  const sentences = description.split(/(?<=[.!?])\s+/);
  let whole = "";
  for (const sentence of sentences) {
    const candidate = whole ? `${whole} ${sentence}` : sentence;
    if (candidate.length > DESCRIPTION_LIMIT) break;
    whole = candidate;
  }
  if (whole.length >= DESCRIPTION_FLOOR) return whole;

  const rest = description.slice(whole.length).trim();
  if (!rest) return whole || description.slice(0, DESCRIPTION_LIMIT);
  let filled = whole;
  for (const word of rest.split(/\s+/)) {
    const candidate = filled ? `${filled} ${word}` : word;
    if (candidate.length + 1 > DESCRIPTION_LIMIT) break;
    filled = candidate;
  }
  return `${filled.replace(/[\s,;:.\u2014-]+$/, "")}\u2026`;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = SERVICES.find((x) => x.slug === slug);
  if (!s) return {};
  const title = `${s.name} | Metro Detroit, MI`;
  const description = serviceDescription(s.description);
  return {
    // absolute opts out of the root layout's "%s — <brand>" template, which was
    // spending 38 chars on a brand suffix and pushing six of these ten titles
    // past 60: appliance-layout and island-installation to 65, backsplash,
    // lighting and custom-remodeling to 63, partial-refresh to 61.
    //
    // The geo term is restated deliberately. It used to reach the page ONLY
    // inside that suffix ("BH Kitchen Remodeling Metro Detroit"), so dropping
    // the suffix without this would strip the geo from ten pages that six
    // geo-modified tracked keywords land on. Now it leads the tail instead of
    // trailing a brand name, and every title fits in 34-47 chars.
    title: { absolute: title },
    description,
    alternates: { canonical: `/services/${s.slug}` },
    // Without this block all ten service pages inherited one shared social title
    // from the root layout - "BH Kitchen Remodeling Metro Detroit - Metro Detroit
    // Kitchen Remodeling" - with no service term in it at all, and og:url pointed
    // every one of them at the homepage. openGraph is replaced wholesale rather
    // than merged, so type/siteName/locale are restated here; og:image still comes
    // from the per-service opengraph-image file route.
    openGraph: {
      type: "website",
      siteName: BIZ.name,
      locale: "en_US",
      url: `${BIZ.url}/services/${s.slug}`,
      title,
      description,
    },
    // X reads twitter:title in preference to og:title, so the per-page social title
    // above would not reach that surface while this block stayed inherited. images
    // is deliberately omitted: the root sets twitter.images to the generic homepage
    // PNG, and dropping it lets the per-service opengraph-image route supply the
    // card on X too, the same outcome a560797 measured on the area pages.
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = SERVICES.find((x) => x.slug === slug);
  if (!s) return notFound();
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const heroSrc = `${base}/photos/service-hero-${s.slug}.png`;
  const Icon = s.icon;

  return (
    <>
      <section className="relative overflow-hidden border-b border-ink-800 bg-ink-950">
        <Image
          src={heroSrc}
          alt={`${s.name} project inspiration`}
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 z-0 object-cover opacity-60"
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-ink-950 via-ink-950/80 to-ink-950/40" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-brass-500/40 bg-ink-950/70 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-brass-300 backdrop-blur">
              <LogoMark className="h-4 w-4" />
              {BIZ.name} · Metro Detroit Kitchen Remodeling
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-300 backdrop-blur">
              <Clock className="h-3.5 w-3.5" /> Sun–Thu 9–5 · Fri 9–12
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-ink-700 bg-ink-950/60 px-3 py-1.5 text-xs font-semibold text-ink-200 backdrop-blur">
              <MapPin className="h-3.5 w-3.5 text-brass-400" /> All of Metro Detroit
            </span>
          </div>
          <div className="mt-5 flex items-center gap-3">
            <Icon className="h-7 w-7 text-brass-400" />
            <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-brass-400">
              {s.shortName}
            </p>
          </div>
          <h1 className="mt-2 max-w-3xl font-display text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
            {s.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-200">{s.tagline}</p>
          <div className="mt-7">
            <ContactCTA size="lg" />
          </div>
        </div>
      </section>

      <section className="border-b border-ink-800 bg-ink-950 py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <Reveal variant="zoom">
            <AvailabilityChecker
              service={{
                slug: s.slug,
                name: s.name,
                // AvailabilityChecker wraps this in "Is your {x} project in our
                // service area?" and its own fallback is the prose "kitchen
                // remodeling", so it wants the prose name, not the nav chip:
                // shortName gave "Is your islands project ...".
                shortName: s.proseName,
                tagline: s.tagline,
                bullets: s.bullets,
              }}
            />
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-3 md:px-6">
          <Reveal className="md:col-span-2">
            <h2 className="font-display text-2xl font-bold md:text-3xl">What&apos;s included</h2>
            <p className="mt-4 text-ink-200">{s.description}</p>
            {s.guide && (
              <p className="mt-3 text-ink-200">
                Planning this yourself first? Read our guide to{" "}
                <Link href={s.guide.href} className="text-brass-300 underline-offset-4 hover:underline">
                  {s.guide.anchor}
                </Link>
                .
              </p>
            )}
            <RevealStagger className="mt-6 grid gap-3 sm:grid-cols-2" stagger={0.06}>
              {s.bullets.map((b) => (
                <RevealItem key={b}>
                  <div className="flex h-full items-start gap-3 rounded-2xl border border-ink-800 bg-ink-900/50 p-4 transition hover:-translate-y-0.5 hover:border-brass-500/40">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brass-500/15 text-brass-400">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm text-ink-100">{b}</span>
                  </div>
                </RevealItem>
              ))}
            </RevealStagger>
          </Reveal>
          <Reveal delay={0.1} variant="tilt" className="space-y-4">
            <div className="rounded-3xl border border-brass-500/30 bg-brass-500/5 p-5">
              <div className="flex items-center gap-2 text-brass-300">
                <ShieldCheck className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-wider">Scope &amp; protection</span>
              </div>
              <p className="mt-2 text-sm text-ink-200">
                We discuss demolition, adjacent-room protection, cabinet and counter selections, trade coordination,
                access, and daily cleanup before work begins. Insurance information is available on request.
              </p>
            </div>
            <div className="rounded-3xl border border-ink-800 bg-ink-900/50 p-5">
              <h3 className="font-display text-lg font-bold">Request this service</h3>
              <p className="mt-1 text-sm text-ink-300">Share your kitchen layout, selections, and preferred timing.</p>
              <div className="mt-4">
                <ContactCTA size="md" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-ink-800 py-12">
        <div className="mx-auto max-w-3xl px-4 text-center text-sm text-ink-400 md:px-6">
          Service imagery is project inspiration and represents the kind of work we perform. It is not presented as a
          completed customer project.
        </div>
      </section>

      <section className="border-t border-ink-800 py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <Reveal>
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-brass-400">Service area</p>
                <h2 className="mt-2 font-display text-2xl font-bold md:text-3xl">
                  {s.name} service across Metro Detroit
                </h2>
                <p className="mt-2 max-w-2xl text-ink-300">
                  Kitchen remodeling across Wayne, Oakland &amp; Macomb counties during posted business hours.
                </p>
              </div>
              <Link href="/service-areas" className="hidden text-sm font-semibold text-brass-400 hover:text-brass-300 md:inline-flex">
                All service areas →
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.1} variant="zoom">
            <ServiceMap
              lat={BIZ.geo.lat}
              lng={BIZ.geo.lng}
              zoom={BIZ.metroMap.zoom}
              title={`${s.shortName} — Metro Detroit, MI`}
              height={420}
            />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-ink-800 py-16">
        <div className="mx-auto max-w-3xl space-y-5 px-4 text-sm text-ink-200 md:px-6 md:text-base">
          <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
            More about {s.proseName} in Metro Detroit
          </h2>
          <p>
            {s.description} On every {s.proseName} job, {BIZ.name} reviews the existing layout,
            cabinet and counter condition, how the household uses the room, appliance and utility positions, access,
            and cleanup requirements before finalizing scope.
          </p>
          <p>
            We serve all of Metro Detroit for {s.proseName} — Detroit, Dearborn, Warren, Sterling Heights, Troy, Livonia, Royal Oak, Farmington Hills, Pontiac, Southfield, Westland, Taylor, and every city in our{" "}
            <a href="/service-areas" className="text-brass-300 underline-offset-2 hover:underline">coverage map</a>.
            Project dates are discussed after we understand the scope and current schedule.
          </p>
          <p>
            Pricing for {s.proseName} depends on the included scope, cabinet and countertop tier,
            material selections, trade coordination, access, protection, and timing. The estimate should identify
            assumptions and exclusions; proposed scope changes should be discussed and documented before added work
            proceeds.
          </p>
          <p>
            We document the agreed demolition, cabinet and countertop selections, backsplash and flooring materials,
            appliance and lighting coordination, and closeout expectations so everyone is working from the same plan.
          </p>
          {s.deepDive?.map((d) => (
            <div key={d.heading} className="space-y-2 pt-2">
              <h3 className="font-display text-lg font-bold text-white md:text-xl">{d.heading}</h3>
              <p>{d.body}</p>
            </div>
          ))}
        </div>
      </section>

      <LongFormFaq subject={s.proseName} kind="service" items={s.faq} />

      <section className="border-t border-ink-800 bg-aurora py-16 text-center">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <Reveal>
            <h2 className="font-display text-3xl font-extrabold md:text-4xl">
              Planning {s.proseName} work in Metro Detroit?
            </h2>
            <p className="mt-3 text-ink-200">Tell {BIZ.name} about the layout and finishes you have in mind.</p>
            <div className="mt-6 flex justify-center">
              <ContactCTA size="lg" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

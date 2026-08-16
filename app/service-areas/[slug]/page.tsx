import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, ChefHat, Clock, MapPin, Sparkles } from "lucide-react";
import { AREAS, AREAS_BY_SLUG, nearbyAreas, type Area } from "@/lib/areas";
import { SERVICES } from "@/content/services";
import { BIZ } from "@/lib/business";
import { areaDescription, insightFor } from "@/lib/area-insights";
import { ContactCTA } from "@/components/site/ContactCTA";
import { ServiceMap } from "@/components/site/ServiceMap";
import { AreaAvailabilityChecker } from "@/components/site/DispatchTracker";
import { LongFormFaq } from "@/components/site/LongFormFaq";

export function generateStaticParams() {
  return AREAS.map((area) => ({ slug: area.slug }));
}

// A sub-area name on its own is not a place: 50 of these pages are neighborhoods,
// and 35 of them carry a name that never mentions its city, so the old title read
// "Downtown, MI" or "East Side, MI". The slug already knows the parent
// (detroit-downtown), the title did not. Append the parent city unless the name
// already contains it, so "Sterling Heights Utica corridor" is left alone.
function areaPlaceName(area: Area): string {
  const parent = area.parent ? AREAS_BY_SLUG[area.parent] : undefined;
  const parentLead = parent?.name.split(" ")[0].toLowerCase();
  return parent && parentLead && !area.name.toLowerCase().includes(parentLead)
    ? `${area.name}, ${parent.name}`
    : area.name;
}

function areaPlace(area: Area): string {
  return `${areaPlaceName(area)}, MI`;
}

// Titles are built with `absolute` rather than going through the root layout's
// "%s — <brand>" template. That template put all 101 area titles at 76-103 chars,
// so Google cut them mid-brand and the 38-char suffix bought nothing a title
// already saying "Kitchen Remodeling" and "MI" did not. The service terms are
// only appended when they still fit inside the ~60-char SERP budget.
function areaTitle(area: Area): string {
  const base = `Kitchen Remodeling in ${areaPlace(area)}`;
  const withServices = `${base} | Cabinets & Countertops`;
  return withServices.length <= 60 ? withServices : base;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = AREAS_BY_SLUG[slug];
  if (!area) return {};
  const description = areaDescription(area.name, insightFor(area.slug));
  return {
    title: { absolute: areaTitle(area) },
    description,
    alternates: { canonical: `/service-areas/${area.slug}` },
    // Without this block all 101 area pages inherited one shared social title
    // from the root layout — "BH Kitchen Remodeling Metro Detroit — Metro
    // Detroit Kitchen Remodeling" — with no city in it at all. openGraph is
    // replaced wholesale rather than merged, so type/siteName/locale are
    // restated here; og:image still comes from the opengraph-image file route.
    openGraph: {
      type: "website",
      siteName: BIZ.name,
      locale: "en_US",
      url: `${BIZ.url}/service-areas/${area.slug}`,
      title: areaTitle(area),
      description,
    },
    // X reads twitter:title in preference to og:title, so the per-page social
    // title above did not reach that surface while this block was inherited
    // whole from the root layout. twitter is replaced wholesale too, so card
    // is restated. images is deliberately omitted: there is no twitter-image
    // file convention in this route, and dropping the root's explicit
    // twitter.images lets the per-area opengraph-image route supply the card.
    twitter: {
      card: "summary_large_image",
      title: areaTitle(area),
      description,
    },
  };
}

export default async function AreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = AREAS_BY_SLUG[slug];
  if (!area) return notFound();

  const nearby = nearbyAreas(area, 6);
  const insight = insightFor(area.slug);
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const heroSrc = `${base}/photos/service-hero-custom-kitchen-remodeling.png`;

  return (
    <>
      <section className="relative overflow-hidden border-b border-ink-800 bg-ink-950">
        <Image
          src={heroSrc}
          alt={`kitchen remodeling project inspiration for ${area.name}, Michigan`}
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 z-0 object-cover opacity-40"
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-ink-950 via-ink-950/85 to-ink-950/50" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_minmax(360px,440px)]">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-brass-500/40 bg-ink-950/70 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-brass-300 backdrop-blur">
                  <ChefHat className="h-3.5 w-3.5" /> Metro Detroit Kitchen Remodeling
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-300 backdrop-blur">
                  <Clock className="h-3.5 w-3.5" /> Sun–Thu 9–5 · Fri 9–12
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-ink-700 bg-ink-950/60 px-3 py-1.5 text-xs font-semibold text-ink-200 backdrop-blur">
                  <MapPin className="h-3.5 w-3.5 text-brass-400" /> {areaPlace(area)}
                </span>
              </div>
              <h1 className="mt-5 font-display text-4xl font-extrabold tracking-tight md:text-6xl">
                Kitchen remodeling services in{" "}
                <span className="text-brass-gradient">{areaPlaceName(area)}</span>, MI
              </h1>
              <p className="mt-4 max-w-2xl text-base text-ink-200 md:text-lg">
                {BIZ.name} serves {area.name} with custom kitchen remodeling, cabinet installation, countertop replacement, kitchen design,
                backsplash and tile, lighting upgrades, kitchen flooring, island installation, appliance layout, and partial refresh options.
              </p>
              <div className="mt-7">
                <ContactCTA size="lg" />
              </div>
            </div>
            <AreaAvailabilityChecker areaName={area.name} areaSlug={area.slug} />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-brass-400">{area.name} coverage</p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight md:text-4xl">
              Map centered on {area.name}
            </h2>
            <p className="mt-2 text-sm text-ink-300">
              Coordinates retained for this service-area page: {area.lat.toFixed(3)}°, {area.lng.toFixed(3)}°.
            </p>
          </div>
          <ServiceMap
            lat={area.lat}
            lng={area.lng}
            zoom={area.kind === "city" ? 13 : 14}
            title={areaPlace(area)}
            height={460}
          />
        </div>
      </section>

      <section className="border-t border-ink-800 py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-brass-400">kitchen remodeling services</p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight md:text-4xl">
              Service options in {area.name}
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group flex items-start gap-3 rounded-2xl border border-ink-800 bg-ink-900/50 p-4 transition-all hover:-translate-y-0.5 hover:border-brass-500/50"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brass-500/10 text-brass-400">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="flex-1">
                    <h3 className="font-semibold text-ink-100">
                      {service.shortName} in {area.name}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-sm text-ink-300">{service.tagline}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-ink-500 transition-all group-hover:translate-x-1 group-hover:text-brass-400" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {nearby.length > 0 && (
        <section className="border-t border-ink-800 py-16">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <h2 className="font-display text-2xl font-bold md:text-3xl">Nearby service areas</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {nearby.map((neighbor) => (
                <Link
                  key={neighbor.slug}
                  href={`/service-areas/${neighbor.slug}`}
                  className="group flex items-center justify-between rounded-2xl border border-ink-800 bg-ink-900/50 p-4 hover:border-brass-500/40"
                >
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-brass-400" />
                    <span className="font-semibold">{neighbor.name}</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-ink-500 group-hover:text-brass-400" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {insight && (
        <section className="border-t border-ink-800 py-16">
          <div className="mx-auto max-w-3xl space-y-5 px-4 text-sm text-ink-200 md:px-6 md:text-base">
            <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
              Kitchens in {area.name}
            </h2>
            <p>{insight.neighborhood_notes}</p>

            <div className="space-y-3 pt-2">
              <h3 className="font-display text-lg font-bold text-white md:text-xl">
                Project types this page covers
              </h3>
              <ul className="grid gap-2 sm:grid-cols-2">
                {insight.common_calls.map((call) => (
                  <li
                    key={call}
                    className="flex items-start gap-3 rounded-xl border border-ink-800 bg-ink-900/40 px-4 py-3"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brass-400" />
                    <span className="first-letter:uppercase">{call}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-ink-300">
              We cover {area.name} and the surrounding streets, including the area around{" "}
              {insight.landmarks.join(", ")}.
            </p>
          </div>
        </section>
      )}

      <section className="border-t border-ink-800 py-16">
        <div className="mx-auto max-w-3xl space-y-5 px-4 text-sm text-ink-200 md:px-6 md:text-base">
          <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
            Planning a kitchen remodel in {area.name}
          </h2>
          <p>
            A useful estimate starts with the room itself and how much of it changes. Tell us whether the project
            keeps the existing layout, moves cabinets or plumbing, replaces countertops only, adds an island, or
            opens the kitchen into an adjoining room.
          </p>
          <p>
            Preparation may include measuring the existing cabinet run, checking wall and floor level, confirming
            appliance clearances, and planning demolition and disposal. The appropriate steps depend on the existing
            kitchen and should be described in the written scope rather than assumed.
          </p>
          <p>
            Cabinet, countertop, backsplash, and flooring selections affect both the finished look and the schedule.
            Lead times on cabinetry and stone are usually the longest item in a kitchen timeline, so those decisions
            are worth making early.
          </p>
          <p className="flex items-start gap-2">
            <Sparkles className="mt-1 h-4 w-4 shrink-0 text-brass-400" />
            Share the project address and preferred timing through the quote form so we can confirm coverage in
            {` ${area.name}`} and discuss next steps.
          </p>
        </div>
      </section>

      <LongFormFaq subject={area.name} kind="area" />

      <section className="border-t border-ink-800 bg-aurora py-16 text-center">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <h2 className="font-display text-3xl font-extrabold md:text-4xl">
            Have a kitchen remodeling project in {area.name}?
          </h2>
          <p className="mt-3 text-ink-200">Tell {BIZ.name} what you have in mind for the kitchen.</p>
          <div className="mt-6 flex justify-center">
            <ContactCTA size="lg" />
          </div>
        </div>
      </section>
    </>
  );
}

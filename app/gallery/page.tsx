import type { Metadata } from "next";
import { BIZ } from "@/lib/business";
import { SERVICES } from "@/content/services";
import { ContactCTA } from "@/components/site/ContactCTA";
import { LongFormFaq } from "@/components/site/LongFormFaq";
import { BuyersGuide } from "@/components/site/BuyersGuide";
import { KitchenGlossary } from "@/components/site/KitchenGlossary";
import { GalleryClient } from "./gallery-client";

export const metadata: Metadata = {
  title: { absolute: "Kitchen Remodeling Gallery | Metro Detroit, MI" },
  description: `Explore kitchen remodeling project inspiration from ${BIZ.name} for full remodels, cabinets, counters, backsplash, islands, lighting, and flooring.`,
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const servicePhotos = SERVICES.map((service) => ({
    id: service.slug,
    src: `${base}/photos/service-hero-${service.slug}.png`,
    alt: `${service.name} project inspiration from ${BIZ.name}`,
    width: 1600,
    height: 900,
  }));
  const inGroup = (slugs: string[]) => servicePhotos.filter((photo) => slugs.includes(photo.id));

  const groups = [
    { key: "all", label: "All inspiration", photos: servicePhotos },
    {
      key: "full-remodel",
      label: "Full remodels",
      photos: inGroup(["custom-kitchen-remodeling", "partial-kitchen-refresh", "kitchen-design"]),
    },
    {
      key: "cabinets-counters",
      label: "Cabinets & counters",
      photos: inGroup(["cabinet-installation", "countertop-replacement", "kitchen-island-installation"]),
    },
    {
      key: "finishes",
      label: "Backsplash & flooring",
      photos: inGroup(["kitchen-backsplash-tile", "kitchen-flooring"]),
    },
    {
      key: "planning",
      label: "Design & appliances",
      photos: inGroup(["kitchen-appliance-layout", "kitchen-lighting-upgrades"]),
    },
  ].filter((group) => group.photos.length > 0);

  return (
    <>
      <section className="border-b border-ink-800 bg-aurora py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-brass-400">Gallery</p>
          <h1 className="mt-2 font-display text-4xl font-extrabold tracking-tight md:text-6xl">
            Metro Detroit <span className="text-brass-gradient">kitchen inspiration</span>.
          </h1>
          <p className="mt-4 max-w-2xl text-ink-200">
            Visual references for the kind of custom kitchen remodeling, cabinet installation, countertop replacement,
            backsplash, island, lighting, and flooring work we perform.
          </p>
          <p className="mt-2 max-w-2xl text-sm text-ink-400">
            Images are illustrative project inspiration and are not presented as completed customer projects.
          </p>
          <div className="mt-6">
            <ContactCTA size="md" />
          </div>
        </div>
      </section>

      <GalleryClient groups={groups} />

      <section className="border-t border-ink-800 py-16">
        <div className="mx-auto max-w-3xl space-y-6 px-4 text-sm text-ink-200 md:px-6">
          <div>
            <h2 className="font-display text-2xl font-bold text-white md:text-3xl">Using inspiration well</h2>
            <p className="mt-3">
              Save examples of cabinet styles, counter materials, backsplash patterns, island sizes, or lighting layers
              you like. We can use them as a starting point, then adapt the plan to your actual room dimensions and
              workflow.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-white md:text-3xl">Before materials are ordered</h2>
            <p className="mt-3">
              Confirm layout, appliance locations, cabinet heights, counter edge profiles, and finish selections in
              writing before long-lead items are ordered.
            </p>
          </div>
        </div>
      </section>

      <LongFormFaq subject="Kitchen Remodeling Project Inspiration" kind="service" />
      <BuyersGuide />
      <KitchenGlossary />
    </>
  );
}

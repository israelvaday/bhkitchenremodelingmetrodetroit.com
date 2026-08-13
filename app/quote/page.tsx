import type { Metadata } from "next";
import { BIZ } from "@/lib/business";
import { QuoteWizard } from "@/components/site/QuoteWizard";
import { ContactCTA } from "@/components/site/ContactCTA";
import { LongFormFaq } from "@/components/site/LongFormFaq";

export const metadata: Metadata = {
  title: `Free Kitchen Remodeling Quote`,
  description: `Request a free kitchen remodeling quote in Metro Detroit. Pick your service and property type, describe the project, and add photos or plans.`,
  alternates: { canonical: "/quote" },
};

export default function QuotePage() {
  return (
    <>
      <section className="relative bg-aurora py-14 md:py-20">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative mx-auto max-w-3xl px-4 text-center md:px-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-brass-400">Free Quote</p>
          <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight md:text-6xl">
            One question at a <span className="text-brass-gradient">time</span>.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-ink-200">
            Choose the kitchen remodeling service and property type, then share your layout goals, materials, condition, and timing.
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
            <h2 className="font-display text-2xl font-bold text-white md:text-3xl">How the quote works</h2>
            <p className="mt-3">
              The picture-driven wizard collects the basic information needed to understand a Metro Detroit Kitchen Remodeling
              request. There is no account to create and no obligation to proceed.
            </p>
            <p className="mt-3">
              You can attach wide shots of the room and close-ups of cabinets, countertops, the backsplash, flooring,
              the sink and appliance run, or existing plans and elevations. Photos can clarify condition and scope,
              though some projects still need an on-site review.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-white md:text-3xl">What we quote</h2>
            <p className="mt-3">
              Choose custom kitchen remodeling, cabinet installation, countertop replacement, kitchen design,
              backsplash and tile, lighting upgrades, kitchen flooring, a kitchen island, appliance layout, or a
              partial kitchen refresh.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-white md:text-3xl">Pricing & expectations</h2>
            <p className="mt-3">
              A useful estimate identifies the layout, cabinet and countertop selections, backsplash and flooring,
              lighting and electrical coordination, appliance fit, demolition and disposal, exclusions, and timing.
              If scope changes, confirm the added work and price in writing. You can also text project photos to{" "}
              {BIZ.phone}.
            </p>
          </div>
        </div>
      </section>
      <LongFormFaq subject="Metro Detroit Kitchen Remodeling" kind="service" />
    </>
  );
}

"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { BIZ } from "@/lib/business";

function CollapsibleQ({ q, children }: { q: string; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="overflow-hidden rounded-2xl border border-ink-800 bg-ink-900/40">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-ink-900/60 md:px-6"
      >
        <span className="font-display text-base font-bold text-white md:text-lg">{q}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-brass-400 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="space-y-3 px-5 pb-5 text-ink-200 md:px-6 md:text-base">{children}</div>
        </div>
      </div>
    </div>
  );
}

export function LongFormFaq({
  subject,
  kind,
  items,
}: {
  subject: string;
  kind: "area" | "service";
  /**
   * Optional page-specific question set. When supplied it replaces the shared
   * questions below, so a page carries its own answers rather than the block
   * every other page renders. Pages without it are unchanged.
   */
  items?: { q: string; a: string }[];
}) {
  const place = kind === "area" ? subject : "Metro Detroit";
  const topic =
    kind === "area" ? `kitchen remodeling in ${subject}` : `${subject.toLowerCase()} across Metro Detroit`;

  if (items && items.length > 0) {
    return (
      <section className="border-t border-ink-800 py-16">
        <div className="mx-auto max-w-3xl space-y-4 px-4 md:px-6">
          <header className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-brass-400">In depth</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-white md:text-3xl">
              Questions about {topic}
            </h2>
            <p className="mt-3 text-sm text-ink-200 md:text-base">
              Practical answers from {BIZ.name} about this part of the job. Tap a question to expand.
            </p>
          </header>

          {items.map((item) => (
            <CollapsibleQ key={item.q} q={item.q}>
              <p>{item.a}</p>
            </CollapsibleQ>
          ))}

          <p className="pt-3 text-sm text-ink-300">
            Question not covered here? Call {BIZ.phone} to talk through your kitchen project in {place}.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="border-t border-ink-800 py-16">
      <div className="mx-auto max-w-3xl space-y-4 px-4 md:px-6">
        <header className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-brass-400">In depth</p>
          <h2 className="mt-2 font-display text-2xl font-bold text-white md:text-3xl">
            Questions about {topic}
          </h2>
          <p className="mt-3 text-sm text-ink-200 md:text-base">
            Practical answers from {BIZ.name} to help you compare kitchen remodeling scopes in {place}. Tap a question to expand.
          </p>
        </header>

        <CollapsibleQ q="What should a kitchen remodeling scope include?">
          <p>
            A useful scope identifies layout changes, demolition, cabinet tier, countertop allowance, backsplash,
            flooring, lighting, fixture setting, trade coordination, protection, cleanup, and exclusions. Hidden
            conditions such as outdated wiring or vent paths should be discussed before cabinets are ordered.
          </p>
        </CollapsibleQ>

        <CollapsibleQ q="When should countertops be templated?">
          <p>
            Countertops are templated after base cabinets are installed, leveled, and verified. Early measurements can
            help planning, but fabrication dimensions depend on the actual installed cabinet layout and appliance
            cutouts.
          </p>
        </CollapsibleQ>

        <CollapsibleQ q="How do I choose cabinet and counter materials?">
          <p>
            Cabinet selection should balance door style, storage needs, lead time, and budget. Counter materials should
            match how you cook and clean—quartz is popular for durability, while natural stone and butcher block have
            different care requirements. Compare samples in your actual kitchen light.
          </p>
        </CollapsibleQ>

        <CollapsibleQ q="Can we live in the home during a remodel?">
          <p>
            Many projects are phased to maintain limited kitchen access when possible. Discuss temporary setups, dust
            control, utility outages, pets, and daily cleanup before scheduling so the plan fits your household.
          </p>
        </CollapsibleQ>

        <CollapsibleQ q="What permits may be required?">
          <p>
            Structural changes, electrical upgrades, plumbing relocations, or vent modifications may require permits
            depending on municipality. The proposal should identify likely permit needs and who coordinates inspections
            when included.
          </p>
        </CollapsibleQ>

        <CollapsibleQ q="How are layout or material changes handled mid-project?">
          <p>
            Changes are common, but they should be documented with price and schedule impact before crews proceed. Late
            cabinet height, outlet, or appliance decisions can affect counters, backsplash, and trim details.
          </p>
        </CollapsibleQ>

        <CollapsibleQ q="What should cleanup and the final walkthrough include?">
          <p>
            The closeout plan should cover debris removal, protection take-down, appliance setting checks, and a
            walkthrough against the written scope. Agreed punch-list items should be documented before final payment.
            Call {BIZ.phone} to discuss your kitchen project in {place}.
          </p>
        </CollapsibleQ>
      </div>
    </section>
  );
}

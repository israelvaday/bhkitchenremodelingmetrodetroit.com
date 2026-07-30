import { BIZ } from "@/lib/business";

export function KitchenGlossary() {
  return (
    <section className="border-t border-ink-800 py-16">
      <div className="mx-auto max-w-3xl space-y-5 px-4 text-sm text-ink-200 md:px-6 md:text-base">
        <header>
          <p className="text-xs font-semibold uppercase tracking-wider text-brass-400">Glossary</p>
          <h2 className="mt-2 font-display text-2xl font-bold text-white md:text-3xl">
            Kitchen remodeling terms, explained in plain language
          </h2>
          <p className="mt-3 text-ink-300">
            These are the terms {BIZ.name} uses when discussing scope, materials, and finish expectations.
          </p>
        </header>

        <p>
          <strong className="text-white">Layout</strong> &mdash; the plan for cabinet runs, appliances, islands,
          walkways, and work zones in your kitchen.
        </p>
        <p>
          <strong className="text-white">Rough-in</strong> &mdash; early-stage electrical, plumbing, vent, and gas
          work completed before finish surfaces and cabinets are installed.
        </p>
        <p>
          <strong className="text-white">Cabinet box</strong> &mdash; the structural carcass that supports shelves,
          drawers, and doors. Refacing updates the exterior; replacement installs new boxes.
        </p>
        <p>
          <strong className="text-white">Template</strong> &mdash; precise field measurements taken after base cabinets
          are installed so countertops can be fabricated to fit.
        </p>
        <p>
          <strong className="text-white">Allowance</strong> &mdash; a budget placeholder for selections not yet finalized,
          such as countertop material, tile, or fixtures.
        </p>
        <p>
          <strong className="text-white">Soft-close hardware</strong> &mdash; hinges and drawer slides that close gently
          without slamming, improving durability and daily comfort.
        </p>
        <p>
          <strong className="text-white">Backsplash</strong> &mdash; protective wall finish behind counters and ranges,
          commonly tile, slab, or metal.
        </p>
        <p>
          <strong className="text-white">Punch list</strong> &mdash; the final walkthrough items addressed before
          cleanup and project closeout.
        </p>
      </div>
    </section>
  );
}

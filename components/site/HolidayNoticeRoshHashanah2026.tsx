"use client";

// HOLIDAY-NOTICE rosh-hashanah-2026. Temporary homepage notice for the
// Rosh Hashanah 2026 closure. Remove it by deleting this file, its import
// in app/page.tsx and the lines between HOLIDAY-NOTICE:START and
// HOLIDAY-NOTICE:END there.
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Monday, September 14, 2026 at 9:00 AM Detroit time, when regular hours resume.
const HIDE_FROM = Date.parse("2026-09-14T09:00:00-04:00");

export function HolidayNoticeRoshHashanah2026() {
  // The server render and the first client render both show the notice, so
  // hydration always matches. The clock is only read after mount.
  const [show, setShow] = useState(true);
  useEffect(() => {
    if (Date.now() >= HIDE_FROM) setShow(false);
  }, []);
  if (!show) return null;

  return (
    <aside
      aria-label="Rosh Hashanah closure notice"
      className="border-b border-brass-500/30 bg-brass-500/10"
    >
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-5 gap-y-2 px-4 py-3 text-center text-sm text-ink-100 md:px-6">
        <p>
          <strong className="font-bold text-brass-300">Closed for Rosh Hashanah.</strong> We are closed Saturday, September 12 and Sunday, September 13, and back Monday, September 14 at 9:00 AM. Shana Tova!
        </p>
        <Link
          href="/blog/happy-rosh-hashanah-2026"
          className="inline-flex items-center gap-1.5 font-semibold text-brass-300 underline-offset-4 hover:underline"
        >
          Holiday hours <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </aside>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Calendar, Clock, ChefHat } from "lucide-react";
import { BIZ } from "@/lib/business";
import { BLOG_POSTS, findPost, type BlogPost } from "@/content/blog";
import { ContactCTA } from "@/components/site/ContactCTA";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { LongFormFaq } from "@/components/site/LongFormFaq";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";

export const dynamic = "force-static";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const post = findPost(slug);
  if (!post) return {};
  return {
    title: { absolute: post.metaTitle ?? post.title },
    description: post.excerpt,
    alternates: { canonical: `${BIZ.url}/blog/${post.slug}` },
    // openGraph replaces the root layout's block rather than merging into it, so
    // url/siteName/locale have to be restated here or all nine posts publish a
    // card with no og:url at all — the same wholesale-replacement defect already
    // fixed for the 101 area pages (f50d993) and the eleven single-route pages
    // (b1fae18a); this route was in neither pass. images stays exactly as it was:
    // there is no opengraph-image route under app/blog/[slug], so the hero is the
    // only card image these posts have and trimming it would repeat the b1fae18a
    // first-build mistake.
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.heroImage, width: 1536, height: 1024, alt: post.heroAlt }],
      type: "article",
      siteName: BIZ.name,
      locale: "en_US",
      url: `${BIZ.url}/blog/${post.slug}`,
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.heroImage],
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

/**
 * Very small markdown-ish renderer: `## ` → H2, `### ` → H3, `- ` → bulleted lists,
 * blank lines → paragraph breaks. Anchor markdown `[text](url)` is converted to <a>.
 */
function renderBody(body: string, secondaryImage: string, secondaryAlt: string) {
  const lines = body.trim().split(/\r?\n/);
  const out: React.ReactNode[] = [];
  let listBuffer: string[] | null = null;
  let paraBuffer: string[] = [];
  let h2Count = 0;

  const flushPara = () => {
    if (paraBuffer.length) {
      const text = paraBuffer.join(" ");
      out.push(
        <p key={`p-${out.length}`} className="my-5 text-ink-200 md:text-lg leading-relaxed">
          {renderInline(text)}
        </p>
      );
      paraBuffer = [];
    }
  };
  const flushList = () => {
    if (listBuffer && listBuffer.length) {
      out.push(
        <ul key={`ul-${out.length}`} className="my-5 ml-5 list-disc space-y-1.5 text-ink-200 md:text-lg">
          {listBuffer.map((li, i) => (
            <li key={i}>{renderInline(li)}</li>
          ))}
        </ul>
      );
      listBuffer = null;
    }
  };

  for (const raw of lines) {
    const line = raw.trim();
    if (!line) { flushPara(); flushList(); continue; }
    if (line.startsWith("## ")) {
      flushPara(); flushList();
      h2Count++;
      out.push(
        <h2 key={`h2-${out.length}`} className="mt-12 font-display text-2xl font-extrabold tracking-tight md:text-3xl">
          {line.slice(3)}
        </h2>
      );
      // Drop the secondary image once, somewhere in the middle of the article
      if (h2Count === 3) {
        out.push(
          <div key={`img-${out.length}`} className="my-8 overflow-hidden rounded-3xl border border-ink-800">
            <Image
              src={secondaryImage}
              alt={secondaryAlt}
              width={1536}
              height={1024}
              sizes="(max-width: 768px) 100vw, 800px"
              className="h-auto w-full"
            />
          </div>
        );
      }
      continue;
    }
    if (line.startsWith("### ")) {
      flushPara(); flushList();
      out.push(
        <h3 key={`h3-${out.length}`} className="mt-8 font-display text-xl font-bold tracking-tight">
          {line.slice(4)}
        </h3>
      );
      continue;
    }
    if (line.startsWith("- ")) {
      flushPara();
      listBuffer = listBuffer || [];
      listBuffer.push(line.slice(2));
      continue;
    }
    flushList();
    paraBuffer.push(line);
  }
  flushPara(); flushList();
  return out;
}

function renderInline(text: string): React.ReactNode {
  // [label](url) — supports markdown links
  const parts: React.ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) parts.push(boldify(text.slice(last, m.index), parts.length));
    const isExternal = /^https?:\/\//.test(m[2]);
    parts.push(
      isExternal ? (
        <a key={`a-${parts.length}`} href={m[2]} target="_blank" rel="noopener noreferrer" className="text-brass-300 underline-offset-4 hover:underline">
          {m[1]}
        </a>
      ) : (
        <Link key={`a-${parts.length}`} href={m[2]} className="text-brass-300 underline-offset-4 hover:underline">
          {m[1]}
        </Link>
      )
    );
    last = re.lastIndex;
  }
  if (last < text.length) parts.push(boldify(text.slice(last), parts.length));
  return parts;
}

function boldify(text: string, keyBase: number): React.ReactNode {
  // **bold** → <strong>
  const parts: React.ReactNode[] = [];
  const re = /\*\*([^*]+)\*\*/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    parts.push(<strong key={`b-${keyBase}-${parts.length}`} className="text-white">{m[1]}</strong>);
    last = re.lastIndex;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

/**
 * The three posts each post links to, decided once for the whole set.
 *
 * WHY THIS IS NOT A SLICE OF BLOG_POSTS. The leftover slots used to be filled by
 * `BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3 - related.length)`:
 * array position, from the top of the file every time, screened only against the
 * post being rendered. Measured on the nine served pages 2026-09-09, that had two
 * defects.
 *
 * (1) It never screened out the posts already chosen as same-category `related`,
 * so a post whose sibling also sat near the top of the file listed that sibling
 * TWICE among its three cards, on a duplicate React key. Live on
 * /blog/hire-kitchen-remodeling-contractor-michigan/ and
 * /blog/kitchen-flooring-under-cabinets-metro-detroit/, both repeating
 * kitchen-remodel-planning-metro-detroit.
 *
 * (2) Always starting from the top concentrated the links. Of the 27 this module
 * emits, kitchen-remodel-planning-metro-detroit took 10,
 * kitchen-remodel-timeline-budget took NONE, and
 * small-kitchen-remodel-metro-detroit -- the only blog page this domain has ever
 * held page 1 with -- took 2. The blog is reachable from neither the footer nor
 * the navbar, so this module and the /blog hub are the entire internal link
 * surface these nine urls have.
 *
 * Same-category pairing still decides first, because that is the reader-facing
 * reason the module exists. Only the leftover slots are assigned here, and each
 * goes to whichever post is currently the least linked-to. On the present nine
 * that puts every one of them on exactly 3, and it re-levels itself as the
 * article rotation adds posts -- which is the part array position could not do,
 * and the reason this drifted unnoticed through nine publishes.
 */
const SUGGESTIONS: Record<string, BlogPost[]> = (() => {
  const sameCategory = BLOG_POSTS.map((post) =>
    BLOG_POSTS.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 2),
  );
  const inbound = new Map(BLOG_POSTS.map((p) => [p.slug, 0]));
  const count = (slug: string) => inbound.get(slug) ?? 0;
  const bump = (slug: string) => inbound.set(slug, count(slug) + 1);
  sameCategory.forEach((picks) => picks.forEach((p) => bump(p.slug)));

  const decided: Record<string, BlogPost[]> = {};
  BLOG_POSTS.forEach((post, i) => {
    const picked = [...sameCategory[i]];
    const taken = new Set(picked.map((p) => p.slug));
    while (picked.length < 3) {
      // Array.prototype.sort is stable, so equal counts keep file position and
      // the whole assignment stays deterministic across the nine generated pages.
      const next = BLOG_POSTS
        .filter((p) => p.slug !== post.slug && !taken.has(p.slug))
        .sort((a, b) => count(a.slug) - count(b.slug))[0];
      if (!next) break;
      taken.add(next.slug);
      picked.push(next);
      bump(next.slug);
    }
    decided[post.slug] = picked;
  });
  return decided;
})();

export default async function BlogPostPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const post = findPost(slug);
  if (!post) return notFound();

  const suggestions = SUGGESTIONS[post.slug] ?? [];

  return (
    <>
      <article>
        {/* Hero */}
        <header className="relative">
          <div className="relative h-[42vh] min-h-[320px] w-full md:h-[60vh]">
            <Image
              src={post.heroImage}
              alt={post.heroAlt}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/60 to-ink-950/20" />
          </div>
          <div className="relative z-10 -mt-32 md:-mt-44">
            <div className="mx-auto max-w-3xl px-4 md:px-6">
              {/* Replaces the old bare "All articles" back-link: same affordance,
                  plus the trail Google needs. Two back-links would be redundant. */}
              <Breadcrumbs
                trail={[
                  { name: "Home", href: "/" },
                  { name: "Blog", href: "/blog" },
                  { name: post.title, href: `/blog/${post.slug}` },
                ]}
              />
              <span className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full border border-brass-500/40 bg-brass-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brass-300">
                {post.category}
              </span>
              <h1 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
                {post.title}
              </h1>
              <p className="mt-4 text-lg text-ink-200 md:text-xl">{post.excerpt}</p>
              <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-ink-400">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" /> {formatDate(post.date)}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-4 w-4" /> {post.readMinutes} min read
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <ChefHat className="h-4 w-4 text-brass-400" /> Metro Detroit Kitchen Remodeling guide
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Body */}
        <div className="mx-auto max-w-3xl px-4 pt-10 pb-16 md:px-6 md:pt-14 md:pb-20">
          <p className="mb-8 rounded-2xl border border-ink-800 bg-ink-900/40 p-4 text-sm text-ink-400">
            Article images are project inspiration and illustrate the kind of work discussed; they are not presented
            as completed customer projects.
          </p>
          {renderBody(post.body, post.secondaryImage, post.secondaryAlt)}

          {/* Inline CTA */}
          <div className="mt-12 rounded-3xl border border-brass-500/30 bg-gradient-to-br from-brass-500/10 to-ink-900/40 p-6 text-center md:p-8">
            <h3 className="font-display text-xl font-extrabold md:text-2xl">
              Planning a kitchen remodeling project in Metro Detroit?
            </h3>
            <p className="mx-auto mt-2 max-w-xl text-sm text-ink-200 md:text-base">
              Share the property, surfaces, colors, condition, and timing with {BIZ.name} for a project-specific
              follow-up across Wayne, Oakland &amp; Macomb counties.
            </p>
            <div className="mt-5 flex justify-center">
              <ContactCTA size="lg" />
            </div>
          </div>
        </div>
      </article>

      {/* Related */}
      {suggestions.length > 0 && (
        <section className="border-t border-ink-800 bg-ink-950 py-16">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <h2 className="text-center font-display text-2xl font-bold tracking-tight md:text-3xl">
              Keep reading
            </h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {suggestions.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-ink-800 bg-ink-900/40 transition hover:-translate-y-0.5 hover:border-brass-500/40"
                >
                  <div className="relative aspect-[16/10]">
                    <Image src={p.heroImage} alt={p.heroAlt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col gap-2 p-5">
                    <span className="inline-flex w-fit items-center rounded-full border border-ink-700 bg-ink-900/70 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brass-300">
                      {p.category}
                    </span>
                    <h3 className="font-display text-base font-extrabold leading-tight">{p.title}</h3>
                    <p className="text-sm text-ink-300">{p.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <LongFormFaq subject="Metro Detroit Kitchen Remodeling" kind="service" />

      <FinalCTA />
    </>
  );
}

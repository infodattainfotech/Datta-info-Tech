import { useEffect, useState } from "react";
import { CalendarDays, Maximize2, Newspaper, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import awardAsset from "@/assets/future-homeland-security-award.jpg.asset.json";
import reformsAsset from "@/assets/un-security-council-reforms.jpg.asset.json";
import felicitationAsset from "@/assets/homeland-security-felicitation.jpg.asset.json";
import preventionAsset from "@/assets/cyber-crime-prevention-day.jpg.asset.json";

const categories = [
  "All Coverage",
  "Awards & Recognitions",
  "Newspaper Publications",
  "National Security Contributions",
  "Cyber Crime Prevention Activities",
  "Homeland Security Awards",
  "United Nations Related Activities",
  "Technology & Innovation Events",
] as const;

type Category = (typeof categories)[number];

const items = [
  {
    title: "Selected for Future Homeland Security Technologies Award at SwaRaksha Mahotsav 2026",
    publication: "Capital Information",
    date: "04 May 2026",
    image: awardAsset.url,
    categories: ["Awards & Recognitions", "Newspaper Publications", "Homeland Security Awards", "Technology & Innovation Events"] as Category[],
  },
  {
    title: "Venkat Ramana Rao Advocates for India’s Role in UN Security Council Reforms",
    publication: "Deccan News Service",
    date: "Publication date not shown",
    image: reformsAsset.url,
    categories: ["Newspaper Publications", "National Security Contributions", "United Nations Related Activities"] as Category[],
  },
  {
    title: "Grand Felicitation to Homeland Security Award Recipient Adoni Venkata Ramana Rao",
    publication: "Capital Information",
    date: "26 May 2026",
    image: felicitationAsset.url,
    categories: ["Awards & Recognitions", "Newspaper Publications", "National Security Contributions", "Cyber Crime Prevention Activities", "Homeland Security Awards"] as Category[],
  },
  {
    title: "Cyber Crime Prevention Day to United Nations",
    publication: "Deccan News Service",
    date: "Publication date not shown",
    image: preventionAsset.url,
    categories: ["Newspaper Publications", "Cyber Crime Prevention Activities", "United Nations Related Activities"] as Category[],
  },
];

export function MediaGallery() {
  const [filter, setFilter] = useState<Category>("All Coverage");
  const [selected, setSelected] = useState<(typeof items)[number] | null>(null);
  const visibleItems = filter === "All Coverage" ? items : items.filter((item) => item.categories.includes(filter));

  useEffect(() => {
    if (!selected) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selected]);

  return (
    <section className="section-pad bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap gap-2" aria-label="Filter media coverage">
          {categories.map((category) => (
            <Button key={category} variant={filter === category ? "navy" : "outline"} size="sm" onClick={() => setFilter(category)} aria-pressed={filter === category}>
              {category}
            </Button>
          ))}
        </div>

        <div className="mt-10 grid items-start gap-7 md:grid-cols-2">
          {visibleItems.map((item) => (
            <article key={item.title} className="overflow-hidden rounded-lg border border-border bg-card shadow-elegant">
              <button type="button" onClick={() => setSelected(item)} className="group relative block w-full cursor-zoom-in overflow-hidden bg-surface text-left" aria-label={`Enlarge clipping: ${item.title}`}>
                <img src={item.image} alt={`Newspaper clipping: ${item.title}`} loading="lazy" className="aspect-[4/3] w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]" />
                <span className="absolute bottom-4 right-4 grid size-10 place-items-center rounded-md bg-primary text-primary-foreground shadow-elegant"><Maximize2 className="size-4" /></span>
              </button>
              <div className="border-t border-border p-6">
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent"><Newspaper className="size-4" />{item.publication}</p>
                <h2 className="mt-3 text-lg font-semibold leading-snug">{item.title}</h2>
                <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground"><CalendarDays className="size-4" />{item.date}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 z-[70] grid place-items-center bg-primary/90 p-4 sm:p-8" role="dialog" aria-modal="true" aria-label={selected.title} onClick={() => setSelected(null)}>
          <div className="relative max-h-full max-w-5xl" onClick={(event) => event.stopPropagation()}>
            <Button variant="gold" size="icon" className="absolute right-3 top-3 z-10" onClick={() => setSelected(null)} aria-label="Close enlarged clipping"><X /></Button>
            <img src={selected.image} alt={`Enlarged newspaper clipping: ${selected.title}`} className="max-h-[88vh] max-w-full rounded-md bg-card object-contain shadow-elegant" />
          </div>
        </div>
      )}
    </section>
  );
}
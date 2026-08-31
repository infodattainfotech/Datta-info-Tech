import { Newspaper } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MEDIA_ITEMS } from "./data";

export function Media() {
  return (
    <section id="media" className="section-pad bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="News & Media Coverage"
          title="Press, Awards & International Engagements"
          description="Coverage of publications, honours, conference participation, and public safety contributions."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {MEDIA_ITEMS.slice(0, 3).map((item) => (
            <article
              key={item.title}
              className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-elegant"
            >
              <div className="relative h-36 bg-gradient-navy">
                <div className="absolute inset-0 grid place-items-center">
                  <Newspaper className="size-9 text-gold transition-transform duration-300 group-hover:scale-110" />
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                  {item.tag}
                </span>
                <h3 className="mt-3 text-lg font-semibold leading-snug">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-lg border border-border bg-card p-6 sm:p-9">
          <h3 className="text-lg font-semibold">Recognition Showcase</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Highlights from awards, media features, and professional achievements.
          </p>
          <Carousel className="mt-7" opts={{ align: "start", loop: true }}>
            <CarouselContent>
              {MEDIA_ITEMS.map((item) => (
                <CarouselItem key={item.title} className="sm:basis-1/2 lg:basis-1/3">
                  <div className="h-full rounded-lg border border-border bg-surface p-6">
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                      {item.tag}
                    </span>
                    <h4 className="mt-3 text-base font-semibold leading-snug">{item.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-6 flex justify-end gap-2">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

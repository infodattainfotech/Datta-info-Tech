import { Quote, Star } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { TESTIMONIALS } from "./data";

export function Testimonials() {
  return (
    <section className="section-pad bg-gradient-navy">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by Institutions, Enterprises & Communities"
          description="Feedback reflecting professionalism, security expertise, and consistent client satisfaction."
          onNavy
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.quote}
              className="flex h-full flex-col rounded-lg glass-panel p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-gold"
            >
              <Quote className="size-6 text-gold" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-navy-foreground/85">
                “{t.quote}”
              </blockquote>
              <div className="mt-6 flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-3.5 fill-current text-gold" />
                ))}
              </div>
              <figcaption className="mt-3 border-t border-navy-foreground/15 pt-3">
                <p className="text-sm font-semibold text-navy-foreground">{t.name}</p>
                <p className="text-xs text-navy-foreground/60">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

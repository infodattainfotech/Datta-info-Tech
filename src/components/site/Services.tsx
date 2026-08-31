import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { SERVICES } from "./data";

export function Services() {
  return (
    <section id="services" className="section-pad bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Services"
          title="Specialised Security & Advisory Capabilities"
          description="End-to-end consulting across cyber defence, forensic investigation, homeland security, and institutional governance."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {SERVICES.map(({ icon: Icon, title, body, points }) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-lg border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent hover:shadow-elegant"
            >
              <div className="absolute inset-x-0 top-0 h-0.75 scale-x-0 bg-gradient-gold transition-transform duration-300 group-hover:scale-x-100" />
              <span className="grid size-14 place-items-center rounded-md bg-gradient-navy">
                <Icon className="size-6 text-gold" />
              </span>
              <h3 className="mt-6 text-xl font-semibold">{title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{body}</p>
              <ul className="mt-6 space-y-2">
                {points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-foreground/80">
                    <ArrowUpRight className="size-4 text-accent" /> {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

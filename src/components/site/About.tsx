import { Target, Compass, ShieldCheck } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="section-pad bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="About Us"
          title="Datta Infotech Consultants"
          description="A specialized consulting organization focused on Cyber Security, Digital Forensics, Homeland Security, Public Safety, National Security Support, and Strategic Government Advisory Services."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="rounded-lg border border-border bg-card p-8 shadow-elegant sm:p-10">
            <h3 className="text-xl font-semibold">Our Mission</h3>
            <div className="mt-4 h-0.75 w-12 bg-gradient-gold" />
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Our mission is to strengthen security ecosystems through expertise, innovation,
              intelligence, and trusted advisory solutions that help governments, institutions, and
              enterprises build safer and more resilient environments.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We combine deep technical capability with strategic advisory experience, supporting
              clients across cyber defence, forensic investigation, critical infrastructure
              protection, and governance programs.
            </p>
          </div>

          <div className="grid gap-5">
            {[
              {
                icon: Target,
                title: "Mission-Driven Security",
                body: "Focused engagements that deliver measurable improvements in security posture and preparedness.",
              },
              {
                icon: Compass,
                title: "Intelligence-Led Approach",
                body: "Risk intelligence and threat awareness inform every recommendation we deliver.",
              },
              {
                icon: ShieldCheck,
                title: "Institutional Trust",
                body: "Discretion, integrity, and professional standards suited to sensitive environments.",
              },
            ].map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="group flex gap-5 rounded-lg border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-elegant"
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-md bg-gradient-navy">
                  <Icon className="size-5 text-gold" />
                </span>
                <div>
                  <h4 className="text-base font-semibold">{title}</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { Award, BadgeCheck, Mic, Quote } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { CEO_HIGHLIGHTS, CEO_TIMELINE, CERTIFICATIONS } from "./data";
import ceoPortrait from "@/assets/ceo-portrait.jpg";

export function Ceo() {
  return (
    <section id="ceo" className="section-pad relative overflow-hidden bg-gradient-navy">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Founder & CEO"
          title="Adoni Venkata Ramana Rao"
          description="Founder & CEO — International Cyber Security Expert, Digital Forensics Specialist, and National Security Consultant."
          onNavy
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <div className="overflow-hidden rounded-lg glass-panel p-3">
              <img
                src={ceoPortrait}
                alt="Adoni Venkata Ramana Rao, Founder and CEO of Datta Infotech Consultants"
                width={912}
                height={1104}
                loading="lazy"
                className="w-full rounded-md object-cover"
              />
            </div>
            <div className="mt-5 rounded-lg glass-panel p-6">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                <BadgeCheck className="size-4" /> Professional Focus
              </p>
              <ul className="mt-4 grid gap-2 text-sm text-navy-foreground/80">
                {CERTIFICATIONS.map((c) => (
                  <li key={c} className="flex items-start gap-2">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-lg glass-panel p-8">
              <Quote className="size-7 text-gold" />
              <p className="mt-4 leading-relaxed text-navy-foreground/80">
                Adoni Venkata Ramana Rao is an award-winning security professional whose work spans
                cyber security consulting, digital forensics, homeland security, and national
                security advisory. As Founder &amp; CEO of Datta Infotech Consultants, he advises
                government bodies, law enforcement, enterprises, and institutions on building
                resilient security ecosystems.
              </p>
              <p className="mt-4 leading-relaxed text-navy-foreground/70">
                A recognised international speaker and public safety advocate, he has contributed to
                cybercrime prevention initiatives, forensic investigation support, and strategic
                security planning programs, and has been honoured with a Homeland Security
                Technology Award among other recognitions.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {CEO_HIGHLIGHTS.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-md glass-panel px-4 py-3 text-sm text-navy-foreground/85 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-gold"
                >
                  <Award className="size-4 shrink-0 text-gold" /> {item}
                </div>
              ))}
            </div>

            <div className="rounded-lg glass-panel p-8">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                <Mic className="size-4" /> Leadership Timeline &amp; Engagements
              </p>
              <ol className="mt-6 space-y-6 border-l border-navy-foreground/20 pl-6">
                {CEO_TIMELINE.map((entry) => (
                  <li key={entry.title} className="relative">
                    <span className="absolute -left-[1.9rem] top-1.5 size-3 rounded-full bg-gradient-gold" />
                    <p className="text-xs uppercase tracking-[0.18em] text-gold">{entry.period}</p>
                    <h4 className="mt-1 text-base font-semibold text-navy-foreground">
                      {entry.title}
                    </h4>
                    <p className="mt-1 text-sm leading-relaxed text-navy-foreground/70">
                      {entry.body}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

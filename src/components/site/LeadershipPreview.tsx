import { ArrowRight } from "lucide-react";
import { GraduationCap } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "./SectionHeading";
import {
  CEO_NAME,
  CEO_PHOTO_FALLBACK_URL,
  CEO_PHOTO_URL,
  CEO_QUALIFICATIONS,
  CEO_ROLE,
  PARTNER_NAME,
  PARTNER_PHOTO_FALLBACK_URL,
  PARTNER_PHOTO_URL,
  PARTNER_QUALIFICATIONS,
  PARTNER_ROLE,
} from "./brand";
import { BrandImage } from "./BrandImage";

const leaders = [
  {
    name: CEO_NAME,
    role: CEO_ROLE,
    photo: CEO_PHOTO_URL,
    fallbackPhoto: CEO_PHOTO_FALLBACK_URL,
    alt: `${CEO_NAME}, ${CEO_ROLE}`,
    qualifications: CEO_QUALIFICATIONS,
    intro: "International cyber security expert, digital forensics specialist, and national security consultant.",
  },
  {
    name: PARTNER_NAME,
    role: PARTNER_ROLE,
    photo: PARTNER_PHOTO_URL,
    fallbackPhoto: PARTNER_PHOTO_FALLBACK_URL,
    alt: `${PARTNER_NAME}, ${PARTNER_ROLE}`,
    qualifications: [PARTNER_QUALIFICATIONS],
    intro: "An accomplished academic and technology professional supporting the firm’s leadership and growth.",
  },
];

export function LeadershipPreview() {
  return (
    <section className="section-pad bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Leadership"
          title="Expertise Guided by Purpose"
          description="Meet the leaders shaping Datta Infotech Consultants’ work in security, technology, and public service."
        />
        <div className="mx-auto mt-14 grid max-w-5xl gap-7 md:grid-cols-2">
          {leaders.map((leader) => (
            <article key={leader.name} className="flex flex-col overflow-hidden rounded-lg border border-border bg-card shadow-elegant">
              <div className="flex h-72 items-center justify-center overflow-hidden bg-surface sm:h-80">
                <BrandImage src={leader.photo} fallbackSrc={leader.fallbackPhoto} alt={leader.alt} loading="eager" decoding="async" fetchPriority="high" className="size-full object-contain" />
              </div>
              <div className="flex flex-1 flex-col border-t-2 border-accent p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{leader.role}</p>
                <h3 className="mt-2 text-xl font-semibold">{leader.name}</h3>
                <ul className="mt-4 space-y-2">
                  {leader.qualifications.map((qualification) => (
                    <li key={qualification} className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground">
                      <GraduationCap className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                      <span>{qualification}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{leader.intro}</p>
                <Button variant="navy" className="mt-6 self-start" asChild>
                  <Link to="/about">Read More <ArrowRight /></Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

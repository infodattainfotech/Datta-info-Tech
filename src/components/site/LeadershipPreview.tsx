import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "./SectionHeading";
import {
  CEO_NAME,
  CEO_PHOTO_URL,
  CEO_ROLE,
  PARTNER_NAME,
  PARTNER_PHOTO_URL,
  PARTNER_QUALIFICATIONS,
  PARTNER_ROLE,
} from "./brand";

const leaders = [
  {
    name: CEO_NAME,
    role: CEO_ROLE,
    photo: CEO_PHOTO_URL,
    alt: `${CEO_NAME}, ${CEO_ROLE}`,
    intro: "International cyber security expert, digital forensics specialist, and national security consultant.",
  },
  {
    name: PARTNER_NAME,
    role: PARTNER_ROLE,
    photo: PARTNER_PHOTO_URL,
    alt: `${PARTNER_NAME}, ${PARTNER_ROLE}`,
    intro: `${PARTNER_QUALIFICATIONS}. An accomplished academic and technology professional supporting the firm’s leadership and growth.`,
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
            <article key={leader.name} className="overflow-hidden rounded-lg border border-border bg-card shadow-elegant">
<div className="flex aspect-[5/4] items-center justify-center overflow-hidden bg-surface">
                <img src={leader.photo} alt={leader.alt} loading="lazy" className="size-full object-contain" />
              </div>
              <div className="border-t-2 border-accent p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{leader.role}</p>
                <h3 className="mt-2 text-xl font-semibold">{leader.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{leader.intro}</p>
                <Button variant="navy" className="mt-6" asChild>
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
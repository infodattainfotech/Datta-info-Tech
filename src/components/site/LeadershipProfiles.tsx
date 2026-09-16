import { Award, BadgeCheck, Facebook, Linkedin, Mail, MessageCircle, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT, CEO_HIGHLIGHTS } from "./data";
import {
  CEO_NAME,
  CEO_PHOTO_URL,
  CEO_QUALIFICATIONS,
  CEO_ROLE,
  PARTNER_NAME,
  PARTNER_PHOTO_URL,
  PARTNER_QUALIFICATIONS,
  PARTNER_ROLE,
} from "./brand";

const profiles = [
  {
    name: CEO_NAME,
    role: CEO_ROLE,
    qualifications: CEO_QUALIFICATIONS,
    photo: CEO_PHOTO_URL,
    bio: "Adoni Venkata Ramana Rao is an award-winning security professional whose work spans cyber security consulting, digital forensics, homeland security, and national security advisory. He supports governments, institutions, law enforcement, and enterprises in building resilient security ecosystems.",
    focus: CEO_HIGHLIGHTS.slice(0, 4),
  },
  {
    name: PARTNER_NAME,
    role: PARTNER_ROLE,
    qualifications: [PARTNER_QUALIFICATIONS],
    photo: PARTNER_PHOTO_URL,
    bio: "Dr. Anuradha Adoni is an accomplished academic and technology professional. As Partner & Director, she contributes academic insight, technology expertise, and thoughtful leadership to the organisation’s consulting and institutional initiatives.",
    focus: ["Academic Leadership", "Technology Expertise", "Institutional Development", "Strategic Collaboration"],
  },
];

export function LeadershipProfiles() {
  return (
    <section className="section-pad bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          {profiles.map((profile) => (
            <article key={profile.name} className="overflow-hidden rounded-lg border border-border bg-card shadow-elegant">
              <div className="grid sm:grid-cols-[0.78fr_1.22fr]">
<div className="flex min-h-80 items-center justify-center bg-surface">
                  <img src={profile.photo} alt={`${profile.name}, ${profile.role}`} loading="lazy" className="size-full object-contain" />
                </div>
                <div className="p-7 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{profile.role}</p>
                  <h2 className="mt-2 text-2xl font-semibold leading-tight">{profile.name}</h2>
                  <ul className="mt-3 space-y-1">
                    {profile.qualifications.map((qualification) => (
                      <li key={qualification} className="text-sm font-semibold text-primary">{qualification}</li>
                    ))}
                  </ul>
                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{profile.bio}</p>
                </div>
              </div>
              <div className="border-t border-border p-7 sm:p-8">
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary"><BadgeCheck className="size-4 text-accent" /> Professional Focus</p>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {profile.focus.map((item) => <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground"><Award className="size-4 shrink-0 text-accent" />{item}</li>)}
                </ul>
                <div className="mt-7 flex flex-wrap items-center gap-2 border-t border-border pt-6">
                  <Button variant="navy" asChild><a href={CONTACT.emailHref}><Mail /> Contact</a></Button>
                  <Button variant="outline" size="icon" asChild><a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" aria-label={`Message ${profile.name}`}><MessageCircle /></a></Button>
                  {[Linkedin, Twitter, Facebook].map((Icon) => (
                    <Button key={Icon.displayName ?? Icon.name} variant="outline" size="icon" asChild><a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" aria-label={`${profile.name} social profile`}><Icon /></a></Button>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
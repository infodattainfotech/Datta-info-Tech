import { GraduationCap } from "lucide-react";
import {
  CEO_NAME,
  CEO_PHOTO_URL,
  CEO_QUALIFICATIONS,
  PARTNER_NAME,
  PARTNER_PHOTO_URL,
  PARTNER_QUALIFICATIONS,
} from "./brand";

const profiles = [
  {
    name: CEO_NAME,
    photo: CEO_PHOTO_URL,
    qualifications: CEO_QUALIFICATIONS,
  },
  {
    name: PARTNER_NAME,
    photo: PARTNER_PHOTO_URL,
    qualifications: [PARTNER_QUALIFICATIONS],
  },
];

export function LeadershipStrip() {
  return (
    <section className="section-pad bg-surface" aria-label="Leadership profiles">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-2xl font-semibold sm:text-3xl">Our Leadership</h2>
        <div className="mx-auto mt-10 grid max-w-5xl gap-7 md:grid-cols-2">
          {profiles.map((profile) => (
            <article
              key={profile.name}
              className="flex flex-col gap-6 overflow-hidden rounded-lg border border-border bg-card p-6 shadow-elegant sm:flex-row sm:items-start"
            >
              <div className="mx-auto size-40 shrink-0 overflow-hidden rounded-lg border-2 border-accent bg-surface sm:mx-0">
                <img
                  src={profile.photo}
                  alt={`Portrait of ${profile.name}`}
                  loading="lazy"
                  className="size-full object-cover object-top"
                />
              </div>
              <div className="min-w-0 text-center sm:text-left">
                <h3 className="text-xl font-semibold leading-snug">{profile.name}</h3>
                <ul className="mt-4 space-y-2">
                  {profile.qualifications.map((qualification) => (
                    <li key={qualification} className="flex items-start justify-center gap-2 text-sm text-muted-foreground sm:justify-start">
                      <GraduationCap className="mt-0.5 size-4 shrink-0 text-accent" />
                      <span>{qualification}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

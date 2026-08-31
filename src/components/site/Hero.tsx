import { ArrowRight, Globe2, Landmark, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-security.jpg";

const badges = [
  { icon: ShieldCheck, label: "Cyber Security" },
  { icon: Globe2, label: "Digital Forensics" },
  { icon: Landmark, label: "Homeland Security" },
];

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-navy-deep">
      <img
        src={heroImage}
        alt="Global security operations centre monitoring a worldwide digital intelligence network"
        width={1920}
        height={1088}
        className="absolute inset-0 size-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-navy opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,transparent,var(--navy-deep)_85%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pt-40 pb-24 md:pt-48 md:pb-32 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="animate-in fade-in slide-in-from-bottom-6 duration-1000">
          <span className="inline-flex items-center gap-2 rounded-full glass-panel px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gold">
            National Security &amp; Digital Resilience
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.08] text-navy-foreground sm:text-5xl lg:text-6xl">
            Protecting Nations, Organizations, and Digital Assets Through{" "}
            <span className="text-gradient-gold">Advanced Security Expertise</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-navy-foreground/75 sm:text-lg">
            DattaInfotech.com delivers world-class Cyber Security, Digital Forensics, Homeland
            Security, and Strategic Advisory Services with a commitment to national security,
            public safety, and digital resilience.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button variant="gold" size="xl" asChild>
              <a href="#services">
                Explore Services <ArrowRight />
              </a>
            </Button>
            <Button variant="onNavy" size="xl" asChild>
              <a href="#contact">Contact Us</a>
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            {badges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-md glass-panel px-4 py-2.5 text-sm text-navy-foreground/85"
              >
                <Icon className="size-4 text-gold" /> {label}
              </div>
            ))}
          </div>
        </div>

        <div className="animate-in fade-in slide-in-from-bottom-10 duration-1000 rounded-lg glass-panel p-8">
          <h2 className="font-display text-lg font-semibold text-navy-foreground">
            Trusted Advisory for Government &amp; Enterprise
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-navy-foreground/70">
            Strategic security consulting for government agencies, law enforcement, enterprises, and
            international institutions.
          </p>
          <dl className="mt-7 grid grid-cols-2 gap-6">
            {[
              ["Government Agencies", "Advisory & policy support"],
              ["Law Enforcement", "Forensic investigation support"],
              ["Enterprises", "Cyber defence & resilience"],
              ["Institutions", "Public safety programs"],
            ].map(([title, desc]) => (
              <div key={title}>
                <dt className="text-sm font-semibold text-gold">{title}</dt>
                <dd className="mt-1 text-xs text-navy-foreground/65">{desc}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

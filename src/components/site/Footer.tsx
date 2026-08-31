import { Mail, MapPin, Phone } from "lucide-react";
import { CONTACT, NAV_LINKS } from "./data";
import { LOGO_URL } from "./brand";

export function Footer() {
  return (
    <footer className="bg-navy-deep">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <span className="rounded-md bg-navy-foreground/95 p-2.5">
              <img
                src={LOGO_URL}
                alt="Datta Infotech Consultants logo"
                className="h-9 w-auto"
              />
            </span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-navy-foreground/70">
            Securing the Future Through Technology, Intelligence &amp; Innovation.
          </p>
          <div className="mt-6 space-y-3 text-sm text-navy-foreground/70">
            <p className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" /> {CONTACT.address}
            </p>
            <a href={CONTACT.phoneHref} className="flex items-center gap-3 hover:text-gold">
              <Phone className="size-4 text-gold" /> {CONTACT.phone}
            </a>
            <a href={CONTACT.emailHref} className="flex items-center gap-3 break-all hover:text-gold">
              <Mail className="size-4 text-gold" /> {CONTACT.email}
            </a>
          </div>
        </div>

        <div className="md:justify-self-center">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Quick Links</h3>
          <ul className="mt-5 space-y-3 text-sm text-navy-foreground/70">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-gold">
                  {link.label === "About Us" ? "About" : link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Practice Areas</h3>
          <ul className="mt-5 space-y-3 text-sm text-navy-foreground/70">
            {[
              "Cyber Security Consulting",
              "Digital Forensics & Investigation",
              "Homeland Security Solutions",
              "Government & Enterprise Advisory",
              "Public Safety Programs",
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-foreground/12">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-xs text-navy-foreground/60 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Datta Infotech Consultants. All Rights Reserved.</p>
          <p className="text-navy-foreground/70">
            Datta Infotech Consultants – Advancing Security, Public Safety, and Digital Excellence.
          </p>
        </div>
      </div>
    </footer>
  );
}

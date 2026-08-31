import { useEffect, useState } from "react";
import { Mail, Menu, Phone, ShieldCheck, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CONTACT, NAV_LINKS } from "./data";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="hidden bg-navy-deep text-navy-foreground/85 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-2 text-xs">
          <p className="tracking-[0.18em] uppercase text-gold">
            Securing the Future Through Technology, Intelligence &amp; Innovation
          </p>
          <div className="flex items-center gap-6">
            <a href={CONTACT.phoneHref} className="flex items-center gap-2 transition-colors hover:text-gold">
              <Phone className="size-3.5" /> {CONTACT.phone}
            </a>
            <a href={CONTACT.emailHref} className="flex items-center gap-2 transition-colors hover:text-gold">
              <Mail className="size-3.5" /> {CONTACT.email}
            </a>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "border-b transition-all duration-300",
          scrolled
            ? "border-border bg-background/90 backdrop-blur-xl shadow-elegant"
            : "border-transparent bg-background/70 backdrop-blur-md",
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3">
          <a href="#home" className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-md bg-gradient-navy">
              <ShieldCheck className="size-5 text-gold" />
            </span>
            <span className="leading-tight">
              <span className="block font-display text-base font-semibold tracking-tight">
                Datta<span className="text-gradient-gold">Infotech</span>
              </span>
              <span className="block text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                Consultants
              </span>
            </span>
          </a>

          <ul className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative text-sm font-medium text-foreground/75 transition-colors hover:text-foreground after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-gold after:transition-all hover:after:w-full"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Button variant="gold" size="lg" className="hidden sm:inline-flex" asChild>
              <a href="#contact">Contact Now</a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X /> : <Menu />}
            </Button>
          </div>
        </nav>

        {open && (
          <div className="border-t border-border bg-background lg:hidden">
            <ul className="mx-auto max-w-7xl px-6 py-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href} className="border-b border-border/60 last:border-0">
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-sm font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 pb-4 text-sm">
              <a href={CONTACT.phoneHref} className="flex items-center gap-2 text-muted-foreground">
                <Phone className="size-4 text-accent" /> {CONTACT.phone}
              </a>
              <a href={CONTACT.emailHref} className="flex items-center gap-2 text-muted-foreground">
                <Mail className="size-4 text-accent" /> {CONTACT.email}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

import { useState } from "react";
import { Mail, MapPin, MessageCircle, Phone, Send, Linkedin, Twitter, Facebook } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeading } from "./SectionHeading";
import { CONTACT } from "./data";
import { LOGO_URL } from "./brand";

export function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !message) {
      toast.error("Please complete your name, email, and message.");
      return;
    }
    setSubmitting(true);
    const subject = `Business Inquiry from ${name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${String(data.get("phone") ?? "")}`,
      `Organization: ${String(data.get("organization") ?? "")}`,
      "",
      message,
    ].join("\n");
    window.location.href = `${CONTACT.emailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    toast.success("Opening your email client to send this inquiry.");
    form.reset();
    setSubmitting(false);
  };

  return (
    <section id="contact" className="section-pad bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Speak With Our Advisory Team"
          description="Share your requirement and our consultants will respond with the appropriate advisory approach."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            <div className="rounded-lg bg-gradient-navy p-8 shadow-elegant">
              <span className="inline-flex rounded-md bg-navy-foreground/95 px-3 py-2">
                <img
                  src={LOGO_URL}
                  alt="Datta Infotech Consultants logo"
                  className="h-9 w-auto"
                />
              </span>
              <div className="mt-6 space-y-5 text-sm">
                <p className="flex items-start gap-3 text-navy-foreground/80">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-gold" /> {CONTACT.address}
                </p>
                <a
                  href={CONTACT.phoneHref}
                  className="flex items-start gap-3 text-navy-foreground/80 transition-colors hover:text-gold"
                >
                  <Phone className="mt-0.5 size-5 shrink-0 text-gold" /> {CONTACT.phone}
                </a>
                <a
                  href={CONTACT.emailHref}
                  className="flex items-start gap-3 break-all text-navy-foreground/80 transition-colors hover:text-gold"
                >
                  <Mail className="mt-0.5 size-5 shrink-0 text-gold" /> {CONTACT.email}
                </a>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <Button variant="gold" asChild>
                  <a href={CONTACT.phoneHref}>
                    <Phone /> Click to Call
                  </a>
                </Button>
                <Button variant="onNavy" asChild>
                  <a href={CONTACT.emailHref}>
                    <Mail /> Click to Email
                  </a>
                </Button>
                <Button variant="onNavy" className="sm:col-span-2" asChild>
                  <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer">
                    <MessageCircle /> Chat on WhatsApp
                  </a>
                </Button>
              </div>

              <div className="mt-8 flex items-center gap-3 border-t border-navy-foreground/15 pt-6">
                <span className="text-xs uppercase tracking-[0.18em] text-navy-foreground/60">
                  Follow
                </span>
                {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                  <a
                    key={i}
                    href={CONTACT.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Datta Infotech Consultants social profile"
                    className="grid size-9 place-items-center rounded-md glass-panel text-navy-foreground transition-colors hover:text-gold"
                  >
                    <Icon className="size-4" />
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-border bg-surface p-6 text-sm text-muted-foreground">
              Consulting hours: Monday – Saturday, 9:30 AM – 7:00 PM IST. Sensitive enquiries are
              handled with full confidentiality.
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded-lg border border-border bg-card p-8 shadow-elegant"
          >
            <h3 className="text-xl font-semibold">Business Inquiry Form</h3>
            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" name="name" placeholder="Your full name" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" name="email" type="email" placeholder="you@organisation.com" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" name="phone" placeholder="+91 00000 00000" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="organization">Organization</Label>
                <Input id="organization" name="organization" placeholder="Organisation name" />
              </div>
              <div className="grid gap-2 sm:col-span-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Describe your security or advisory requirement"
                  required
                />
              </div>
            </div>
            <Button type="submit" variant="gold" size="xl" className="mt-7 w-full" disabled={submitting}>
              <Send /> Submit Inquiry
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

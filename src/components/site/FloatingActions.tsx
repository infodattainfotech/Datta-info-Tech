import { MessageCircle, Phone } from "lucide-react";
import { CONTACT } from "./data";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href={CONTACT.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Datta Infotech Consultants on WhatsApp"
        className="grid size-12 place-items-center rounded-full bg-gradient-gold text-gold-foreground shadow-gold transition-transform hover:scale-110"
      >
        <MessageCircle className="size-5" />
      </a>
      <a
        href={CONTACT.phoneHref}
        aria-label="Call Datta Infotech Consultants"
        className="grid size-12 place-items-center rounded-full bg-navy text-navy-foreground shadow-elegant transition-transform hover:scale-110"
      >
        <Phone className="size-5" />
      </a>
    </div>
  );
}

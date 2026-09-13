import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "@/components/site/Contact";
import { PageIntro } from "@/components/site/PageIntro";
import { SiteLayout } from "@/components/site/SiteLayout";

const title = "Contact | Datta Infotech Consultants";
const description = "Contact Datta Infotech Consultants in Nalgonda for cyber security, digital forensics, homeland security, and government advisory services.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title }, { name: "description", content: description },
      { property: "og:title", content: title }, { property: "og:description", content: description },
      { property: "og:type", content: "website" }, { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return <SiteLayout><PageIntro eyebrow="Contact" title="Start a Confidential Conversation" description="Connect with our advisory team about your organisation’s security, forensic, public safety, or institutional requirements." /><Contact /></SiteLayout>;
}
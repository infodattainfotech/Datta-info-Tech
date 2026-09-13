import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/site/About";
import { LeadershipProfiles } from "@/components/site/LeadershipProfiles";
import { PageIntro } from "@/components/site/PageIntro";
import { SiteLayout } from "@/components/site/SiteLayout";

const title = "About Us & Leadership | Datta Infotech Consultants";
const description = "Meet the leadership of Datta Infotech Consultants and learn about our mission in cyber security, technology, public safety, and strategic advisory.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title }, { name: "description", content: description },
      { property: "og:title", content: title }, { property: "og:description", content: description },
      { property: "og:type", content: "website" }, { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageIntro eyebrow="About Us" title="Leadership, Expertise & Institutional Trust" description="A focused consulting organisation committed to stronger security ecosystems, responsible technology, and resilient institutions." />
      <About />
      <LeadershipProfiles />
    </SiteLayout>
  );
}
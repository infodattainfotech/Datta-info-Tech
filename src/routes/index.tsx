import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { Testimonials } from "@/components/site/Testimonials";
import { LeadershipPreview } from "@/components/site/LeadershipPreview";
import { SiteLayout } from "@/components/site/SiteLayout";

const title = "Datta Infotech | Cyber & Homeland Security";
const description =
  "Cyber Security, Digital Forensics, Homeland Security and Government Advisory services from Datta Infotech Consultants, Nalgonda, Telangana, India.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Datta Infotech Consultants",
          description,
          telephone: "+91 76809 20411",
          email: "info.dattainfotech@gmail.com",
          slogan: "Securing the Future Through Technology, Intelligence & Innovation",
          areaServed: "Worldwide",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Nalgonda",
            addressRegion: "Telangana",
            addressCountry: "IN",
          },
          founder: {
            "@type": "Person",
            name: "Adoni Venkata Ramana Rao",
            jobTitle: "Founder & CEO",
          },
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <SiteLayout>
        <Hero />
        <Services />
        <LeadershipPreview />
        <WhyUs />
        <Testimonials />
    </SiteLayout>
  );
}

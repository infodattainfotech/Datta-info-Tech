import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Ceo } from "@/components/site/Ceo";
import { Services } from "@/components/site/Services";
import { Achievements } from "@/components/site/Achievements";
import { WhyUs } from "@/components/site/WhyUs";
import { Media } from "@/components/site/Media";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";

const title = "Datta Infotech Consultants | Cyber Security & Homeland Security";
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
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Ceo />
        <Services />
        <Achievements />
        <WhyUs />
        <Media />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

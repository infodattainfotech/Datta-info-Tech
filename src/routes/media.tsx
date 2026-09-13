import { createFileRoute } from "@tanstack/react-router";
import { MediaGallery } from "@/components/site/MediaGallery";
import { PageIntro } from "@/components/site/PageIntro";
import { SiteLayout } from "@/components/site/SiteLayout";

const title = "Media & Press Coverage | Datta Infotech Consultants";
const description = "Browse verified newspaper coverage, homeland security awards, cybercrime prevention initiatives, and United Nations related activities.";

export const Route = createFileRoute("/media")({
  head: () => ({
    meta: [
      { title }, { name: "description", content: description },
      { property: "og:title", content: title }, { property: "og:description", content: description },
      { property: "og:type", content: "website" }, { property: "og:url", content: "/media" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/media" }],
  }),
  component: MediaPage,
});

function MediaPage() {
  return <SiteLayout><PageIntro eyebrow="Newsroom" title="Media & Press Coverage" description="Published coverage of awards, national security contributions, cybercrime prevention, homeland security, and international engagement." /><MediaGallery /></SiteLayout>;
}
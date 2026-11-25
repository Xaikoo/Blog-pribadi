import type { Metadata } from "next";

import { Skills } from "@/components/about/skills";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "@/components/panel";
import { siteMetadata } from "@/data/siteMetadata";

export const metadata: Metadata = {
  title: siteMetadata.pages.skill.title,
  description: siteMetadata.pages.skill.description,
  openGraph: {
    title: siteMetadata.pages.skill.title,
    description: siteMetadata.pages.skill.description,
    url: `${siteMetadata.siteUrl}/skill`,
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.pages.skill.title,
    description: siteMetadata.pages.skill.description,
    images: [siteMetadata.socialBanner],
    creator: "@sarifInsaan",
  },
  alternates: {
    canonical: `${siteMetadata.siteUrl}/skill`,
  },
};

export default function SkillsPage() {
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto">
        <Panel>
          <PanelHeader>
            <PanelTitle className="text-xl font-bold">Technical Skills</PanelTitle>
            <p className="text-sm text-muted-foreground dark:text-gray-400">
              Teknologi dan alat yang saya gunakan dalam pengembangan perangkat lunak serta berbagai proyek digital.
            </p>
          </PanelHeader>
          <PanelContent>
            <Skills />
          </PanelContent>
        </Panel>
      </div>
    </section>
  );
}

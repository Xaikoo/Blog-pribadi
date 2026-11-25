import type { Metadata } from "next";
import { siteMetadata } from "@/data/siteMetadata";
import { ProjectsSection } from "@/components/projects-section";

export const metadata: Metadata = {
  title: siteMetadata.pages.projects.title,
  description: siteMetadata.pages.projects.description,
  openGraph: {
    title: siteMetadata.pages.projects.title,
    description: siteMetadata.pages.projects.description,
    url: `${siteMetadata.siteUrl}/projects`,
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.pages.projects.title,
    description: siteMetadata.pages.projects.description,
    images: [siteMetadata.socialBanner],
  },
  alternates: {
    canonical: `${siteMetadata.siteUrl}/projects`,
  },
};

export default function Projects() {
  return (
    <>
      <h1 className="sr-only">Projects by {siteMetadata.author}</h1>
      <ProjectsSection />
    </>
  );
}

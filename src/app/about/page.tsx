import React from "react";
import type { Metadata } from "next";
import { siteMetadata } from "@/data/siteMetadata";
import { Panel, PanelContent, PanelHeader } from "@/components/panel";
import { ToolStack } from "@/components/about/toolstack";
import { Github } from "@/components/about/github";
import { Skills } from "@/components/about/skills";
import { Certifications } from "@/components/about/certifications";
import { WorkExperience } from "@/components/about/experience";
import { EXPERIENCES } from "@/data/experience";
import { SKILLS } from "@/data/skills";
import { CERTIFICATIONS } from "@/data/certifications";
import { TOOLS } from "@/data/tools";

export const metadata: Metadata = {
  title: siteMetadata.pages.about.title,
  description: siteMetadata.pages.about.description,
  openGraph: { title: siteMetadata.pages.about.title, description: siteMetadata.pages.about.description, url: `${siteMetadata.siteUrl}/about`, siteName: siteMetadata.title, images: [siteMetadata.socialBanner], type: "profile" },
  alternates: { canonical: `${siteMetadata.siteUrl}/about` },
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return <section className="mt-8 first:mt-0"><Panel><PanelHeader><h2 className="font-bold uppercase text-xs tracking-wider">{title}</h2></PanelHeader><PanelContent>{children}</PanelContent></Panel></section>;
}

export default function About() {
  return <section className="py-12 max-w-4xl mx-auto">
    <h1 className="text-2xl font-bold mb-3">Tentang {siteMetadata.author}</h1>
    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Saya tertarik pada teknologi dan pengembangan proyek digital. Halaman ini menjadi ruang untuk berbagi proses belajar, perangkat yang digunakan, serta aktivitas pengembangan yang dapat dibagikan.</p>
    {EXPERIENCES.length > 0 && <Section title="Pengalaman"><WorkExperience /></Section>}
    {SKILLS.length > 0 && <Section title="Keahlian"><Skills /></Section>}
    {CERTIFICATIONS.length > 0 && <Section title="Sertifikasi"><Certifications /></Section>}
    {TOOLS.length > 0 && <Section title="Perangkat dan teknologi"><ToolStack /></Section>}
    <Section title="GitHub"><Github /></Section>
  </section>;
}

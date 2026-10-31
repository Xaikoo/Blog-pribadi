import { siteMetadata } from "@/data/siteMetadata";

type StructuredDataType = "person" | "website" | "profilePage";
interface StructuredDataProps { type: StructuredDataType }

export function StructuredData({ type }: StructuredDataProps) {
  const sameAs = [siteMetadata.social.githubLink, siteMetadata.social.linkedinLink, siteMetadata.social.x].filter(Boolean);
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteMetadata.siteUrl}/#person`,
    name: siteMetadata.author,
    url: siteMetadata.siteUrl,
    image: `${siteMetadata.siteUrl}/assets/ErikKurniawan-profile.jpeg`,
    description: siteMetadata.description,
    sameAs,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteMetadata.location.city,
      addressCountry: siteMetadata.location.countryCode,
    },
  };
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    inLanguage: "id-ID",
    author: { "@id": `${siteMetadata.siteUrl}/#person` },
    publisher: { "@id": `${siteMetadata.siteUrl}/#person` },
  };
  const profilePage = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: `Profil ${siteMetadata.author}`,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    mainEntity: person,
  };
  const schemas = { person, website, profilePage } as const;
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas[type]) }} />;
}

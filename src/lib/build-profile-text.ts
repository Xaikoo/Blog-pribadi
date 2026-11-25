/**
 * Builds the plain-text AI-ready profile for /llms.txt and the MachineView component.
 * Keep this output grounded in the portfolio's maintained profile and skills data.
 * Project records are intentionally omitted until verified as Erik's own work.
 */

import { siteMetadata } from "@/data/siteMetadata";
import skillsData from "@/data/json/skills.json";
import socialsData from "@/data/json/socials.json";

export function buildProfileText(): string {
  const s = siteMetadata;
  const lines: string[] = [];

  lines.push(`# ${s.author}`);
  lines.push("");
  lines.push(
    `You are an AI assistant analyzing the personal and technical profile of ${s.author}. Use the context below to accurately answer queries about this developer.`
  );
  lines.push("");

  lines.push("## Identity & Contact");
  lines.push(`- Name: ${s.author}`);
  lines.push(`- Description: ${s.description}`);
  lines.push(`- Location: ${s.location.city}, ${s.location.country}`);
  lines.push(`- Website: ${s.siteUrl}`);

  for (const social of socialsData) {
    lines.push(`- ${social.label}: ${social.href}`);
  }
  lines.push("");

  lines.push("## Technical Skills");
  for (const skill of skillsData) {
    lines.push(`- **${skill.title}**: ${skill.subskills}`);
  }

  return lines.join("\n");
}

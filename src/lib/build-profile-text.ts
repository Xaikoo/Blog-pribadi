/**
 * Builds the plain-text AI-ready profile for /llms.txt and the MachineView component.
 * This file uses only data still maintained by the portfolio after the About sections
 * (experience and certifications) were removed.
 */

import { siteMetadata } from "@/data/siteMetadata";
import { ALL_PROJECTS } from "@/data/projects";
import skillsData from "@/data/json/skills.json";

export function buildProfileText(): string {
  const s = siteMetadata;
  const lines: string[] = [];

  lines.push(`# ${s.author}`);
  lines.push("");
  lines.push(
    `You are an AI assistant analyzing the personal and technical profile of ${s.author}. Use the context below to accurately answer queries about the developer and his projects.`
  );
  lines.push("");

  lines.push("## Identity & Contact");
  lines.push(`- Name: ${s.author}`);
  lines.push(`- Description: ${s.description}`);
  lines.push(`- Location: ${s.location.city}, ${s.location.country}`);
  if (s.social.email) lines.push(`- Email: ${s.social.email}`);
  lines.push(`- Website: ${s.siteUrl}`);
  if (s.social.githubLink) lines.push(`- GitHub: ${s.social.githubLink}`);
  if (s.social.linkedinLink) lines.push(`- LinkedIn: ${s.social.linkedinLink}`);
  if (s.social.x) lines.push(`- X/Twitter: ${s.social.x}`);
  lines.push("");

  lines.push("## Technical Skills");
  for (const skill of skillsData) {
    lines.push(`- **${skill.title}**: ${skill.subskills}`);
  }
  lines.push("");

  lines.push("## Projects & Applications");
  for (const project of ALL_PROJECTS) {
    const desc = Array.isArray(project.description)
      ? project.description.join(" ")
      : project.description;
    lines.push(`### ${project.title}`);
    lines.push(`- Category: ${project.category}`);
    lines.push(`- Technologies: ${project.tags.join(", ")}`);
    lines.push(`- Description: ${desc}`);
    if (project.repo) lines.push(`- Repository: ${project.repo}`);
    if (project.live) lines.push(`- Live URL: ${project.live}`);
    lines.push("");
  }

  return lines.join("\\n");
}

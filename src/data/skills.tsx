import React from "react";
import skillsData from "./json/skills.json";
import { resolveIcon } from "./icon-map";

export interface Skill {
  title: string;
  icon: React.ReactElement;
  subskills: string;
}

type SkillData = {
  title: string;
  icon: string;
  iconColor?: string;
  subskills: string;
};

// Explicitly type imported JSON: an empty [] otherwise becomes never[].
export const SKILLS: Skill[] = (skillsData as SkillData[]).map((skill) => ({
  title: skill.title,
  icon: resolveIcon(skill.icon, skill.iconColor),
  subskills: skill.subskills,
}));

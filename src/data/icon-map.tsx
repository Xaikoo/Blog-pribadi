/**
 * Icon Map — maps string keys (used in JSON data files) to React icon components.
 */
import React from "react";
import {
  DiReact, DiNodejs, DiMongodb, DiPython, DiGit,
  DiCss3, DiHtml5, DiVisualstudio, DiCode,
} from "react-icons/di";
import { SiNextdotjs, SiReplit } from "react-icons/si";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import {
  GitHubIcon, InstagramIcon, LinkedInIcon, XIcon,
} from "@/components/icons";

export const ICON_COMPONENT_MAP: Record<string, React.ElementType> = {
  DiReact, DiNodejs, DiMongodb, DiPython, DiGit,
  DiCss3, DiHtml5, DiVisualstudio, DiCode,
  SiNextdotjs, SiReplit,
  GitHubIcon, XIcon, LinkedInIcon, InstagramIcon,
  FaWhatsapp, FaEnvelope,
};

export function resolveIcon(key: string, className?: string): React.ReactElement {
  const Component = ICON_COMPONENT_MAP[key];
  if (!Component) {
    console.warn(`[icon-map] Unknown icon key: "${key}"`);
    return <span aria-hidden="true">?</span>;
  }
  return <Component className={className} />;
}

export function resolveIconComponent(key: string): React.ElementType {
  const Component = ICON_COMPONENT_MAP[key];
  if (!Component) {
    console.warn(`[icon-map] Unknown icon key: "${key}"`);
    function UnknownIcon() { return <span aria-hidden="true">?</span>; }
    return UnknownIcon;
  }
  return Component;
}

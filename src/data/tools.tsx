import React from "react";
import toolsData from "./json/tools.json";
import { resolveIcon } from "./icon-map";

export interface Tool {
  name: string;
  icon: React.ReactElement;
}

type ToolData = {
  name: string;
  icon: string;
  iconColor?: string;
};

// Explicitly type imported JSON so an empty [] remains a valid empty dataset.
export const TOOLS: Tool[] = (toolsData as ToolData[]).map((tool) => ({
  name: tool.name,
  icon: resolveIcon(tool.icon, tool.iconColor),
}));

import React from "react";
import { FolderKanban } from "lucide-react";
import { Panel, PanelContent, PanelHeader } from "./panel";

export function ProjectsSection() {
  return (
    <Panel id="projects" className="mt-6">
      <PanelHeader>
        <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
          <FolderKanban className="size-4" />
          <span className="font-bold uppercase text-xs tracking-wider">Projects</span>
        </div>
      </PanelHeader>
      <PanelContent>
        <p className="py-6 text-center text-sm text-gray-500 dark:text-gray-400">
          Belum ada proyek yang ditampilkan.
        </p>
      </PanelContent>
    </Panel>
  );
}

"use client";

import { useState } from "react";
import type { Project } from "@/data/projects";
import { selectedProjects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";

export function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-1xl">
            <h2 className="text-3xl font-bold text-accent sm:text-4xl">Projects</h2>
            <p className="mt-4 text-base leading-8 text-secondary">
              A quick look at my strongest work, including ongoing builds, coursework, and portfolio projects.
            </p>
          </div>
        </div>
        <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {selectedProjects.map((project) => (
            <ProjectCard key={project.title} project={project} onOpen={setActiveProject} />
          ))}
        </div>
      </div>
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}

"use client";

import { useState } from "react";
import type { Project } from "@/data/projects";
import { selectedProjects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { ScrollReveal } from "./ScrollReveal";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          title="Projects"
          description="A quick look at my strongest work, including ongoing builds, coursework, and portfolio projects."
        />
        <div className="mt-10 grid gap-7 md:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          {selectedProjects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 80}>
              <ProjectCard project={project} onOpen={setActiveProject} />
            </ScrollReveal>
          ))}
        </div>
      </div>
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}

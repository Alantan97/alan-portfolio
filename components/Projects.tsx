import { selectedProjects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section id="projects" className="border-b border-border bg-background py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent">Projects</p>
          <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">Selected work.</h2>
          <p className="mt-4 text-sm leading-6 text-secondary sm:text-base">
            A quick look at my strongest work, including ongoing builds, coursework, and case-study projects.
          </p>
        </div>
        <div className="mt-12 grid gap-7 md:grid-cols-2">
          {selectedProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

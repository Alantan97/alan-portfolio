import { selectedProjects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const [featuredProject, ...otherProjects] = selectedProjects;

  return (
    <section id="projects" className="border-b border-border bg-background py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-accent sm:text-4xl">Projects</h2>
            <p className="mt-4 text-sm leading-6 text-secondary sm:text-base">
              A quick look at my strongest work, including ongoing builds, coursework, and case-study projects.
            </p>
          </div>
          <p className="text-sm font-semibold text-secondary">{selectedProjects.length} projects</p>
        </div>
        {featuredProject ? (
          <div className="mt-12">
            <ProjectCard project={featuredProject} featured />
          </div>
        ) : null}
        <div className="mt-7 grid gap-7 md:grid-cols-3">
          {otherProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

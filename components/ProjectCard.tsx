import Image from "next/image";
import Link from "next/link";
import type { KeyboardEvent } from "react";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
  onOpen?: (project: Project) => void;
};

export function ProjectCard({ project, featured = false, onOpen }: ProjectCardProps) {
  const visibleTechnologies = project.technologies.slice(0, featured ? 5 : 4);
  const hiddenTechnologyCount = project.technologies.length - visibleTechnologies.length;
  const cardClassName = featured
    ? "group relative grid cursor-pointer overflow-hidden rounded-4xl border border-transparent bg-background text-left shadow-[0_5px_12px_rgba(37,99,235,0.18)] transition hover:-translate-y-1 hover:border-accent hover:shadow-[0_8px_16px_rgba(37,99,235,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 lg:grid-cols-[1fr_1fr]"
    : "group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-3xl border border-transparent bg-background text-left shadow-[0_5px_12px_rgba(37,99,235,0.18)] transition hover:-translate-y-1 hover:border-accent hover:shadow-[0_8px_16px_rgba(37,99,235,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4";
  const imageClassName = featured
    ? "aspect-[16/10] h-full min-h-72 w-full object-cover transition duration-300 group-hover:scale-[1.03] lg:aspect-auto"
    : "aspect-[16/10] w-full object-cover transition duration-300 group-hover:scale-[1.03]";
  const openProject = () => onOpen?.(project);
  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openProject();
    }
  };

  const cardContent = (
    <>
      <div className="relative m-3 mb-0 overflow-hidden rounded-[1.35rem] bg-accent/10">
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          width={900}
          height={560}
          className={imageClassName}
        />
        <div className="absolute inset-0 flex items-center justify-center bg-primary/10 opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-background shadow-[0_10px_24px_rgba(37,99,235,0.32)]">
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </span>
        </div>
      </div>
      <div className={`flex flex-1 flex-col ${featured ? "p-7 sm:p-9" : "p-6"}`}>
        <div className="flex items-start justify-between gap-4">
          <div>
            {project.category ? (
              <p className="text-xs font-bold uppercase text-accent">{project.category}</p>
            ) : null}
            <h3
              className={`${featured ? "mt-4 text-3xl sm:text-4xl" : "mt-3 text-2xl"} font-bold leading-tight text-primary`}
            >
              <span className="transition group-hover:text-accent group-focus-visible:text-accent">{project.title}</span>
            </h3>
            {project.subtitle ? (
              <p
                className={`${featured ? "mt-2 text-xl sm:text-2xl" : "mt-1.5 text-base"} font-semibold text-primary transition group-hover:text-accent group-focus-visible:text-accent`}
              >
                {project.subtitle}
              </p>
            ) : null}
          </div>
          {project.status ? (
            <span className="shrink-0 rounded-full bg-accent/5 px-3 py-1 text-xs font-semibold text-secondary">
              {project.status}
            </span>
          ) : null}
        </div>
        <p className="mt-4 text-base leading-8 text-secondary">
          {project.description}
        </p>
        <div className="mt-auto flex flex-wrap gap-2 pt-5">
          {visibleTechnologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-accent/15 bg-accent/5 px-3 py-1 text-xs font-semibold text-accent"
            >
              {technology}
            </span>
          ))}
          {hiddenTechnologyCount > 0 ? (
            <span className="rounded-full border border-accent/15 bg-accent/5 px-3 py-1 text-xs font-semibold text-accent">
              +{hiddenTechnologyCount}
            </span>
          ) : null}
        </div>
      </div>
    </>
  );

  if (onOpen) {
    return (
      <article
        className={cardClassName}
        role="button"
        tabIndex={0}
        aria-label={`View ${project.title} project`}
        onClick={openProject}
        onKeyDown={handleKeyDown}
      >
        {cardContent}
      </article>
    );
  }

  return (
    <Link href={`/projects/${project.slug}`} scroll className={cardClassName} aria-label={`View ${project.title} project`}>
      {cardContent}
    </Link>
  );
}

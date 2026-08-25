import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
};

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const cardClassName = featured
    ? "group grid overflow-hidden rounded-[2rem] bg-background shadow-[0_6px_14px_rgba(37,99,235,0.16)] transition hover:-translate-y-1 hover:shadow-[0_10px_22px_rgba(37,99,235,0.22)] lg:grid-cols-[1.15fr_0.85fr]"
    : "group flex h-full flex-col overflow-hidden rounded-[2rem] bg-background shadow-[0_6px_14px_rgba(37,99,235,0.16)] transition hover:-translate-y-1 hover:shadow-[0_10px_22px_rgba(37,99,235,0.22)]";
  const imageClassName = featured
    ? "aspect-[16/10] h-full min-h-72 w-full object-cover transition duration-300 group-hover:scale-[1.02] lg:aspect-auto"
    : "aspect-[16/10] w-full object-cover transition duration-300 group-hover:scale-[1.02]";

  return (
    <article className={cardClassName}>
      <div className="relative overflow-hidden bg-accent/5">
        <Link href={`/projects/${project.slug}`} scroll aria-label={`View ${project.title} project`}>
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            width={900}
            height={560}
            className={imageClassName}
          />
        </Link>
      </div>
      <div className={`flex flex-1 flex-col ${featured ? "p-7 sm:p-9" : "p-6"}`}>
        <div className="flex flex-wrap items-center gap-2.5">
          {project.category ? (
            <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-bold text-accent">{project.category}</span>
          ) : null}
          {project.status ? (
            <span className="rounded-full bg-accent/5 px-3 py-1 text-xs font-bold text-secondary">{project.status}</span>
          ) : null}
        </div>
        <h3 className={`${featured ? "mt-6 text-3xl sm:text-4xl" : "mt-5 text-2xl"} font-bold leading-tight text-primary`}>
          <Link href={`/projects/${project.slug}`} scroll className="hover:text-accent">
            {project.title}
          </Link>
        </h3>
        <p className={`${featured ? "mt-4 text-base leading-7" : "mt-3 text-sm leading-6"} text-secondary`}>{project.description}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span key={technology} className="rounded-full bg-accent/5 px-3 py-1 text-xs font-semibold text-secondary">
              {technology}
            </span>
          ))}
        </div>
        <div className="mt-auto pt-7">
          <Link
            href={`/projects/${project.slug}`}
            scroll
            className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-background transition hover:bg-accent-hover"
          >
            View Project
          </Link>
        </div>
      </div>
    </article>
  );
}

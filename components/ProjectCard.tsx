import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
};

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const cardClassName = featured
    ? "group grid overflow-hidden rounded-[2rem] border border-border bg-background shadow-sm shadow-border/70 transition hover:-translate-y-1 hover:border-accent hover:shadow-2xl hover:shadow-accent/10 lg:grid-cols-[1.15fr_0.85fr]"
    : "group flex h-full flex-col overflow-hidden rounded-[2rem] border border-border bg-background shadow-sm shadow-border/70 transition hover:-translate-y-1 hover:border-accent hover:shadow-2xl hover:shadow-accent/10";
  const imageClassName = featured
    ? "aspect-[16/10] h-full min-h-72 w-full object-cover transition duration-300 group-hover:scale-[1.02] lg:aspect-auto"
    : "aspect-[16/10] w-full object-cover transition duration-300 group-hover:scale-[1.02]";

  return (
    <article className={cardClassName}>
      <div className={`relative overflow-hidden bg-accent/5 ${featured ? "lg:border-r lg:border-border" : "border-b border-border"}`}>
        <Link href={`/projects/${project.slug}`} aria-label={`View ${project.title} case study`}>
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            width={900}
            height={560}
            className={imageClassName}
          />
        </Link>
        {project.featured ? (
          <span className="absolute left-5 top-5 rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wide text-background shadow-lg shadow-accent/20">
            {featured ? "Featured Project" : "Featured"}
          </span>
        ) : null}
      </div>
      <div className={`flex flex-1 flex-col ${featured ? "p-7 sm:p-9" : "p-6"}`}>
        <div className="flex flex-wrap items-center gap-2.5">
          {project.category ? (
            <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-bold text-accent">{project.category}</span>
          ) : null}
          {project.status ? (
            <span className="rounded-full border border-border px-3 py-1 text-xs font-bold text-secondary">{project.status}</span>
          ) : null}
        </div>
        <h3 className={`${featured ? "mt-6 text-3xl sm:text-4xl" : "mt-5 text-2xl"} font-bold leading-tight text-primary`}>
          <Link href={`/projects/${project.slug}`} className="hover:text-accent">
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
            className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-background transition hover:bg-accent-hover"
          >
            View Case Study
          </Link>
        </div>
      </div>
    </article>
  );
}

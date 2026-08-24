import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-border bg-background transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-border/80">
      <div className="relative border-b border-border bg-accent/5 p-4">
        <Link href={`/projects/${project.slug}`} aria-label={`View ${project.title} case study`}>
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            width={900}
            height={560}
            className="aspect-[16/10] w-full rounded-2xl object-cover transition duration-300 group-hover:scale-[1.02]"
          />
        </Link>
        {project.featured ? (
          <span className="absolute left-8 top-8 rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wide text-background">
            Featured
          </span>
        ) : null}
      </div>
      <div className="p-6 sm:p-7">
        <div className="flex flex-wrap items-center gap-2">
          {project.category ? (
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent">{project.category}</span>
          ) : null}
          {project.status ? (
            <span className="rounded-full bg-accent/5 px-2.5 py-1 text-xs font-bold text-accent">{project.status}</span>
          ) : null}
        </div>
        <h3 className="mt-4 text-2xl font-bold text-primary">
          <Link href={`/projects/${project.slug}`} className="hover:text-accent">
            {project.title}
          </Link>
        </h3>
        <p className="mt-3 text-sm leading-6 text-secondary">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span key={technology} className="rounded-full bg-accent/5 px-3 py-1 text-xs font-semibold text-secondary">
              {technology}
            </span>
          ))}
        </div>
        <div className="mt-6 border-t border-border pt-5">
          <Link href={`/projects/${project.slug}`} className="text-sm font-bold text-accent hover:text-accent-hover">
            View Case Study
          </Link>
        </div>
      </div>
    </article>
  );
}

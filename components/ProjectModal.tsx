"use client";

import Image from "next/image";
import { useEffect } from "react";
import type { Project } from "@/data/projects";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

function isUsableLink(link?: string) {
  return Boolean(link && link !== "#");
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, project]);

  if (!project) {
    return null;
  }

  return (
    <div
      className="project-modal-backdrop fixed inset-0 z-[100] flex items-center justify-center bg-primary/70 px-4 py-6 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onMouseDown={onClose}
    >
      <div className="project-modal-panel relative w-full max-w-5xl" onMouseDown={(event) => event.stopPropagation()}>
        <div className="absolute -right-3 -top-3 z-20 sm:-right-4 sm:-top-4">
          <button
            type="button"
            onClick={onClose}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-background text-accent shadow-[0_8px_18px_rgba(17,24,39,0.12)] ring-1 ring-accent/15 transition hover:bg-accent hover:text-background sm:h-12 sm:w-12"
            aria-label="Close project popup"
          >
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
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        <div className="project-modal-scroll max-h-[90vh] overflow-y-auto rounded-4xl bg-background shadow-[0_18px_45px_rgba(17,24,39,0.18)]">
          <div className="p-5 sm:p-8">
            <div className="overflow-hidden rounded-3xl bg-accent/5">
              <Image
                src={project.image}
                alt={`${project.title} project preview`}
                width={1100}
                height={640}
                className="aspect-[16/9] w-full object-cover"
                priority
              />
            </div>

            <div className="mt-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  {project.category ? (
                    <p className="text-xs font-bold uppercase text-accent">{project.category}</p>
                  ) : null}
                  <h2 id="project-modal-title" className="mt-3 text-3xl font-bold leading-tight text-primary sm:text-4xl">
                    {project.title}
                  </h2>
                  {project.subtitle ? (
                    <p className="mt-2 text-lg font-bold text-primary sm:text-xl">{project.subtitle}</p>
                  ) : null}
                </div>
                {project.status ? (
                  <span className="shrink-0 rounded-full bg-accent/5 px-3 py-1 text-xs font-semibold text-secondary">
                    {project.status}
                  </span>
                ) : null}
              </div>
              <p className="mt-5 text-base leading-8 text-secondary">{project.description}</p>

              <div className="mt-7 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-accent/15 bg-accent/5 px-3 py-1 text-xs font-semibold text-accent"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {(isUsableLink(project.github) || isUsableLink(project.demo)) && (
                <div className="mt-7 flex flex-wrap gap-2">
                  {isUsableLink(project.github) ? (
                    <a
                      href={project.github}
                      className="rounded-full bg-accent px-4 py-2 text-sm font-bold text-background transition hover:bg-accent-hover"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                  ) : null}
                  {isUsableLink(project.demo) ? (
                    <a
                      href={project.demo}
                      className="rounded-full bg-accent px-4 py-2 text-sm font-bold text-background transition hover:bg-accent-hover"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Demo
                    </a>
                  ) : null}
                </div>
              )}

              <div className="mt-9 space-y-8">
                {project.sections.map((section) => (
                  <section key={section.title}>
                    <h3 className="text-xl font-bold text-primary">{section.title}</h3>
                    <ul className="mt-3 space-y-3">
                      {section.body.map((paragraph) => (
                        <li key={paragraph} className="flex gap-3 text-base leading-8 text-secondary">
                          <span className="mt-3.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                          <span>{paragraph}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

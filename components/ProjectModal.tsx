"use client";

import Image from "next/image";
import { useEffect } from "react";
import type { CaseStudyBodyItem, CaseStudySection, Project } from "@/data/projects";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

function isUsableLink(link?: string) {
  return Boolean(link && link !== "#");
}

function formatSectionTitle(title: string) {
  return title
    .split(" ")
    .map((word) => {
      if (word.toLowerCase() === "ai") {
        return "AI";
      }

      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

function getBodyItemText(item: CaseStudyBodyItem) {
  return typeof item === "string" ? item : item.text;
}

function getBodyItemVariant(item: CaseStudyBodyItem) {
  return typeof item === "string" ? "bullet" : item.variant;
}

const linkIcons: Record<string, string> = {
  GitHub: "/github-white.png",
};

const linkStyles: Record<string, string> = {
  GitHub: "bg-accent text-background hover:bg-accent-hover",
  Demo: "border border-accent/20 bg-background text-primary hover:border-accent hover:text-accent",
};

const iconStyles: Record<string, string> = {
  GitHub: "brightness-0 invert",
};

function ProjectLinkIcon({ label }: { label: string }) {
  if (label === "Demo") {
    return (
      <svg
        aria-hidden="true"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 0 20" />
        <path d="M12 2a15.3 15.3 0 0 0 0 20" />
      </svg>
    );
  }

  return <Image src={linkIcons[label]} alt="" width={16} height={16} className={`h-4 w-4 ${iconStyles[label]}`} />;
}

function ProjectLink({
  href,
  label,
}: {
  href?: string;
  label: string;
}) {
  if (!isUsableLink(href)) {
    return (
      <button
        type="button"
        className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold transition ${linkStyles[label]}`}
      >
        <ProjectLinkIcon label={label} />
        {label}
      </button>
    );
  }

  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold transition ${linkStyles[label]}`}
      target="_blank"
      rel="noreferrer"
    >
      <ProjectLinkIcon label={label} />
      {label}
    </a>
  );
}

function ProjectSection({ section }: { section: CaseStudySection }) {
  return (
    <section className="rounded-3xl bg-accent/5 p-5">
      <h3 className="text-xl font-bold text-primary">{formatSectionTitle(section.title)}</h3>
      <div className="mt-3 space-y-3">
        {section.body.map((item) => {
          const text = getBodyItemText(item);

          if (getBodyItemVariant(item) === "paragraph") {
            return (
              <p key={text} className="text-base leading-8 text-secondary">
                {text}
              </p>
            );
          }

          return (
            <div key={text} className="flex gap-3 text-base leading-8 text-secondary">
              <span className="mt-3.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" aria-hidden="true" />
              <span>{text}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
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

  const problemSection = project.sections.find((section) => section.title.toLowerCase() === "problem");
  const solutionSection = project.sections.find((section) => section.title.toLowerCase() === "solution");
  const headerVisual = project.icon ?? project.image;

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
          <div className="px-7 py-6 sm:px-10 sm:py-10">
            <div className="grid gap-8 md:grid-cols-[1fr_220px] md:items-start">
              <div>
                <div className="flex flex-wrap gap-2">
                  {project.platform ? (
                    <span className="w-fit rounded-full bg-accent/10 px-3 py-1 text-xs font-bold text-accent">
                      {project.platform}
                    </span>
                  ) : null}
                  {project.category ? (
                    <span className="w-fit rounded-full bg-accent/10 px-3 py-1 text-xs font-bold text-accent">
                      {project.category}
                    </span>
                  ) : null}
                </div>
                <h2 id="project-modal-title" className="mt-4 text-3xl font-bold leading-tight text-primary sm:text-4xl">
                  {project.title}
                </h2>
                {project.subtitle ? (
                  <p className="mt-2 text-lg font-bold text-primary sm:text-xl">{project.subtitle}</p>
                ) : null}

                <div className="mt-7 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span key={technology} className="rounded-full bg-accent/5 px-3 py-1 text-xs font-semibold text-secondary">
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-2">
                  <ProjectLink href={project.github} label="GitHub" />
                  <ProjectLink href={project.demo} label="Demo" />
                </div>
              </div>

              <div className="flex justify-start md:justify-end">
                <div className="flex h-36 w-36 items-center justify-center overflow-hidden rounded-3xl bg-accent/5 sm:h-44 sm:w-44">
                  <Image
                    src={headerVisual}
                    alt={`${project.title} icon`}
                    width={180}
                    height={180}
                    className="h-full w-full object-contain"
                    priority
                  />
                </div>
              </div>
            </div>

            <div className="mt-9 space-y-8">
              {project.sections.map((section) => {
                const sectionTitle = section.title.toLowerCase();

                if (problemSection && solutionSection && sectionTitle === "problem") {
                  return (
                    <div key="problem-solution" className="grid gap-8 md:grid-cols-2">
                      <ProjectSection section={problemSection} />
                      <ProjectSection section={solutionSection} />
                    </div>
                  );
                }

                if (problemSection && solutionSection && sectionTitle === "solution") {
                  return null;
                }

                return <ProjectSection key={section.title} section={section} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

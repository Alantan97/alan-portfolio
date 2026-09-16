"use client";

import Image from "next/image";
import { type CSSProperties, useEffect } from "react";
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

function modalItemStyle(delay: number): CSSProperties {
  return { animationDelay: `${delay}ms` };
}

function getYouTubeEmbedUrl(url: string) {
  try {
    const parsedUrl = new URL(url);

    if (parsedUrl.hostname === "youtu.be") {
      return `https://www.youtube.com/embed/${parsedUrl.pathname.slice(1)}`;
    }

    if (parsedUrl.hostname.includes("youtube.com")) {
      const videoId = parsedUrl.searchParams.get("v");
      return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
    }

    return url;
  } catch {
    return url;
  }
}

function isYouTubeUrl(url: string) {
  try {
    const parsedUrl = new URL(url);
    return parsedUrl.hostname === "youtu.be" || parsedUrl.hostname.includes("youtube.com");
  } catch {
    return false;
  }
}

const linkIcons: Record<string, string> = {
  GitHub: "/icons/social/github-white.png",
  "itch.io": "/icons/actions/itchio.png",
  APK: "/icons/actions/android.png",
  "Play Game": "/icons/actions/play.png",
  "Watch Demo": "/icons/actions/play.png",
  "Watch Trailer": "/icons/actions/play.png",
};

const linkStyles: Record<string, string> = {
  GitHub: "bg-accent text-background hover:bg-accent-hover",
  "itch.io": "bg-accent text-background hover:bg-accent-hover",
  APK: "bg-accent text-background hover:bg-accent-hover",
  "Play Game": "bg-accent text-background hover:bg-accent-hover",
  "Watch Demo": "bg-accent text-background hover:bg-accent-hover",
  "Watch Trailer": "bg-accent text-background hover:bg-accent-hover",
};

const iconStyles: Record<string, string> = {
  GitHub: "brightness-0 invert",
  "itch.io": "brightness-0 invert",
  APK: "brightness-0 invert",
  "Play Game": "brightness-0 invert",
  "Watch Demo": "brightness-0 invert",
  "Watch Trailer": "brightness-0 invert",
};

function ProjectLinkIcon({ label, unavailable = false }: { label: string; unavailable?: boolean }) {
  if (label === "Play Game" || label === "Watch Demo" || label === "Watch Trailer") {
    return (
      <Image
        src={linkIcons[label]}
        alt=""
        width={18}
        height={18}
        className={`h-auto w-4 object-contain ${unavailable ? "brightness-0 opacity-70" : iconStyles[label]}`}
      />
    );
  }

  if (label === "APK") {
    return (
      <Image
        src={linkIcons[label]}
        alt=""
        width={18}
        height={10}
        className={`h-auto w-4 object-contain ${unavailable ? "brightness-0 opacity-70" : iconStyles[label]}`}
      />
    );
  }

  return (
    <Image
      src={linkIcons[label]}
      alt=""
      width={16}
      height={16}
      className={`h-4 w-4 ${unavailable ? "brightness-0 opacity-70" : iconStyles[label]}`}
    />
  );
}

function ProjectLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
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

function ProjectUnavailableLink({ label }: { label: string }) {
  return (
    <button
      type="button"
      disabled
      title={`${label} link unavailable`}
      className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-border bg-accent/5 px-4 py-2 text-sm font-bold text-secondary opacity-70"
    >
      <ProjectLinkIcon label={label} unavailable />
      {label}
    </button>
  );
}

function ProjectVideoButton({
  label,
  targetId,
}: {
  label: string;
  targetId: string;
}) {
  const scrollToVideo = () => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <button
      type="button"
      onClick={scrollToVideo}
      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold transition ${linkStyles[label]}`}
    >
      <ProjectLinkIcon label={label} />
      {label}
    </button>
  );
}

function ProjectVideoSection({
  src,
  label,
  id,
  animationDelay,
}: {
  src: string;
  label: string;
  id: string;
  animationDelay: number;
}) {
  const isYouTubeVideo = isYouTubeUrl(src);

  return (
    <section id={id} className="project-modal-item scroll-mt-6" style={modalItemStyle(animationDelay)}>
      <h3 className="text-lg font-semibold text-primary">{label.replace("Watch ", "")}</h3>
      {isYouTubeVideo ? (
        <iframe
          className="mt-3 aspect-video w-full rounded-2xl border border-border bg-primary"
          src={getYouTubeEmbedUrl(src)}
          title={label}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <video
          className="mt-3 aspect-video w-full rounded-2xl border border-border bg-primary object-cover"
          controls
          preload="metadata"
          src={src}
        >
          <a href={src}>Open video</a>
        </video>
      )}
    </section>
  );
}

function ProjectSection({
  section,
  animate = true,
  animationDelay = 0,
}: {
  section: CaseStudySection;
  animate?: boolean;
  animationDelay?: number;
}) {
  return (
    <section className={animate ? "project-modal-item" : undefined} style={animate ? modalItemStyle(animationDelay) : undefined}>
      <h3 className="text-lg font-semibold text-primary">{formatSectionTitle(section.title)}</h3>
      <div className="mt-2 space-y-1.5">
        {section.body.map((item) => {
          const text = getBodyItemText(item);

          if (getBodyItemVariant(item) === "paragraph") {
            return (
              <p key={text} className="text-base leading-7 text-secondary">
                {text}
              </p>
            );
          }

          return (
            <div key={text} className="flex gap-3 text-base leading-7 text-secondary">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" aria-hidden="true" />
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
  const videoSectionId = `project-video-${project.slug}`;
  const isTrailerVideo = project.video?.actionLabel.toLowerCase().includes("trailer") ?? false;
  const shouldShowPlaceholderGithub = project.slug === "planova" && project.github === "#";
  const projectActions = [
    project.github ? { href: project.github, label: "GitHub" } : null,
    project.itch ? { href: project.itch, label: "itch.io" } : null,
    project.playUrl ? { href: project.playUrl, label: "Play Game" } : null,
    project.apk ? { href: project.apk, label: "APK" } : null,
  ].filter(
    (action): action is { href: string; label: string } =>
      Boolean(action && (isUsableLink(action.href) || (shouldShowPlaceholderGithub && action.label === "GitHub"))),
  );
  const isInDevelopment = project.status?.toLowerCase().includes("progress");
  const visibleSections = project.sections.filter((section) => {
    const sectionTitle = section.title.toLowerCase();
    return !(problemSection && solutionSection && sectionTitle === "solution");
  });

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
          <div className="px-7 py-6 sm:px-10 sm:py-8">
            <div className="grid gap-6 md:grid-cols-[1fr_220px] md:items-start">
              <div>
                <div className="project-modal-item" style={modalItemStyle(80)}>
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
                </div>

                <p className="project-modal-item mt-5 text-sm font-medium leading-7 text-secondary transition hover:text-accent" style={modalItemStyle(150)}>
                  {project.technologies.join(" • ")}
                </p>

                {projectActions.length ? (
                  <div className="project-modal-item mt-5 flex flex-wrap gap-2" style={modalItemStyle(220)}>
                    {isInDevelopment ? (
                      <span className="inline-flex items-center rounded-full border border-accent/20 bg-accent/5 px-4 py-2 text-sm font-bold text-accent">
                        In development
                      </span>
                    ) : null}
                    {projectActions.map((action) => (
                      isUsableLink(action.href) ? (
                        <ProjectLink key={action.label} href={action.href} label={action.label} />
                      ) : (
                        <ProjectUnavailableLink key={action.label} label={action.label} />
                      )
                    ))}
                    {project.video ? (
                      <ProjectVideoButton label={project.video.actionLabel} targetId={videoSectionId} />
                    ) : null}
                  </div>
                ) : project.video ? (
                  <div className="project-modal-item mt-5 flex flex-wrap gap-2" style={modalItemStyle(220)}>
                    <ProjectVideoButton label={project.video.actionLabel} targetId={videoSectionId} />
                  </div>
                ) : isInDevelopment ? (
                  <div className="project-modal-item mt-5 flex flex-wrap gap-2" style={modalItemStyle(220)}>
                    <span className="inline-flex items-center rounded-full border border-accent/20 bg-accent/5 px-4 py-2 text-sm font-bold text-accent">
                      In development
                    </span>
                  </div>
                ) : null}
              </div>

              <div className="project-modal-item flex justify-start md:justify-end" style={modalItemStyle(140)}>
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

            <div className="mt-7 space-y-6 border-y border-border py-6">
              {visibleSections.map((section, index) => {
                const sectionTitle = section.title.toLowerCase();
                const animationDelay = 300 + index * 90;

                if (problemSection && solutionSection && sectionTitle === "problem") {
                  return (
                    <div
                      key="problem-solution"
                      className="project-modal-item grid gap-6 md:grid-cols-2"
                      style={modalItemStyle(animationDelay)}
                    >
                      <ProjectSection section={problemSection} animate={false} />
                      <ProjectSection section={solutionSection} animate={false} />
                    </div>
                  );
                }

                if (sectionTitle === "core features" && project.video && !isTrailerVideo) {
                  return (
                    <div key={section.title} className="space-y-6">
                      <ProjectSection section={section} animationDelay={animationDelay} />
                      <ProjectVideoSection
                        src={project.video.src}
                        label={project.video.actionLabel}
                        id={videoSectionId}
                        animationDelay={animationDelay + 90}
                      />
                    </div>
                  );
                }

                if (sectionTitle === "game design" && project.video && isTrailerVideo) {
                  return (
                    <div key={section.title} className="space-y-6">
                      <ProjectSection section={section} animationDelay={animationDelay} />
                      <ProjectVideoSection
                        src={project.video.src}
                        label={project.video.actionLabel}
                        id={videoSectionId}
                        animationDelay={animationDelay + 90}
                      />
                    </div>
                  );
                }

                return <ProjectSection key={section.title} section={section} animationDelay={animationDelay} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ScrollToTop } from "@/components/ScrollToTop";
import { getProjectBySlug, projects, type CaseStudyBodyItem } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

function getSectionId(title: string) {
  return title.toLowerCase().replaceAll(" ", "-");
}

function hasValidUrl(url?: string): url is string {
  return Boolean(url && url !== "#");
}

function getBodyItemText(item: CaseStudyBodyItem) {
  return typeof item === "string" ? item : item.text;
}

function getBodyItemVariant(item: CaseStudyBodyItem) {
  return typeof item === "string" ? "paragraph" : item.variant;
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | Alan Tan",
    };
  }

  return {
    title: `${project.title} | Alan Tan`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const currentProjectIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(currentProjectIndex + 1) % projects.length];
  const hasGithubLink = hasValidUrl(project.github);
  const hasDemoLink = hasValidUrl(project.demo);

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <section className="bg-accent/5 py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-2 text-sm font-semibold">
                <li>
                  <Link href="/" className="text-secondary transition hover:text-accent">
                    Home
                  </Link>
                </li>
                <li className="text-secondary">/</li>
                <li>
                  <Link href="/#projects" className="text-secondary transition hover:text-accent">
                    Projects
                  </Link>
                </li>
                <li className="text-secondary">/</li>
                <li className="text-accent" aria-current="page">
                  {project.title}
                </li>
              </ol>
            </nav>

            <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_420px] lg:items-center">
              <div>
                <div className="flex flex-wrap gap-2">
                  {project.category ? (
                    <span className="rounded-full bg-background px-3 py-1 text-xs font-bold text-accent">
                      {project.category}
                    </span>
                  ) : null}
                </div>

                <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight text-primary sm:text-6xl">
                  {project.title}
                </h1>
                {project.subtitle ? (
                  <p className="mt-3 max-w-3xl text-2xl font-bold leading-tight text-primary sm:text-3xl">
                    {project.subtitle}
                  </p>
                ) : null}
                <p className="mt-5 max-w-3xl text-base leading-8 text-secondary">{project.description}</p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {hasGithubLink ? (
                    <a
                      href={project.github}
                      className="inline-flex rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-background transition hover:bg-accent-hover"
                    >
                      GitHub
                    </a>
                  ) : null}
                  {hasDemoLink ? (
                    <a
                      href={project.demo}
                      className="inline-flex rounded-full border border-accent/20 bg-background px-5 py-2.5 text-sm font-bold text-primary transition hover:border-accent hover:text-accent"
                    >
                      Live Demo
                    </a>
                  ) : null}
                </div>
              </div>

              <div className="overflow-hidden rounded-[2rem] bg-background p-3 shadow-[0_8px_20px_rgba(37,99,235,0.20)]">
                <Image
                  src={project.image}
                  alt={`${project.title} project preview`}
                  width={900}
                  height={560}
                  className="aspect-[16/11] w-full rounded-[1.5rem] object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background py-10">
          <div className="mx-auto grid max-w-7xl gap-4 px-5 sm:grid-cols-2 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-background p-5 shadow-[0_5px_14px_rgba(37,99,235,0.15)]">
              <p className="text-sm font-semibold text-secondary">Category</p>
              <p className="mt-2 text-lg font-bold text-primary">{project.category ?? "Project"}</p>
            </div>
            <div className="rounded-3xl bg-background p-5 shadow-[0_5px_14px_rgba(37,99,235,0.15)]">
              <p className="text-sm font-semibold text-secondary">Stack</p>
              <p className="mt-2 text-lg font-bold text-primary">{project.technologies.slice(0, 2).join(", ")}</p>
            </div>
          </div>
        </section>

        <section className="bg-background py-16 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-6 lg:grid-cols-[240px_1fr] lg:px-8">
            <aside className="rounded-3xl bg-background p-6 shadow-[0_6px_14px_rgba(37,99,235,0.16)] lg:sticky lg:top-24 lg:self-start">
              <p className="text-sm font-bold uppercase text-accent">Project</p>
              <nav className="mt-5 flex flex-col gap-1" aria-label="Project sections">
                {project.sections.map((section) => (
                  <a
                    key={section.title}
                    href={`#${getSectionId(section.title)}`}
                    className="rounded-full px-3 py-2 text-sm font-semibold text-secondary transition hover:bg-accent/5 hover:text-accent"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </aside>
            <div className="space-y-6">
              {project.sections.map((section, index) => (
                <article
                  key={section.title}
                  id={getSectionId(section.title)}
                  className="scroll-mt-28 rounded-3xl bg-background p-7 shadow-[0_6px_14px_rgba(37,99,235,0.16)]"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h2 className="text-2xl font-bold text-primary">{section.title}</h2>
                  </div>
                  <div className="mt-4 space-y-4">
                    {section.body.map((item) => {
                      const text = getBodyItemText(item);

                      if (getBodyItemVariant(item) === "bullet") {
                        return (
                          <div key={text} className="flex gap-3 text-base leading-8 text-secondary">
                            <span className="mt-3.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" aria-hidden="true" />
                            <span>{text}</span>
                          </div>
                        );
                      }

                      return (
                        <p key={text} className="text-base leading-8 text-secondary">
                          {text}
                        </p>
                      );
                    })}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {nextProject ? (
          <section className="bg-accent/5 py-14">
            <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
              <div>
                <p className="text-sm font-bold uppercase text-accent">Next Project</p>
                <h2 className="mt-2 text-3xl font-bold text-primary">{nextProject.title}</h2>
              </div>
              <Link
                href={`/projects/${nextProject.slug}`}
                className="inline-flex w-fit rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-background transition hover:bg-accent-hover"
              >
                View Project
              </Link>
            </div>
          </section>
        ) : null}

        <Contact />
      </main>
      <Footer />
    </>
  );
}

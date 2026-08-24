import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { getProjectBySlug, projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

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

  return (
    <>
      <Navbar />
      <main>
        <section className="border-b border-border bg-background py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
            <Link href="/#projects" className="text-sm font-bold text-accent hover:text-accent-hover">
              Back to projects
            </Link>
            <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_0.65fr] lg:items-end">
              <div>
                {project.category ? (
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent">{project.category}</p>
                ) : null}
                <h1 className="mt-4 max-w-3xl text-5xl font-bold leading-tight text-primary sm:text-6xl">
                  {project.title}
                </h1>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-secondary">{project.description}</p>
              </div>
              <aside className="rounded-3xl border border-border bg-accent/5 p-6">
                <dl className="space-y-4">
                  {project.status ? (
                    <div>
                      <dt className="text-sm font-semibold text-secondary">Status</dt>
                      <dd className="mt-1 font-bold text-primary">{project.status}</dd>
                    </div>
                  ) : null}
                  <div>
                    <dt className="text-sm font-semibold text-secondary">Technologies</dt>
                    <dd className="mt-2 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span key={technology} className="rounded-full bg-accent/5 px-3 py-1 text-xs font-semibold text-secondary">
                          {technology}
                        </span>
                      ))}
                    </dd>
                  </div>
                </dl>
                <div className="mt-5 flex flex-wrap gap-3">
                  {project.github ? (
                    <a href={project.github} className="text-sm font-bold text-primary hover:text-accent">
                      GitHub
                    </a>
                  ) : null}
                  {project.demo ? (
                    <a href={project.demo} className="text-sm font-bold text-primary hover:text-accent">
                      Live Demo
                    </a>
                  ) : null}
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-background py-12">
          <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-[2rem] border border-border bg-accent/5 p-4">
              <Image
                src={project.image}
                alt={`${project.title} case study preview`}
                width={1200}
                height={720}
                className="aspect-[16/9] w-full rounded-[1.5rem] object-cover"
                priority
              />
            </div>
          </div>
        </section>

        <section className="bg-background py-16 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-6 lg:grid-cols-[240px_1fr] lg:px-8">
            <aside className="rounded-3xl border border-border p-6 lg:sticky lg:top-24 lg:self-start">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent">Case Study</p>
              <nav className="mt-5 flex flex-col gap-3" aria-label="Case study sections">
                {project.sections.map((section) => (
                  <a key={section.title} href={`#${section.title.toLowerCase().replaceAll(" ", "-")}`} className="text-sm font-semibold text-secondary hover:text-accent">
                    {section.title}
                  </a>
                ))}
              </nav>
            </aside>
            <div className="space-y-10">
              {project.sections.map((section) => (
                <article key={section.title} id={section.title.toLowerCase().replaceAll(" ", "-")} className="rounded-3xl border border-border p-7">
                  <h2 className="text-2xl font-bold text-primary">{section.title}</h2>
                  <div className="mt-4 space-y-4">
                    {section.body.map((paragraph) => (
                      <p key={paragraph} className="text-base leading-8 text-secondary">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  );
}

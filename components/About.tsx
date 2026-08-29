import Image from "next/image";
import { profile } from "@/data/profile";

export function About() {
  return (
    <section id="about" className="bg-accent/[0.03] py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <h2 className="text-3xl font-bold text-accent sm:text-4xl">About</h2>
          <p className="mt-4 text-bold font-semibold leading-8 text-secondary">
            A little more about how I think, build, and grow as a software engineering student.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[320px_1fr] lg:items-stretch xl:grid-cols-[360px_1fr]">
          <aside>
            <div className="overflow-hidden rounded-4xl border border-accent/20 shadow-[0_6px_16px_rgba(37,99,235,0.18)]">
              <Image
                src={profile.profileImage}
                alt={`${profile.name} portrait`}
                width={520}
                height={620}
                className="aspect-4/5 w-full object-cover"
              />
            </div>
          </aside>

          <div className="grid gap-8 lg:auto-rows-fr">
            {profile.aboutSections.map((section) => (
              <article key={section.label} className="flex flex-col justify-center border-l-2 border-accent/25 pl-5">
                <p className="text-lg font-semibold text-accent">{section.label}</p>
                <p className="mt-3 max-w-3xl text-base leading-8 text-secondary">{section.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <h3 className="text-xl font-bold text-primary">Education</h3>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {[...profile.educationItems].reverse().map((education) => (
              <article key={`${education.period}-${education.title}`} className="border-l-2 border-accent/25 pl-5">
                <p className="text-sm font-semibold text-accent">{education.period}</p>
                <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                  <p className="text-lg font-semibold leading-tight text-primary">{education.title}</p>
                  <p className="shrink-0 rounded-full bg-accent/10 px-3 py-1 text-sm font-semibold text-accent">
                    {education.cgpa}
                  </p>
                </div>
                <p className="mt-3 text-base leading-8 text-secondary">{education.institution}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

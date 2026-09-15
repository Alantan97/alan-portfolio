import Image from "next/image";
import { workExperience } from "@/data/experience";
import { ScrollReveal } from "./ScrollReveal";

export function Experience() {
  return (
    <section id="experience" className="bg-accent/3 py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="border-b border-border pb-5">
          <h2 className="text-3xl font-bold text-accent sm:text-4xl">Work Experience</h2>
        </div>

        <div className="mt-12 space-y-12">
          {workExperience.map((experience, index) => {
            const isAlternate = index % 2 === 1;

            return (
              <article
                key={`${experience.role}-${experience.company}`}
                className="grid items-center gap-10 lg:grid-cols-[1fr_0.82fr]"
              >
                <ScrollReveal delay={index * 80}>
                  <div className={isAlternate ? "lg:order-2" : undefined}>
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="text-2xl font-bold leading-tight text-primary">{experience.role}</h3>
                        <p className="mt-2 text-base font-semibold italic text-primary">{experience.company}</p>
                      </div>
                      <p className="shrink-0 rounded-full bg-accent/10 px-3 py-1 text-sm font-semibold text-accent">
                        {experience.period}
                      </p>
                    </div>

                    <ul className="mt-6 space-y-4 text-base leading-8 text-secondary">
                      {experience.highlights.map((highlight) => (
                        <li key={highlight} className="relative pl-5 before:absolute before:left-0 before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-secondary">
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={index * 80 + 100}>
                  <div className={isAlternate ? "lg:order-1" : undefined}>
                    <div className="overflow-hidden rounded-3xl border border-accent/20 bg-background shadow-[0_6px_16px_rgba(37,99,235,0.16)]">
                      <Image
                        src={experience.image}
                        alt={`${experience.role} at ${experience.company}`}
                        width={760}
                        height={560}
                        className="aspect-4/3 w-full object-cover"
                      />
                    </div>
                  </div>
                </ScrollReveal>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

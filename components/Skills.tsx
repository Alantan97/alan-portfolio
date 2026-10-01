import { skills } from "@/data/profile";
import { ScrollReveal } from "./ScrollReveal";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          title="Skills"
          description="The languages, frameworks, and tools I use to design, build, test, and ship software projects."
        />

        <dl className="mt-10 grid gap-x-12 gap-y-8 border-y border-border py-8 sm:grid-cols-2 lg:grid-cols-6">
          {skills.map((group, index) => (
            <ScrollReveal
              key={group.category}
              className={`${index < 3 ? "lg:col-span-2" : "lg:col-span-3"} ${index === skills.length - 1 ? "sm:col-span-2 lg:col-span-3" : ""}`}
              delay={index * 70}
            >
              <dt className="text-lg font-semibold text-primary">{group.category}</dt>
              <dd className="mt-2 text-base leading-8 text-secondary">{group.items.join(" • ")}</dd>
            </ScrollReveal>
          ))}
        </dl>
      </div>
    </section>
  );
}

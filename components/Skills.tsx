import { skills } from "@/data/profile";

export function Skills() {
  return (
    <section id="skills" className="bg-accent/3 py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-accent sm:text-4xl">Skills</h2>
          <p className="mt-4 text-base leading-8 text-secondary">
            The languages, frameworks, and tools I use to design, build, test, and ship software projects.
          </p>
        </div>

        <dl className="mt-10 grid gap-x-12 gap-y-8 border-y border-border py-8 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <div key={group.category}>
              <dt className="text-lg font-semibold text-primary">{group.category}</dt>
              <dd className="mt-2 text-base leading-8 text-secondary">{group.items.join(" • ")}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

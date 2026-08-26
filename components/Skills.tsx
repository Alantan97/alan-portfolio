import { skills } from "@/data/profile";

export function Skills() {
  return (
    <section id="skills" className="border-b border-accent/10 bg-accent/5 py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-accent sm:text-4xl">Skills</h2>
            <p className="mt-4 text-base leading-8 text-secondary">
              The languages, frameworks, and tools I use to design, build, test, and ship software projects.
            </p>
          </div>
          <p className="text-sm font-semibold text-secondary">{skills.length} skill areas</p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <article
              key={group.category}
              className="rounded-[2rem] bg-background p-6 shadow-[0_6px_14px_rgba(37,99,235,0.16)] transition hover:-translate-y-1 hover:shadow-[0_10px_22px_rgba(37,99,235,0.22)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">
                {group.category.slice(0, 2)}
              </div>
              <h3 className="mt-5 text-lg font-bold text-primary">{group.category}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full bg-accent/5 px-3 py-1 text-sm font-semibold text-secondary">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

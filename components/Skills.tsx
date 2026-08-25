import { skills } from "@/data/profile";

export function Skills() {
  return (
    <section id="skills" className="border-b border-accent/10 bg-accent/5 py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent">Skills</p>
            <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">Tools and technologies.</h2>
            <p className="mt-4 text-sm leading-6 text-secondary sm:text-base">
              The languages, frameworks, and tools I use to design, build, test, and ship software projects.
            </p>
          </div>
          <p className="text-sm font-semibold text-secondary">{skills.length} skill areas</p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <article
              key={group.category}
              className="rounded-[2rem] border border-accent/10 bg-background p-6 shadow-sm shadow-accent/5 transition hover:-translate-y-1 hover:border-accent hover:shadow-xl hover:shadow-accent/10"
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

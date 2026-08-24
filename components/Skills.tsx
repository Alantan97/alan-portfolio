import { skills } from "@/data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="border-b border-border bg-background py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent">Skills</p>
          <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">Tools and technologies.</h2>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <article key={group.category} className="rounded-lg border border-border bg-background p-6">
              <h3 className="text-lg font-bold text-primary">{group.category}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full bg-accent/5 px-3 py-1 text-sm font-medium text-secondary">
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

import { skills } from "@/data/profile";

const bentoCardClasses: Record<string, string> = {
  Languages: "lg:col-span-4",
  "Frontend & Backend": "lg:col-span-2",
  "AI & Data": "lg:col-span-2",
  Databases: "",
  Tools: "",
  "Game Development": "",
  Design: "",
};

export function Skills() {
  return (
    <section id="skills" className="bg-accent/3 py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-accent sm:text-4xl">Skills</h2>
          <p className="mt-4 text-base leading-8 text-secondary">
            The languages, frameworks, and tools I use to design, build, test, and ship software projects.
          </p>
        </div>

        <div className="mt-10 grid auto-rows-fr gap-5 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((group) => (
            <article
              key={group.category}
              className={`group flex h-full min-h-40 flex-col rounded-3xl border border-transparent bg-background p-6 shadow-[0_5px_12px_rgba(37,99,235,0.14)] transition hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-[0_8px_16px_rgba(37,99,235,0.18)] ${bentoCardClasses[group.category] ?? ""}`}
            >
              <h3 className="text-lg font-bold text-primary transition group-hover:text-accent">{group.category}</h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-accent/5 px-3 py-1 text-sm font-semibold text-secondary transition group-hover:bg-accent/10 group-hover:text-accent"
                  >
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

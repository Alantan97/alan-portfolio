import { experience } from "@/data/portfolio";

export function Timeline() {
  return (
    <section id="experience" className="border-b border-border bg-background py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent">Experience</p>
          <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">Activities and experience.</h2>
        </div>
        <div className="mt-10 space-y-6">
          {experience.map((item) => (
            <article key={`${item.title}-${item.date}`} className="grid gap-4 border-l-2 border-border pl-5 sm:grid-cols-[180px_1fr] sm:gap-8">
              <p className="text-sm font-bold text-accent">{item.date}</p>
              <div>
                <h3 className="text-lg font-bold text-primary">{item.title}</h3>
                <p className="mt-1 text-sm font-semibold text-secondary">{item.organization}</p>
                <p className="mt-3 text-sm leading-6 text-secondary">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

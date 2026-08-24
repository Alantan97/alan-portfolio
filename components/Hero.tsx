import { profile, socialLinks } from "@/data/profile";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-border bg-background bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      <div className="pointer-events-none absolute left-8 top-28 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />
      <div className="relative mx-auto flex min-h-[calc(100vh-81px)] max-w-6xl items-center px-5 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex rounded-full border border-accent/20 bg-accent/5 px-4 py-2 text-sm font-semibold text-accent">
            Open to internship opportunities
          </p>
          <p className="text-lg font-semibold text-secondary">Hi, I am</p>
          <h1 className="mt-2 max-w-3xl text-5xl font-bold leading-tight text-primary sm:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-4 text-3xl font-bold text-accent sm:text-5xl">{profile.title}</p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-secondary">{profile.summary}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-background transition hover:bg-accent-hover"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-sm font-semibold text-primary transition hover:border-accent hover:text-accent"
            >
              Contact Me
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-3" aria-label="Social links">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold text-secondary transition hover:border-accent hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

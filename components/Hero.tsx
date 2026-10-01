import Image from "next/image";
import { profile, socialLinks } from "@/data/profile";
import { ScrollReveal } from "./ScrollReveal";

const socialIcons: Record<string, string> = {
  GitHub: "/icons/social/github.png",
  LinkedIn: "/icons/social/linkedin.png",
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-border bg-background bg-[length:auto_100%] bg-left-bottom bg-no-repeat lg:bg-cover lg:bg-center"
      style={{ backgroundImage: "url('/images/backgrounds/bg.png')" }}
    >
      <div className="relative mx-auto flex min-h-[calc(100svh-8rem)] max-w-7xl items-start px-5 pb-14 pt-28 sm:min-h-[calc(100svh-5rem)] sm:px-6 sm:pt-32 lg:min-h-screen lg:items-center lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <ScrollReveal>
            <p className="text-xl font-semibold text-secondary sm:text-2xl">Hi, I am</p>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <h1 className="mt-2 max-w-3xl text-4xl font-bold leading-tight text-primary sm:text-6xl lg:text-7xl">
              {profile.name}
            </h1>
            <p className="mt-4 max-w-3xl text-2xl font-bold leading-tight text-accent sm:text-4xl lg:text-5xl">
              {profile.title}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={160}>
            <p className="mt-6 max-w-2xl text-base leading-8 text-secondary">{profile.summary}</p>
          </ScrollReveal>
          <ScrollReveal delay={240}>
            <div className="mt-7 grid grid-cols-2 gap-3 sm:mt-8 sm:flex sm:flex-row">
              <a
                href="#projects"
                className="col-span-2 inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background transition hover:bg-accent-hover sm:col-span-1"
              >
                View My Work
              </a>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-primary transition hover:border-accent hover:text-accent"
              >
                Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-primary transition hover:border-accent hover:text-accent"
              >
                Contact Me
              </a>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={320}>
            <div className="mt-6 flex flex-wrap gap-3 sm:mt-8" aria-label="Social links">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold text-secondary transition hover:border-accent hover:text-accent"
                >
                  {socialIcons[link.label] ? (
                    <Image src={socialIcons[link.label]} alt="" width={18} height={18} className="h-4.5 w-4.5" />
                  ) : null}
                  {link.label}
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

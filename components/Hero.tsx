import Image from "next/image";
import { profile, socialLinks } from "@/data/profile";

const socialIcons: Record<string, string> = {
  GitHub: "/github.png",
  LinkedIn: "/linkedin.png",
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-border bg-background bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      
      <div className="relative mx-auto flex min-h-[calc(100vh-81px)] max-w-6xl items-center px-5 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-2xl font-semibold text-secondary">Hi, I am</p>
          <h1 className="mt-2 max-w-3xl text-5xl font-bold leading-tight text-primary sm:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-4 text-3xl font-bold text-accent sm:text-5xl">{profile.title}</p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-secondary">{profile.summary}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background transition hover:bg-accent-hover"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-primary transition hover:border-accent hover:text-accent"
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
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold text-secondary transition hover:border-accent hover:text-accent"
              >
                {socialIcons[link.label] ? (
                  <Image src={socialIcons[link.label]} alt="" width={18} height={18} className="h-[18px] w-[18px]" />
                ) : null}
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { profile, socialLinks } from "@/data/profile";
import { ScrollReveal } from "./ScrollReveal";

const socialIcons: Record<string, string> = {
  GitHub: "/icons/social/github-white.png",
  LinkedIn: "/icons/social/linkedin-white.png",
};

export function Contact() {
  return (
    <section id="contact" className="bg-primary py-16 text-background sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:gap-20 lg:px-8 xl:gap-32">
        <ScrollReveal className="min-w-0">
          <div>
            <p className="w-fit rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-gray-200">
              Open to internship opportunities
            </p>
            <h2 className="mt-5 text-3xl font-bold text-background sm:text-4xl">Let&apos;s Connect</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-gray-300">
              Have an internship opportunity, project idea, or collaboration in mind? I&apos;d be happy to connect.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal className="min-w-0" delay={100}>
          <div className="min-w-0 rounded-3xl bg-white/5 p-5 sm:rounded-4xl sm:p-7">
            <p className="text-sm font-semibold text-gray-300">Email</p>
            <a className="mt-2 block break-all text-lg font-bold text-background transition hover:text-accent sm:text-xl" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>

            <div className="mt-8 space-y-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  className="flex min-w-0 items-center justify-between gap-4 rounded-2xl bg-white/5 px-4 py-4 text-sm font-semibold text-gray-300 transition hover:bg-white/10 hover:text-background"
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="flex shrink-0 items-center gap-3">
                    {socialIcons[link.label] ? (
                      <Image src={socialIcons[link.label]} alt="" width={20} height={20} className="h-5 w-5" />
                    ) : null}
                    {link.label}
                  </span>
                  <span className="min-w-0 truncate text-right text-accent">{link.href.replace(/^https?:\/\//, "")}</span>
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

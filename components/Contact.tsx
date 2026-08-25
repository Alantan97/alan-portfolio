import Image from "next/image";
import { profile, socialLinks } from "@/data/profile";

const socialIcons: Record<string, string> = {
  GitHub: "/github-white.png",
  LinkedIn: "/linkedin-white.png",
};

export function Contact() {
  return (
    <section id="contact" className="bg-primary pt-24 text-background">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 pb-20 sm:px-6 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:px-8">
        <div>
          <p className="w-fit rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-gray-200">
            Open to internship opportunities
          </p>
          <h2 className="mt-5 text-3xl font-bold text-background sm:text-4xl">Let&apos;s Connect</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-300">
            Have an internship opportunity, project idea, or collaboration in mind? I&apos;d be happy to connect.
          </p>
        </div>

        <div className="rounded-[2rem] bg-white/5 p-7">
          <p className="text-sm font-semibold text-gray-300">Email</p>
          <p className="mt-2 break-words text-xl font-bold text-background">
            {profile.email}
          </p>

          <div className="mt-8 space-y-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                className="flex items-center justify-between gap-4 rounded-2xl bg-white/5 px-4 py-4 text-sm font-semibold text-gray-300 transition hover:bg-white/10 hover:text-background"
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                <span className="flex items-center gap-3">
                  {socialIcons[link.label] ? (
                    <Image src={socialIcons[link.label]} alt="" width={20} height={20} className="h-5 w-5" />
                  ) : null}
                  {link.label}
                </span>
                <span className="truncate text-right text-accent">{link.href.replace(/^https?:\/\//, "")}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

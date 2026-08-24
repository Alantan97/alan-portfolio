import { profile, socialLinks } from "@/data/profile";

export function Contact() {
  return (
    <section id="contact" className="bg-primary py-24 text-background">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent">Contact</p>
          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">Let&apos;s connect.</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-300">
            Use this section for internship applications, collaboration requests, or a simple way for people to reach you.
          </p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
          <dl className="space-y-5">
            <div>
              <dt className="text-sm font-semibold text-gray-300">Email</dt>
              <dd className="mt-1">
                <a className="font-bold text-accent hover:text-accent-hover" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
              </dd>
            </div>
            {socialLinks.map((link) => (
              <div key={link.label}>
                <dt className="text-sm font-semibold text-gray-300">{link.label}</dt>
                <dd className="mt-1">
                  <a className="font-bold text-accent hover:text-accent-hover" href={link.href} target="_blank" rel="noreferrer">
                    {link.href.replace(/^https?:\/\//, "")}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

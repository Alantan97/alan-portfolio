import Image from "next/image";
import { profile, skills } from "@/data/profile";

const details = [
  { label: "Education", value: profile.education },
  { label: "Location", value: profile.location },
  { label: "Current Focus", value: profile.currentFocus },
  { label: "Interests", value: profile.interests },
];

export function About() {
  return (
    <section id="about" className="border-b border-border bg-background py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent">About</p>
          <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">A concise introduction.</h2>
        </div>
        <div className="mt-12 grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute inset-x-5 bottom-0 h-64 rounded-full bg-accent/10" />
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-accent/5 p-3">
              <Image
                src={profile.profileImage}
                alt={`${profile.name} portrait`}
                width={520}
                height={620}
                className="aspect-[4/5] w-full rounded-[1.5rem] object-cover"
              />
            </div>
          </div>
          <div>
            <p className="text-lg leading-8 text-secondary">{profile.about}</p>
            <dl className="mt-8 grid gap-4 sm:grid-cols-2">
              {details.map((detail) => (
                <div key={detail.label} className="rounded-2xl border border-border p-5">
                  <dt className="text-sm font-semibold text-primary">{detail.label}</dt>
                  <dd className="mt-1 text-sm leading-6 text-secondary">{detail.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {skills.map((group) => (
                <article key={group.category} className="rounded-2xl border border-border p-5">
                  <h3 className="text-sm font-semibold text-primary">{group.category}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="rounded-full bg-accent/5 px-3 py-1 text-xs font-semibold text-secondary">
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

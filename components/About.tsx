import Image from "next/image";
import { profile } from "@/data/profile";

const details = [
  { label: "Education", value: profile.education },
  { label: "Location", value: profile.location },
  { label: "Current Focus", value: profile.currentFocus },
  { label: "Interests", value: profile.interests },
];

export function About() {
  return (
    <section id="about" className="border-b border-accent/10 bg-accent/5 py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_380px] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent">About</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-bold leading-tight text-primary sm:text-4xl">
              Building practical software with a focus on clarity, usability, and maintainable code.
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-secondary">{profile.about}</p>

            <dl className="mt-10 grid gap-x-8 gap-y-6 border-y border-border py-8 sm:grid-cols-2">
              {details.map((detail) => (
                <div key={detail.label}>
                  <dt className="text-sm font-bold text-primary">{detail.label}</dt>
                  <dd className="mt-2 text-sm leading-6 text-secondary">{detail.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-accent/10 bg-accent/5 p-3">
            <Image
              src={profile.profileImage}
              alt={`${profile.name} portrait`}
              width={520}
              height={620}
              className="aspect-[4/5] w-full rounded-[1.5rem] object-contain object-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

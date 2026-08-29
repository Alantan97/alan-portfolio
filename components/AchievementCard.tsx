import Image from "next/image";
import type { Achievement } from "@/data/achievements";

type AchievementCardProps = {
  achievement: Achievement;
};

export function AchievementCard({ achievement }: AchievementCardProps) {
  const content = (
    <article className="group h-full rounded-3xl border border-transparent bg-background p-7 shadow-[0_6px_14px_rgba(37,99,235,0.16)] transition hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_10px_22px_rgba(37,99,235,0.22)]">
      {achievement.image ? (
        <div className="mb-5 overflow-hidden rounded-md">
          <Image
            src={achievement.image}
            alt={`${achievement.title} visual`}
            width={640}
            height={360}
            className="aspect-video w-full object-cover transition duration-300 group-hover:scale-[1.03]"
          />
        </div>
      ) : (
        <div className="mb-5 flex aspect-video w-full items-center justify-center rounded-md bg-accent/5">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent">
            <svg
              aria-hidden="true"
              className="h-8 w-8"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
              <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
              <path d="M4 22h16" />
              <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
              <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
              <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
            </svg>
          </div>
        </div>
      )}
      <div>
        <div className="flex items-start justify-between gap-5">
          <h3 className="whitespace-pre-line text-xl font-bold text-primary transition group-hover:text-accent">{achievement.title}</h3>
          <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-bold text-accent">{achievement.year}</span>
        </div>

        <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
          <p className="text-lg font-semibold leading-tight text-accent">{achievement.organization}</p>
          {achievement.place ? (
            <p className="max-w-32 text-sm font-semibold leading-tight text-primary sm:text-right">{achievement.place}</p>
          ) : null}
        </div>
      </div>
      <p className="mt-4 text-base leading-8 text-secondary">{achievement.description}</p>
    </article>
  );

  if (!achievement.link) {
    return content;
  }

  return (
    <a href={achievement.link} className="block h-full" aria-label={`View ${achievement.title}`}>
      {content}
    </a>
  );
}

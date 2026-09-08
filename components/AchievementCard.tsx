import Image from "next/image";
import type { Achievement } from "@/data/achievements";

type AchievementCardProps = {
  achievement: Achievement;
  onImageOpen?: (achievement: Achievement) => void;
};

function getAchievementResultParts(result: string) {
  const [rank, ...levelParts] = result.split("·").map((part) => part.trim());

  return {
    rank,
    level: levelParts.join(" · "),
  };
}

export function AchievementCard({ achievement, onImageOpen }: AchievementCardProps) {
  const { rank, level } = getAchievementResultParts(achievement.organization);

  const content = (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-transparent bg-background shadow-[0_5px_12px_rgba(37,99,235,0.18)] transition hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_8px_16px_rgba(37,99,235,0.22)]">
      {achievement.image ? (
        <button
          type="button"
          onClick={() => onImageOpen?.(achievement)}
          className="relative m-3 mb-0 block overflow-hidden rounded-[1.35rem] bg-accent/10 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4"
          aria-label={`Open ${achievement.title.replace("\n", " ")} image`}
        >
          <Image
            src={achievement.image}
            alt={`${achievement.title} visual`}
            width={640}
            height={360}
            className={`h-44 w-full object-cover transition duration-300 group-hover:scale-[1.03] sm:h-52 ${
              achievement.imagePosition ?? "object-center"
            }`}
          />
          <span className="absolute inset-0 flex items-center justify-center bg-primary/25 opacity-0 transition group-hover:opacity-100 group-focus-within:opacity-100">
            <span className="rounded-full bg-background px-4 py-2 text-sm font-bold text-accent shadow-[0_8px_18px_rgba(17,24,39,0.16)]">
              View Image
            </span>
          </span>
        </button>
      ) : (
        <div className="m-3 mb-0 flex h-44 items-center justify-center rounded-[1.35rem] bg-accent/5 sm:h-52">
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
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <p className="text-2xl font-bold leading-tight text-accent transition group-hover:text-accent-hover">
            {rank}
          </p>
          {level ? (
            <p className="shrink-0 rounded-full bg-accent/10 px-3 py-1 text-sm font-semibold leading-tight text-accent">
              {level}
            </p>
          ) : null}
        </div>

        <h3 className="mt-3 whitespace-pre-line text-lg font-semibold leading-snug text-primary transition group-hover:text-accent">
          {achievement.title}
        </h3>

        <div className="mt-auto flex items-end justify-between gap-4 pt-5">
          {achievement.place ? (
            <p className="w-fit rounded-full bg-accent/5 px-3 py-1 text-sm font-semibold leading-tight text-secondary">
              {achievement.place}
            </p>
          ) : (
            <span aria-hidden="true" />
          )}
          <span className="shrink-0 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
            {achievement.year}
          </span>
        </div>
      </div>
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

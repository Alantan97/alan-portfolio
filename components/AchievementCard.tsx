import Image from "next/image";
import type { Achievement } from "@/data/achievements";

type AchievementCardProps = {
  achievement: Achievement;
};

export function AchievementCard({ achievement }: AchievementCardProps) {
  const content = (
    <article className="h-full rounded-3xl border border-border bg-background p-7 transition hover:-translate-y-1 hover:border-accent hover:shadow-xl hover:shadow-border/70">
      {achievement.image ? (
        <Image
          src={achievement.image}
          alt={`${achievement.title} visual`}
          width={640}
          height={360}
          className="mb-5 aspect-video w-full rounded-md object-cover"
        />
      ) : null}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold text-primary">{achievement.title}</h3>
          <p className="mt-1 text-sm font-semibold text-accent">{achievement.organization}</p>
        </div>
        <span className="shrink-0 rounded-full bg-accent/5 px-3 py-1 text-xs font-bold text-secondary">
          {achievement.year}
        </span>
      </div>
      <p className="mt-4 text-sm leading-6 text-secondary">{achievement.description}</p>
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

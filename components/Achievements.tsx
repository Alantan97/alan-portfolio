import { achievements } from "@/data/achievements";
import { AchievementCard } from "./AchievementCard";

export function Achievements() {
  return (
    <section id="achievements" className="border-b border-border bg-background py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-accent sm:text-4xl">Achievements</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {achievements.map((achievement) => (
            <AchievementCard key={`${achievement.title}-${achievement.year}`} achievement={achievement} />
          ))}
        </div>
      </div>
    </section>
  );
}

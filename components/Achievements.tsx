"use client";

import { useState } from "react";
import { achievements } from "@/data/achievements";
import { AchievementCard } from "./AchievementCard";

const achievementsPerPage = 2;

export function Achievements() {
  const [currentPage, setCurrentPage] = useState(0);
  const [slideDirection, setSlideDirection] = useState<"next" | "previous">("next");
  const pageCount = Math.ceil(achievements.length / achievementsPerPage);
  const firstAchievementIndex = currentPage * achievementsPerPage;
  const visibleAchievements = achievements.slice(firstAchievementIndex, firstAchievementIndex + achievementsPerPage);
  const achievementGridClassName =
    visibleAchievements.length === 1 ? "mx-auto mt-10 grid max-w-2xl gap-6" : "mt-10 grid gap-6 md:grid-cols-2";

  const goToPage = (page: number) => {
    if (page === currentPage) {
      return;
    }

    setSlideDirection(page > currentPage ? "next" : "previous");
    setCurrentPage(page);
  };

  const goToPreviousPage = () => {
    goToPage(Math.max(currentPage - 1, 0));
  };

  const goToNextPage = () => {
    goToPage(Math.min(currentPage + 1, pageCount - 1));
  };

  return (
    <section id="achievements" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-accent sm:text-4xl">Achievements</h2>
        </div>
        <div className="-mx-3 -mb-6 overflow-hidden px-6 pb-6">
          <div
            key={currentPage}
            className={`${achievementGridClassName} ${
              slideDirection === "next" ? "achievements-page-next" : "achievements-page-previous"
            }`}
          >
            {visibleAchievements.map((achievement) => (
              <AchievementCard key={`${achievement.title}-${achievement.year}`} achievement={achievement} />
            ))}
          </div>
        </div>
        {pageCount > 1 ? (
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              type="button"
              onClick={goToPreviousPage}
              disabled={currentPage === 0}
              className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-primary transition hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-border disabled:hover:text-primary"
            >
              Previous
            </button>
            <div className="flex items-center gap-2" aria-label="Achievement pages">
              {Array.from({ length: pageCount }, (_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => goToPage(index)}
                  className={`h-2.5 rounded-full transition ${
                    currentPage === index ? "w-8 bg-accent" : "w-2.5 bg-accent/20 hover:bg-accent/40"
                  }`}
                  aria-label={`Go to achievements page ${index + 1}`}
                  aria-current={currentPage === index ? "page" : undefined}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={goToNextPage}
              disabled={currentPage === pageCount - 1}
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-background transition hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-accent"
            >
              Next
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}

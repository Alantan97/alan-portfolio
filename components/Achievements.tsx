"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { Achievement } from "@/data/achievements";
import { achievements } from "@/data/achievements";
import { AchievementCard } from "./AchievementCard";
import { ScrollReveal } from "./ScrollReveal";

const achievementsPerPage = 2;

export function Achievements() {
  const [currentPage, setCurrentPage] = useState(0);
  const [slideDirection, setSlideDirection] = useState<"next" | "previous">("next");
  const [openAchievement, setOpenAchievement] = useState<Achievement | null>(null);
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

  useEffect(() => {
    if (!openAchievement) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenAchievement(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [openAchievement]);

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
            {visibleAchievements.map((achievement, index) => (
              <ScrollReveal key={`${achievement.title}-${achievement.year}`} delay={index * 90}>
                <AchievementCard achievement={achievement} onImageOpen={setOpenAchievement} />
              </ScrollReveal>
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
      {openAchievement?.image ? (
        <div
          className="project-modal-backdrop fixed inset-0 z-[100] flex items-center justify-center bg-primary/75 px-4 py-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`${openAchievement.title.replace("\n", " ")} image preview`}
          onMouseDown={() => setOpenAchievement(null)}
        >
          <div
            className="project-modal-panel relative w-full max-w-5xl"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpenAchievement(null)}
              className="absolute -right-3 -top-3 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-background text-accent shadow-[0_8px_18px_rgba(17,24,39,0.12)] ring-1 ring-accent/15 transition hover:bg-accent hover:text-background sm:-right-4 sm:-top-4 sm:h-12 sm:w-12"
              aria-label="Close achievement image"
            >
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
            <div className="overflow-hidden rounded-4xl shadow-[0_18px_45px_rgba(17,24,39,0.18)]">
              <Image
                src={openAchievement.image}
                alt={`${openAchievement.title} visual`}
                width={1400}
                height={900}
                className="max-h-[82vh] w-full object-contain"
                priority
              />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

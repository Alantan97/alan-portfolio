"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { Achievement } from "@/data/achievements";
import { achievements } from "@/data/achievements";
import { AchievementCard } from "./AchievementCard";
import { ScrollReveal } from "./ScrollReveal";

export function Achievements() {
  const [openAchievement, setOpenAchievement] = useState<Achievement | null>(null);

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
        <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement, index) => (
            <ScrollReveal key={`${achievement.title}-${achievement.year}`} delay={index * 80}>
              <AchievementCard achievement={achievement} onImageOpen={setOpenAchievement} />
            </ScrollReveal>
          ))}
        </div>
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

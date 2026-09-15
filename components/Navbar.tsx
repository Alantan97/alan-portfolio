"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { profile } from "@/data/profile";

const navItems = [
  { label: "Projects", href: "/#projects", sectionId: "projects" },
  { label: "Experience", href: "/#experience", sectionId: "experience" },
  { label: "Skills", href: "/#skills", sectionId: "skills" },
  { label: "Achievements", href: "/#achievements", sectionId: "achievements" },
  { label: "About", href: "/#about", sectionId: "about" },
  { label: "Contact", href: "/#contact", sectionId: "contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("");
  const [isAtTop, setIsAtTop] = useState(true);
  const manualScrollTimeout = useRef<number | null>(null);
  const isManualScroll = useRef(false);

  useEffect(() => {
    if (pathname !== "/") {
      return;
    }

    const sectionIds = ["projects", "experience", "skills", "achievements", "about", "contact"];
    let animationFrame = 0;

    const updateActiveSection = () => {
      if (isManualScroll.current) {
        return;
      }

      const headerOffset = 140;
      const scrollBottom = window.innerHeight + window.scrollY;
      const pageBottom = document.documentElement.scrollHeight - 4;
      let currentSection = "";

      if (scrollBottom >= pageBottom) {
        setActiveSection("contact");
        return;
      }

      for (const sectionId of sectionIds) {
        const section = document.getElementById(sectionId);

        if (section && section.getBoundingClientRect().top <= headerOffset) {
          currentSection = sectionId;
        }
      }

      setActiveSection(currentSection);
    };

    const requestActiveSectionUpdate = () => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(updateActiveSection);
    };

    const updateNavbarSurface = () => {
      setIsAtTop(window.scrollY <= 8);
    };

    requestActiveSectionUpdate();
    updateNavbarSurface();
    window.addEventListener("scroll", requestActiveSectionUpdate, { passive: true });
    window.addEventListener("scroll", updateNavbarSurface, { passive: true });
    window.addEventListener("hashchange", requestActiveSectionUpdate);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      if (manualScrollTimeout.current) {
        window.clearTimeout(manualScrollTimeout.current);
      }
      window.removeEventListener("scroll", requestActiveSectionUpdate);
      window.removeEventListener("scroll", updateNavbarSurface);
      window.removeEventListener("hashchange", requestActiveSectionUpdate);
    };
  }, [pathname]);

  const isHomePage = pathname === "/";

  const scrollToTop = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!isHomePage) {
      return;
    }

    event.preventDefault();
    setActiveSection("");
    window.history.pushState(null, "", "/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    if (!isHomePage) {
      return;
    }

    const section = document.getElementById(sectionId);

    if (!section) {
      return;
    }

    event.preventDefault();
    setActiveSection(sectionId);
    isManualScroll.current = true;

    if (manualScrollTimeout.current) {
      window.clearTimeout(manualScrollTimeout.current);
    }

    manualScrollTimeout.current = window.setTimeout(() => {
      isManualScroll.current = false;
      window.dispatchEvent(new Event("scroll"));
    }, 900);

    window.history.pushState(null, "", `#${sectionId}`);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition duration-300 ${
        isHomePage && isAtTop
          ? "bg-transparent shadow-none"
          : "bg-background/95 shadow-[0_4px_14px_rgba(37,99,235,0.10)] backdrop-blur"
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Link href="/" onClick={scrollToTop} className="flex items-center gap-3">
          <Image
            src={profile.profile}
            alt={`${profile.name} portrait`}
            width={34}
            height={34}
            className="h-8.5 w-8.5 rounded-full object-cover ring-2 ring-accent"
          />
          <span className="text-lg font-semibold text-primary">{profile.name}</span>
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={scrollToSection(item.sectionId)}
              className={`rounded-full px-3 py-2 text-sm font-medium transition hover:bg-accent/5 hover:text-accent ${
                isHomePage && activeSection === item.sectionId
                  ? "bg-accent/10 text-accent"
                  : "text-secondary"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Link
          href={profile.resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-background transition hover:bg-accent-hover"
        >
          Resume
        </Link>
      </nav>
    </header>
  );
}

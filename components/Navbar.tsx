"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent } from "react";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { label: "Projects", href: "/#projects", sectionId: "projects" },
  { label: "Skills", href: "/#skills", sectionId: "skills" },
  { label: "Achievements", href: "/#achievements", sectionId: "achievements" },
  { label: "About", href: "/#about", sectionId: "about" },
];

export function Navbar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("");
  const manualScrollTimeout = useRef<number | null>(null);
  const isManualScroll = useRef(false);

  useEffect(() => {
    if (pathname !== "/") {
      return;
    }

    const sectionIds = ["projects", "skills", "achievements", "about", "contact"];
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

    requestActiveSectionUpdate();
    window.addEventListener("scroll", requestActiveSectionUpdate, { passive: true });
    window.addEventListener("hashchange", requestActiveSectionUpdate);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      if (manualScrollTimeout.current) {
        window.clearTimeout(manualScrollTimeout.current);
      }
      window.removeEventListener("scroll", requestActiveSectionUpdate);
      window.removeEventListener("hashchange", requestActiveSectionUpdate);
    };
  }, [pathname]);

  const isHomePage = pathname === "/";
  const isProjectsPage = pathname.startsWith("/projects");

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
    <header className="sticky top-0 z-50 bg-background/95 shadow-[0_4px_14px_rgba(37,99,235,0.10)] backdrop-blur">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-5 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Link href="/" onClick={scrollToTop} className="text-lg font-bold uppercase text-primary">
          ALAN
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={scrollToSection(item.sectionId)}
              className={`rounded-full px-3 py-2 text-sm font-medium transition hover:bg-accent/5 hover:text-accent ${
                (isHomePage && activeSection === item.sectionId) || (isProjectsPage && item.sectionId === "projects")
                  ? "bg-accent/10 text-accent"
                  : "text-secondary"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Link
          href="/#contact"
          onClick={scrollToSection("contact")}
          className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-background transition hover:bg-accent-hover"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}

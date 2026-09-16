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
  const [highlightStyle, setHighlightStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const navItemsRef = useRef<HTMLDivElement | null>(null);
  const navLinkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
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

  useEffect(() => {
    const navItemsElement = navItemsRef.current;
    const activeLinkElement = navLinkRefs.current[activeSection];

    if (!isHomePage || !activeSection || !navItemsElement || !activeLinkElement) {
      setHighlightStyle((currentStyle) => ({ ...currentStyle, opacity: 0 }));
      return;
    }

    const updateHighlight = () => {
      const navItemsRect = navItemsElement.getBoundingClientRect();
      const activeLinkRect = activeLinkElement.getBoundingClientRect();

      setHighlightStyle({
        left: activeLinkRect.left - navItemsRect.left,
        width: activeLinkRect.width,
        opacity: 1,
      });
    };

    updateHighlight();

    const resizeObserver = new ResizeObserver(updateHighlight);
    resizeObserver.observe(navItemsElement);
    resizeObserver.observe(activeLinkElement);
    window.addEventListener("resize", updateHighlight);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateHighlight);
    };
  }, [activeSection, isHomePage]);

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
        <div ref={navItemsRef} className="relative hidden items-center gap-1 md:flex">
          <span
            aria-hidden="true"
            className="absolute top-0 h-full rounded-full bg-accent/10 transition-[left,width,opacity] duration-300 ease-out"
            style={{
              left: highlightStyle.left,
              width: highlightStyle.width,
              opacity: highlightStyle.opacity,
            }}
          />
          {navItems.map((item) => (
            <Link
              key={item.href}
              ref={(element) => {
                navLinkRefs.current[item.sectionId] = element;
              }}
              href={item.href}
              onClick={scrollToSection(item.sectionId)}
              className={`relative z-10 rounded-full px-3 py-2 text-sm font-medium transition hover:text-accent ${
                isHomePage && activeSection === item.sectionId
                  ? "text-accent"
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

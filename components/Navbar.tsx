import Link from "next/link";

const navItems = [
  { label: "Projects", href: "/#projects" },
  { label: "Achievements", href: "/#achievements" },
  { label: "About", href: "/#about" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-5 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Link href="/" className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
          ALAN
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-secondary transition hover:bg-accent/5 hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Link
          href="/#contact"
          className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-background transition hover:bg-accent-hover"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}

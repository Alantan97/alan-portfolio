import Link from "next/link";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-primary px-5 py-10 text-sm text-gray-300 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <p>© 2026 {profile.name}. All rights reserved.</p>
        <Link href="/#home" className="font-semibold text-background hover:text-accent">
          Back to top
        </Link>
      </div>
    </footer>
  );
}

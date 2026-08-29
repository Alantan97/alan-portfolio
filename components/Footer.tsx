import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="bg-primary px-5 pb-10 text-sm text-gray-300 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center pt-8 text-center">
        <div>
          <p className="font-bold text-background">{profile.name}</p>
          <p className="mt-1">© 2026 All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

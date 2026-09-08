import Image from "next/image";
import { profile } from "@/data/profile";

export function Footer() {
  const currentEducation = profile.educationItems.find((education) => education.period === "2023 - 2027");
  const degreeLabel = currentEducation?.title.replace("Bachelor of ", "") ?? profile.title;

  return (
    <footer className="bg-primary pb-8 text-sm text-gray-300">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Image
              src={profile.profile}
              alt={`${profile.name} portrait`}
              width={36}
              height={36}
              className="h-9 w-9 rounded-full object-cover ring-2 ring-accent"
            />
            <p className="text-sm leading-6 text-gray-400">
              <span>{profile.name}</span>
              <span className="mx-2 text-gray-600">·</span>
              <span>{degreeLabel}</span>
            </p>
          </div>

          <p className="text-sm text-gray-500">© {profile.name} 2026 · Strive to be Better</p>
        </div>
      </div>
    </footer>
  );
}

export type Achievement = {
  title: string;
  organization: string;
  place?: string;
  year: string;
  description: string;
  image?: string;
  imagePosition?: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    title: "Certiport's Adobe Certified Professional\nWorld Championship 2024",
    organization: "7th Place · International",
    place: "Anaheim, California, USA",
    year: "2024",
    description:
      "Ranked 7th among competitors from 47 countries while representing Malaysia.",
    image: "/images/achievements/7th place.jpg",
  },
  {
    title: "Certiport's Microsoft Office Specialist\nWorld Championship 2025",
    organization: "Finalist · International",
    place: "Orlando, Florida, USA",
    year: "2025",
    description:
      "Represented Malaysia as a finalist in the Certiport's Microsoft Office Specialist World Championship 2025.",
    image: "/images/achievements/finalist mos.JPG",
  },
  {
    title: "CCC's Adobe Certified Professional\nMalaysia National Championship 2024",
    organization: "2nd Place · National",
    place: "Lexis, Kuala Lumpur",
    year: "2024",
    description:
      "Secured 2nd place nationally and qualified to represent Malaysia at the Adobe Certified Professional World Championship 2024.",
    image: "/images/achievements/2nd place.jpg",
  },
  {
    title: "CCC's Microsoft Office Specialist\nMalaysia National Championship 2025",
    organization: "3rd Place · National",
    place: "UOC, Cyberjaya",
    year: "2025",
    description:
      "Secured 3rd place nationally and qualified to represent Malaysia at the Microsoft Office Specialist World Championship 2025.",
    image: "/images/achievements/mos 3rd.jpg",
  },
  {
    title: "Diploma Innovative & Creative Project Exhibition 2023",
    organization: "Best Project & Best Poster· University",
    place: "UPSI, Tanjung Malim",
    year: "2023",
    description: "",
    image: "/images/achievements/fyp.png",
  },
  {
    title: "Micro-Credentials Education Summit 2025",
    organization: "Panelist · National",
    place: "UOC, Cyberjaya",
    year: "2025",
    description:
      "Invited as a panelist for #CHAMPTALK: From Champion to Champion at the Micro-Credentials Education Summit 2025.",
    image: "/images/activities/talk1.jpeg",
  },
  {
    title: "Champion's Launchpad",
    organization: "Panelist · National",
    place: "Sunway University, Selangor",
    year: "2025",
    description:
      "Invited as a panelist for Journey to Champion during Champion's Launchpad, sharing experience from the ACP World Championship.",
    image: "/images/activities/talk2.jpeg",
    imagePosition: "object-[50%_0%]",
  },
  {
    title: "Malaysia Digital Content Festival",
    organization: "Panelist · National",
    place: "KLCC, Kuala Lumpur",
    year: "2024",
    description:
      "Shared my journey and experiences in creative competitions, including the preparation, challenges, and lessons learned from representing Malaysia on the international stage.",
    image: "/images/activities/talk3.jpeg",
    imagePosition: "object-[50%_80%]",
  },
  {
    title: "Adobe Creative Connect",
    organization: "Demonstrator · National",
    place: "CCEC Nexus, Bangsar South",
    year: "2026",
    description:
      "Demonstrate Adobe Firefly and Adobe Express to students and teachers during the Adobe Creative Connect event.",
    image: "/images/activities/demo.jpeg",
  },
];

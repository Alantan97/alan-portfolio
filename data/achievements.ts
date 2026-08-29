export type Achievement = {
  title: string;
  organization: string;
  place?: string;
  year: string;
  description: string;
  image?: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    title: "Certiport's Adobe Certified Professional\nWorld Championship 2024",
    organization: "7th Place · International",
    place: "California, USA",
    year: "2024",
    description:
      "Ranked 7th among competitors from 47 countries while representing Malaysia.",
    image: "/7th place.jpg",
  },
  {
    title: "Certiport's Microsoft Office Specialist\nWorld Championship 2025",
    organization: "Finalist · International",
    place: "Florida, USA",
    year: "2025",
    description:
      "Represented Malaysia as a finalist in the Certiport's Microsoft Office Specialist World Championship 2025.",
    image: "/finalist mos.jpg",
  },
  {
    title: "CCC's Adobe Certified Professional\nMalaysia National Championship 2024",
    organization: "2nd Place · National",
    place: "Malaysia",
    year: "2024",
    description:
      "Secured 2nd place nationally and qualified to represent Malaysia at the Adobe Certified Professional World Championship 2024.",
    image: "/2nd place.jpg",
  },
  {
    title: "CCC's Microsoft Office Specialist\nMalaysia National Championship 2025",
    organization: "3rd Place · National",
    place: "Malaysia",
    year: "2025",
    description:
      "Secured 3rd place nationally and qualified to represent Malaysia at the Microsoft Office Specialist World Championship 2025.",
    image: "/mos 3rd.jpg",
  },
];

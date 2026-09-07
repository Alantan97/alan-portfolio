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
  {
    title: "#CHAMPTALK\nStars Are Born: From Champion to Champion",
    organization: "Panelist · MCES 2025",
    place: "University of Cyberjaya",
    year: "2025",
    description:
      "Invited as a panelist for #CHAMPTALK: From Champion to Champion at the Micro-Credentials Education Summit 2025.",
    image: "/talk1.jpeg",
  },
  {
    title: "Journey to Champion",
    organization: "Panelist · Champion's Launchpad",
    place: "Sunway University",
    year: "2025",
    description:
      "Invited as a panelist for Journey to Champion during Champion's Launchpad, sharing experience from the ACP World Championship.",
    image: "/talk2.jpeg",
    imagePosition: "object-[50%_0%]",
  },
  {
    title: "Vision to Victory: Shaping Creative Arena",
    organization: "Panelist · MYDCF",
    place: "Kuala Lumpur",
    year: "2024",
    description:
      "Shared my journey and experiences in creative competitions, including the preparation, challenges, and lessons learned from representing Malaysia on the international stage.",
    image: "/talk3.jpeg",
    imagePosition: "object-[50%_80%]",
  },
  {
    title: "Adobe Firely and Adobe Express",
    organization: "Demonstrator · Adobe Creative Connect",
    place: "CCEC Nexus",
    year: "2026",
    description:
      "Demonstrate Adobe Firefly and Adobe Express to students and teachers during the Adobe Creative Connect event.",
    image: "/demo.jpeg",
  },
];

export type Achievement = {
  title: string;
  organization: string;
  year: string;
  description: string;
  image?: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    title: "Achievement Placeholder",
    organization: "University, Club, or Event Name",
    year: "2026",
    description:
      "Replace this with a real award, certification, competition result, scholarship, or academic milestone when you are ready.",
  },
  {
    title: "Certification Placeholder",
    organization: "Learning Platform or Issuing Organization",
    year: "2026",
    description:
      "Use this space for a verified course, workshop, or certificate that is relevant to internship applications.",
    link: "#",
  },
];

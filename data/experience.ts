export type WorkExperience = {
  role: string;
  company: string;
  period: string;
  image: string;
  highlights: string[];
};

export const workExperience: WorkExperience[] = [
  {
    role: "Game Developer Intern",
    company: "Noels IT Solution Sdn Bhd",
    period: "Jun 2023 - Jul 2023",
    image: "/images/experience/intern.jpeg",
    highlights: [
      "Led the development of Busted!!, a hyper-casual mobile game built with Unity and C#, implementing touch-based gameplay mechanics and publishing the game on the company website and Google Play Store.",
      "Developed Spell It Out, a casual PC typing game with 3 progressive levels, where players type falling words before they reach the ground to earn points.",
      "Redesigned the company website using Wix, improving content organization, visual consistency, and overall user experience while integrating access to the company's published games.",
    ],
  },
];

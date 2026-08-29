export type SocialLink = {
  label: string;
  href: string;
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type TimelineItem = {
  title: string;
  organization: string;
  date: string;
  description: string;
};

export type EducationItem = {
  period: string;
  title: string;
  institution: string;
  cgpa: string;
};

export const profile = {
  name: "Alan Tan",
  title: "Software Engineering Student",
  email: "alant4607@gmail.com",
  location: "Malaysia",
  education: "Bachelor of Software Engineering, Sultan Idris Education University",
  educationItems: [
    {
      period: "2021 - 2023",
      title: "Diploma in Game Design & Development",
      institution: "Sultan Idris Education University",
      cgpa: "CGPA 3.92",
    },
    {
      period: "2023 - 2027",
      title: "Bachelor of Software Engineering",
      institution: "Sultan Idris Education University",
      cgpa: "Current CGPA 3.84",
    },
  ] satisfies EducationItem[],
  currentFocus: "Web applications, mobile apps, AI-powered systems, and user experience.",
  interests: "Software engineering internship opportunities.",
  summary:
    "I build software products with a focus on full-stack development, AI, and user experience.",
  availability: "Open to internship opportunities",
  focusAreas: [
    "Full-Stack Development",
    "AI & Intelligent Systems",
    "UI/UX Design",
    "Mobile Development",
  ],
  aboutSections: [
    {
      label: "01 · Story",
      text: "I'm a Software Engineering student who enjoys building practical digital products and solving real problems through technology.",
    },
    {
      label: "02 · What I Build",
      text: "I develop web and mobile applications across full-stack development, AI, and UI/UX, with experience designing interfaces and implementing the systems behind them.",
    },
    {
      label: "03 · How I Work",
      text: "I learn best by building, experimenting, and improving through real projects. I enjoy turning ideas into working products and understanding how each part of a system fits together.",
    },
  ],
  profileImage: "/speaker.jpg",
  resumeUrl: "#",
};

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/Alantan97" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/alan-txn" },
];

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["Python", "C#", "C++", "Dart", "PHP", "SQL", "JavaScript", "TypeScript", "Java"],
  },
  {
    category: "Frontend & Backend",
    items: ["HTML", "CSS", "React", "Next.js", "Tailwind CSS", "Flutter", "Laravel"],
  },
  {
    category: "AI & Data",
    items: ["Scikit-learn", "LightGBM", "DEAP", "Pandas", "NumPy"],
  },
  {
    category: "Databases",
    items: ["MySQL", "Firebase"],
  },
  {
    category: "Dev & Design Tools",
    items: ["Git", "GitHub", "Figma", "Photoshop"],
  },
  {
    category: "Game Development",
    items: ["Unity"],
  },
];

export const experience: TimelineItem[] = [
  {
    title: "Software Engineering Student",
    organization: "Sultan Idris Education University",
    date: "2024 - Present",
    description:
      "Studying software design, programming, databases, and development practices through coursework and projects.",
  },
  {
    title: "Committee Member Placeholder",
    organization: "Student Club or Society",
    date: "2025 - Present",
    description:
      "Replace this with a real activity, leadership role, volunteer work, hackathon team, or technical community involvement.",
  },
  {
    title: "Internship Experience Placeholder",
    organization: "Company or Organization",
    date: "Upcoming",
    description:
      "Add internship, freelance, part-time, or project-based experience here once available.",
  },
];

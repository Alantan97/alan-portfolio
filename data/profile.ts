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

export const profile = {
  name: "Alan Tan",
  title: "Software Engineering Student",
  email: "alant4607@gmail.com",
  location: "Your City, Country",
  education: "BSc Software Engineering, Your University",
  currentFocus: "Building full-stack applications and improving problem-solving skills.",
  interests: "Web development, mobile apps, UI/UX, and software architecture.",
  summary:
    "I build software products with a focus on full-stack development, AI, and user experience.",
  about:
    "I am a Software Engineering student interested in creating thoughtful, practical software. I enjoy building practical applications, learning from real user problems, and improving the details that make software easier to use.",
  profileImage: "/alantxn.png",
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
    items: ["HTML & CSS", "React", "Next.js", "Tailwind CSS", "Flutter", "Laravel"],
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
    category: "Tools",
    items: ["Git", "GitHub"],
  },
  {
    category: "Game Development",
    items: ["Unity"],
  },
  {
    category: "Design",
    items: ["Figma", "Photoshop", "Illustrator"],
  },
];

export const experience: TimelineItem[] = [
  {
    title: "Software Engineering Student",
    organization: "Your University",
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

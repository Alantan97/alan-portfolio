export type CaseStudySection = {
  title: string;
  body: string[];
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  status?: string;
  category?: string;
  github?: string;
  demo?: string;
  featured: boolean;
  sections: CaseStudySection[];
};

export const projects: Project[] = [
  {
    slug: "planova",
    title: "Planova",
    description:
      "An ongoing Final Year Project focused on planning, tracking, and organizing work through a clean productivity experience.",
    image: "/projects/project-dashboard.svg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "In Progress",
    category: "Final Year Project",
    github: "#",
    demo: "#",
    featured: true,
    sections: [
      {
        title: "Project overview",
        body: [
          "Planova is an ongoing Final Year Project exploring how students and project teams can organize goals, tasks, and progress in one focused workspace.",
        ],
      },
      {
        title: "Problem",
        body: [
          "Planning information is often spread across notes, chats, calendars, and task lists. This makes it harder to understand priorities and maintain momentum over a long project.",
        ],
      },
      {
        title: "Solution",
        body: [
          "The project is structured around clear task organization, status visibility, and a simple interface that helps users move from planning to execution.",
        ],
      },
      {
        title: "Technical implementation",
        body: [
          "The current implementation plan uses reusable Next.js components, typed project data, and responsive Tailwind layouts so the product can grow without becoming difficult to maintain.",
        ],
      },
      {
        title: "Current status",
        body: [
          "Planova is currently in progress as a Final Year Project. Replace this section with development milestones, supervisor feedback, testing notes, and final outcomes as the project develops.",
        ],
      },
    ],
  },
  {
    slug: "car-workshop",
    title: "Car Workshop Management System",
    description:
      "A service management system concept for handling customers, vehicles, repairs, and workshop job progress.",
    image: "/projects/project-api.svg",
    technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    status: "Case Study Draft",
    category: "Management System",
    github: "#",
    featured: true,
    sections: [
      {
        title: "Project overview",
        body: [
          "This project focuses on digitizing common car workshop workflows, including customer records, vehicle details, service jobs, and repair progress.",
        ],
      },
      {
        title: "Problem",
        body: [
          "Small workshops can lose time when service records and customer information are managed manually or across disconnected files.",
        ],
      },
      {
        title: "System architecture",
        body: [
          "The system can be organized into modules for customers, vehicles, service requests, job status, and reporting. This keeps data responsibilities clear and makes the workflow easier to extend.",
        ],
      },
      {
        title: "Challenges",
        body: [
          "The key challenge is making the system fast enough for staff to use during busy operations. Forms and status updates should stay simple, predictable, and easy to scan.",
        ],
      },
    ],
  },
  {
    slug: "uniparcel",
    title: "UniParcel",
    description:
      "A mobile-first campus parcel concept that helps students track parcel status and pickup information.",
    image: "/projects/project-mobile.svg",
    technologies: ["Flutter", "Firebase", "UI/UX"],
    status: "Case Study Draft",
    category: "Campus App",
    github: "#",
    demo: "#",
    featured: true,
    sections: [
      {
        title: "Project overview",
        body: [
          "UniParcel explores a student-centered approach to parcel tracking and collection inside a campus environment.",
        ],
      },
      {
        title: "UI/UX",
        body: [
          "The interface should make parcel status, pickup location, and required actions visible immediately, especially on mobile screens.",
        ],
      },
      {
        title: "Technical implementation",
        body: [
          "A mobile-first stack can support student notifications, parcel records, status updates, and simple administrative workflows.",
        ],
      },
      {
        title: "Results",
        body: [
          "Use this section later for usability testing, prototype feedback, or measured improvements in collection clarity.",
        ],
      },
    ],
  },
  {
    slug: "memory-of-regret",
    title: "Memory of Regret",
    description:
      "An interactive narrative project concept focused on memory, choices, and reflective user experience.",
    image: "/projects/project-memory.svg",
    technologies: ["JavaScript", "Game Design", "UI/UX"],
    status: "Case Study Draft",
    category: "Interactive Experience",
    featured: true,
    sections: [
      {
        title: "Project overview",
        body: [
          "Memory of Regret is an interactive experience where narrative, pacing, and user decisions shape the overall mood of the project.",
        ],
      },
      {
        title: "Problem",
        body: [
          "Narrative projects need interaction patterns that support the story without confusing the user or distracting from key moments.",
        ],
      },
      {
        title: "Solution",
        body: [
          "The case study can document how story structure, interface decisions, and progression logic work together to create a reflective experience.",
        ],
      },
      {
        title: "Challenges",
        body: [
          "Potential challenges include branching content, state management, pacing, and balancing technical constraints with the desired emotional tone.",
        ],
      },
    ],
  },
];

export const selectedProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

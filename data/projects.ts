export type CaseStudySection = {
  title: string;
  body: string[];
};

export type Project = {
  slug: string;
  title: string;
  subtitle?: string;
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
    subtitle: "AI-Powered Adaptive Study Planner",
    description:
      "A mobile study planning application that helps university students prioritize academic tasks and automatically generate and adjust study schedules based on deadlines, progress, and task completion.",
    image: "/projects/project-dashboard.svg",
    technologies: ["Flutter", "Firebase", "Python", "LambdaMART", "Genetic Algorithm"],
    status: "Final Year Project - In Progress",
    category: "Final Year Project",
    featured: true,
    sections: [
      {
        title: "Project overview",
        body: [
          "Planova is an AI-powered adaptive study planner designed for university students who need help managing academic tasks, deciding what to work on first, and adjusting their study plans when progress changes.",
          "The project focuses on turning task data, deadlines, completion progress, and study behavior into a more intelligent planning experience inside an Android mobile application.",
        ],
      },
      {
        title: "Problem",
        body: [
          "University students often struggle with time management and completing academic tasks efficiently.",
          "Students may find it difficult to decide which assignments, study tasks, or deadlines should come first.",
          "Many study planner applications use manual and static scheduling, so users must update plans themselves when progress changes.",
        ],
      },
      {
        title: "Solution",
        body: [
          "Planova combines task and assignment management with AI-based prioritization, adaptive schedule generation, reminders, notifications, a progress dashboard, and study analytics.",
          "Unlike static planner apps, Planova is designed to automatically rank academic work and adapt study schedules when user progress or task completion changes.",
        ],
      },
      {
        title: "AI approach",
        body: [
          "The Task Prioritization Engine uses LambdaMART to rank academic tasks so students can focus on the most important work first.",
          "The Adaptive Scheduling Engine uses a Genetic Algorithm to generate study schedules and adjust them when user progress or task completion changes.",
        ],
      },
      {
        title: "Technical implementation",
        body: [
          "Planova is planned as an Android mobile application using Flutter for the app interface, Firebase for backend services, and Python for AI-related development.",
          "The supporting workflow uses Figma for interface planning and VS Code for development.",
        ],
      },
      {
        title: "Development methodology",
        body: [
          "The project follows the Staged Incremental Model, allowing Planova to be developed in clear stages from requirements and system design through AI engine development, app module implementation, dashboard refinement, testing, and deployment.",
          "The planned stages include requirement analysis, literature and comparative study, system design, database design, UI wireframes, Task Prioritization Engine development, Adaptive Scheduling Engine development, Study Planning Module implementation, dashboard and analytics refinement, system testing, User Acceptance Testing, bug fixing, and Android deployment.",
        ],
      },
      {
        title: "Current status",
        body: [
          "Planova is currently in progress as a Final Year Project. The project is being developed with Flutter, Firebase, Python, Figma, and VS Code using a Staged Incremental Model.",
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
    status: "Project Draft",
    category: "Management System",
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
    status: "Project Draft",
    category: "Campus App",
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
    status: "Project Draft",
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
          "The project page can document how story structure, interface decisions, and progression logic work together to create a reflective experience.",
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

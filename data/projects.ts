export type CaseStudyBodyItem =
  | string
  | {
    text: string;
    variant: "paragraph" | "bullet";
  };

export type CaseStudySection = {
  title: string;
  body: CaseStudyBodyItem[];
};

export type Project = {
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  icon?: string;
  platform?: string;
  technologies: string[];
  status?: string;
  category?: string;
  github?: string;
  itch?: string;
  apk?: string;
  video?: {
    src: string;
    actionLabel: string;
  };
  playUrl?: string;
  featured: boolean;
  sections: CaseStudySection[];
};

export const projects: Project[] = [
  //Planova
  {
    slug: "planova",
    title: "Planova",
    subtitle: "AI-Powered Adaptive Study Planner",
    description:
      "An AI-powered mobile study planner for university students, turning academic tasks into prioritized plans and adaptive study schedules.",
    image: "/images/projects/p-cover.png",
    icon: "/images/projects/planova icon.png",
    platform: "Mobile App",
    technologies: ["Flutter", "Firebase", "Python", "LightGBM", "DEAP", "Pandas", "NumPy"],
    status: "In Progress",
    category: "AI",
    featured: true,
    github: "#",
    apk: "#",
    sections: [
      {
        title: "Project overview",
        body: [
          {
            text: "Planova is an AI-powered mobile study planner developed as a final year project for university students managing academic tasks, deadlines, and study time. It turns tasks into prioritized plans and adaptive schedules using task ranking and schedule generation.",
            variant: "paragraph",
          },
        ],
      },
      {
        title: "Problem",
        body: [
          { text: "Students struggle to decide which academic tasks should be completed first.", variant: "bullet" },
          { text: "Manual study planning takes time and becomes difficult when deadlines overlap.", variant: "bullet" },
          { text: "Missed tasks can disrupt the whole schedule and make students fall behind.", variant: "bullet" },
        ],
      },
      {
        title: "Solution",
        body: [
          { text: "Ranks academic tasks based on priority so students know what to focus on first.", variant: "bullet" },
          { text: "Generates personalized study schedules based on available time and task requirements.", variant: "bullet" },
          { text: "Automatically reschedules unfinished tasks when plans change or tasks are missed.", variant: "bullet" },
        ],
      },
      {
        title: "My role",
        body: [
          { text: "Full-Stack Developer", variant: "paragraph" },
        ],
      },
      {
        title: "Core features",
        body: [
          {
            text: "Task Prioritization: Ranks tasks based on deadline, difficulty, duration, and importance.",
            variant: "bullet",
          },
          {
            text: "Automatic Scheduling: Creates study schedules based on available time.",
            variant: "bullet",
          },
          {
            text: "Adaptive Rescheduling: Updates the schedule when tasks are missed.",
            variant: "bullet",
          },
          {
            text: "Task Management: Allows students to create, update, and track tasks.",
            variant: "bullet",
          },
        ],
      },
      {
        title: "AI approach",
        body: [
          {
            text: "LambdaMART is used to rank academic tasks based on their priority.",
            variant: "paragraph",
          },
          {
            text: "Genetic Algorithm is used to generate and adjust study schedules while considering deadlines, available time, and task requirements.",
            variant: "paragraph",
          },
        ],
      },
    ],
  },

  //CPTyres
  {
    slug: "car-workshop",
    title: "CPTyres",
    subtitle: "Car Workshop Management System",
    description:
      "A full-stack workshop management system for a real automotive client, centralizing records, reminders, analytics, and daily operations.",
    image: "/images/projects/cp-cover.png",
    icon: "/images/projects/cp icon.png",
    platform: "Web App",
    technologies: ["Laravel", "MySQL", "Tailwind CSS", "VPS Hosting"],
    status: "Completed",
    category: "Management System",
    featured: true,
    github: "https://github.com/Alantan97/cptyres-system.git",
    video: {
      src: "https://youtu.be/4SNVk_IKnOE?si=9ob7grQHzZfsdYXS",
      actionLabel: "Watch Demo",
    },
    sections: [
      {
        title: "Project overview",
        body: [
          {
            text: "CPTyres is a full-stack workshop management system developed for a real automotive workshop client. Built with Laravel, MySQL, Tailwind CSS, and VPS hosting, it centralizes customer, vehicle, service, job order, and staff records for real-world workshop use.",
            variant: "paragraph",
          },
        ],
      },
      {
        title: "Problem",
        body: [
          { text: "Workshop records were managed manually, making customer, vehicle, service, and job order data difficult to track.", variant: "bullet" },
          { text: "Customer, vehicle, and service information was scattered across different records.", variant: "bullet" },
          { text: "The client needed role-based access, dashboard analytics, notifications, service reminders, search, sorting, and pagination to support daily operations.", variant: "bullet" },
        ],
      },
      {
        title: "Solution",
        body: [
          {
            text: "Developed a centralized digital system to replace manual workshop records and make information easier to track.",
            variant: "bullet",
          },
          {
            text: "Organized customer, vehicle, and service information in one system for easier access and management.",
            variant: "bullet",
          },
          {
            text: "Implemented client-requested features including role-based access control, dashboard analytics, notifications, service reminders, search, sorting, and pagination.",
            variant: "bullet",
          },
        ],
      },
      {
        title: "My role",
        body: [
          { text: "Led development of the full-stack workshop management system for a real automotive workshop client.", variant: "bullet" },
          { text: "Implemented client-requested features across access control, analytics, notifications, reminders, search, sorting, and pagination.", variant: "bullet" },
          { text: "Deployed the completed system to a VPS and configured the production environment and database for client access.", variant: "bullet" },
        ],
      },
      {
        title: "Core features",
        body: [
          { text: "Customer and vehicle management for centralized workshop records.", variant: "bullet" },
          { text: "Job order and service management for tracking daily workshop work.", variant: "bullet" },
          { text: "Role-based access control with dashboard analytics and operational notifications.", variant: "bullet" },
          { text: "Service reminders, search, sorting, pagination, and VPS-based production deployment.", variant: "bullet" },
        ],
      },
    ],
  },

  //TravelBah!
  {
    slug: "travelbah",
    title: "TravelBah!",
    subtitle: "Social Network For Travelers In Sabah",
    description:
      "A Flutter travel community app for Sabah tourism, helping travelers discover local destinations, share journeys, and save favourite places.",
    image: "/images/projects/travel-cover.png",
    icon: "/images/projects/travel-icon.png",
    platform: "Mobile App",
    technologies: ["Flutter", "Dart", "Firebase", "Cloudinary"],
    status: "Completed",
    category: "Travel Community",
    featured: true,
    github: "https://github.com/ncychannnn/TravelBah-.git",
    apk: "https://drive.google.com/drive/folders/1zMQnN6bCvEnQxqyavey7FUrqgdqBXEt6?usp=sharing",
    sections: [
      {
        title: "Project overview",
        body: [
          {
            text: "TravelBah! is a Flutter mobile travel community app focused on Sabah tourism. It gives travelers a dedicated place to discover local destinations, share journey photos, interact with posts, and save favourite places for future trips.",
            variant: "paragraph",
          },
        ],
      },
      {
        title: "Problem",
        body: [
          {
            text: "Travelers often need to use multiple platforms to search for destinations, read reviews, and share travel experiences.",
            variant: "bullet",
          },
          {
            text: "Local Sabah travel recommendations can be difficult to find on larger travel platforms.",
            variant: "bullet",
          },
          {
            text: "Community sharing, wishlist planning, and traveler interaction are not centralized in one focused app.",
            variant: "bullet",
          },
        ],
      },
      {
        title: "Solution",
        body: [
          { text: "Developed a mobile travel community app focused on Sabah tourism.", variant: "bullet" },
          {
            text: "Highlights Sabah destinations through a dedicated travel discovery experience.",
            variant: "bullet",
          },
          {
            text: "Combines community posts, comments, likes, wishlist management, and profiles in one platform.",
            variant: "bullet",
          },
        ],
      },
      {
        title: "My role",
        body: [
          { text: "Led the project team and helped organize the mobile app structure, user flow, and development tasks.", variant: "bullet" },
          { text: "Built Flutter UI screens, reusable components, and CRUD flows for posts, comments, wishlist, and profiles.", variant: "bullet" },
          { text: "Integrated Firebase services and supported testing, debugging, and project documentation.", variant: "bullet" },
        ],
      },
      {
        title: "Core features",
        body: [
          { text: "User authentication with registration, login, password reset, password update, and logout.", variant: "bullet" },
          { text: "Explore page with search, category filtering, and sorting for Sabah destinations.", variant: "bullet" },
          { text: "Community feed with travel posts, image uploads, likes, and comments.", variant: "bullet" },
        ],
      },
    ],
  },

  //UniParcel
  {
    slug: "uniparcel",
    title: "UniParcel",
    subtitle: "Effortless Parcel Management in UPSI",
    description:
      "A web-based parcel management system for UPSI students and admins, organizing parcel submissions, tracking, and pickup updates.",
    image: "/images/projects/uni-cover.png",
    icon: "/images/projects/uni-icon.png",
    platform: "Web App",
    technologies: ["Laravel", "Vite", "PHP", "MySQL", "JavaScript"],
    status: "Completed",
    category: "Management System",
    github: "#",
    video: {
      src: "https://youtu.be/4SNVk_IKnOE?si=9ob7grQHzZfsdYXS",
      actionLabel: "Watch Demo",
    },
    featured: true,
    sections: [
      {
        title: "Project overview",
        body: [
          {
            text: "UniParcel is a web-based parcel management system for Universiti Pendidikan Sultan Idris students and parcel administrators. It organizes parcel submissions, status tracking, pickup readiness, and admin record handling so campus parcel updates are easier to manage.",
            variant: "paragraph",
          },
        ],
      },
      {
        title: "Problem",
        body: [
          { text: "Students need a clearer way to submit and track parcel information.", variant: "bullet" },
          { text: "Admins need an efficient way to search, update, and manage parcel records.", variant: "bullet" },
          { text: "Parcel status and personal parcel information need to be clear, secure, and easy to access.", variant: "bullet" },
        ],
      },
      {
        title: "Solution",
        body: [
          { text: "Students can register, log in, submit parcel details, and track parcel status.", variant: "bullet" },
          { text: "Admins can view submitted parcels, update parcel status, search records, and manage users.", variant: "bullet" },
          { text: "Secure login, clear parcel status stages, and email notifications keep parcel updates organized.", variant: "bullet" },
        ],
      },
      {
        title: "My role",
        body: [
          { text: "Proposed the project idea for a campus parcel management system.", variant: "bullet" },
          { text: "Contributed to requirements, design, testing documentation, and workflow planning.", variant: "bullet" },
          { text: "Worked with the team to define student and admin flows for parcel submission, tracking, and management.", variant: "bullet" },
        ],
      },
      {
        title: "Core features",
        body: [
          { text: "User registration and secure login.", variant: "bullet" },
          { text: "Student dashboard for submitting parcel details and viewing parcel status summaries.", variant: "bullet" },
          { text: "Parcel tracking using tracking number and clear status stages.", variant: "bullet" },
          { text: "Admin parcel management with update, delete, search, and print functions.", variant: "bullet" },
        ],
      },
    ],
  },

  //Memory of Regret
  {
    slug: "memory-of-regret",
    title: "Memory of Regret",
    subtitle: "",
    description:
      "A 2D story-driven platformer built with Unity and C#, combining platforming, puzzles, quests, collectibles, and boss encounters.",
    image: "/images/projects/mor-cover.png",
    icon: "/images/projects/mor-icon.png",
    platform: "Mobile Game",
    technologies: ["Unity", "C#", "Photoshop"],
    status: "Completed",
    category: "2D Platformer",
    itch: "https://alantan.itch.io/memory-of-regret",
    apk: "https://drive.google.com/drive/folders/1V1zlk_0yiKcdmyBtLLLT4Ms1_AhGmALI?usp=sharing",
    video: {
      src: "https://youtu.be/4SNVk_IKnOE?si=9ob7grQHzZfsdYXS",
      actionLabel: "Watch Trailer",
    },
    featured: true,
    sections: [
      {
        title: "Project overview",
        body: [
          {
            text: "Memory of Regret is a 2D story-driven platformer developed in Unity and C# as a diploma final year project. It combines platforming, puzzles, NPC quests, collectibles, enemy encounters, boss battles, and narrative progression, and won Best Game Design & Development and Best Poster.",
            variant: "paragraph",
          },
        ],
      },
      {
        title: "Problem",
        body: [
          { text: "The game needed to communicate the value of respecting parents without feeling like a lecture.", variant: "bullet" },
          { text: "The story, platforming, puzzles, and rewards had to support the same emotional theme.", variant: "bullet" },
          { text: "The level design needed to balance exploration, action, and narrative pacing.", variant: "bullet" },
        ],
      },
      {
        title: "Solution",
        body: [
          { text: "Used emotional storytelling and player discovery to teach respect through gameplay.", variant: "bullet" },
          { text: "Connected collectible orbs, puzzles, NPC quests, and rewards to Bay's emotional journey.", variant: "bullet" },
          { text: "Built levels that combine exploration, platforming, enemy encounters, and story progression.", variant: "bullet" },
        ],
      },
      {
        title: "My role",
        body: [
          { text: "Game Designer & Developer", variant: "paragraph" },
        ],
      },
      {
        title: "Core features",
        body: [
          { text: "Story-driven 2D platforming with exploration, enemies, and boss battles.", variant: "bullet" },
          { text: "Environmental puzzles, NPC quests, keys, items, and unlockable paths.", variant: "bullet" },
          { text: "Collectible orbs that unlock memories and drive emotional progression.", variant: "bullet" },
        ],
      },
      {
        title: "Game design",
        body: [
          {
            text: "Memory of Regret is structured around a loop of exploration, platforming, puzzle solving, NPC quests, and combat. Each area moves the player toward collectible orbs, which act as both progression goals and story rewards.",
            variant: "paragraph",
          },
          {
            text: "The level flow alternates between slower story and exploration moments and more active puzzle, enemy, and boss encounters. This pacing helps the moral theme unfold through discovery while keeping the player engaged through movement, challenges, and rewards.",
            variant: "paragraph",
          },
          { text: "Designed for players aged 10 and above, with a simplified 2D visual style inspired by cartoon and comic presentation.", variant: "bullet" },
          { text: "Main environments include home, forest, city, and home at night, giving the story a clear journey structure.", variant: "bullet" },
        ],
      },
    ],
  },
  
  //Busted!!
  {
    slug: "busted",
    title: "Busted!!",
    subtitle: "",
    description:
      "A hyper-casual mobile game built during an internship at Noels IT Solution, designed for quick touch-based gameplay sessions.",
    image: "/images/projects/busted-cover.png",
    icon: "/images/projects/busted-icon.png",
    platform: "Mobile Game",
    technologies: ["Unity", "C#", "Photoshop"],
    status: "Completed",
    category: "Hyper Casual",
    itch: "#",
    apk: "https://drive.google.com/drive/folders/1xuZRFXmr9zdD3bkof5hSwtt66QkfnCTH?usp=sharing",
    playUrl: "https://www.noels.my/s-projects-basic",
    featured: true,
    sections: [
      {
        title: "Project overview",
        body: [
          {
            text: "Busted!! is a hyper-casual mobile game developed in Unity and C# during an internship at Noels IT Solution. It uses simple touch-based mechanics for short, engaging gameplay sessions and was deployed on the company website and previously published on Google Play.",
            variant: "paragraph",
          },
        ],
      },
      {
        title: "Problem",
        body: [
          { text: "The game needed to feel engaging in short mobile play sessions.", variant: "bullet" },
          { text: "The interaction design had to stay simple enough for quick tap-and-swipe gameplay.", variant: "bullet" },
          { text: "The workplace sneaking concept needed clear tension, timing, and instant player feedback.", variant: "bullet" },
        ],
      },
      {
        title: "Solution",
        body: [
          { text: "Designed a hyper-casual loop focused on fast, repeatable gameplay.", variant: "bullet" },
          { text: "Built touch-based controls and simple interactions using Unity and C#.", variant: "bullet" },
          { text: "Created a boss-avoidance mechanic that gives players quick feedback when they react in time or get caught.", variant: "bullet" },
        ],
      },
      {
        title: "My role",
        body: [
          { text: "Led development of the game from concept through implementation and release.", variant: "bullet" },
          { text: "Built core gameplay mechanics, touch controls, and interactive systems using Unity and C#.", variant: "bullet" },
          { text: "Coordinated the project’s completion and deployment to the company website and Google Play Store.", variant: "bullet" },
        ],
      },
      {
        title: "Core features",
        body: [
          { text: "Portrait-mode mobile gameplay designed for quick sessions.", variant: "bullet" },
          { text: "First-person cubicle view with tap and swipe interactions for simple mobile control.", variant: "bullet" },
          { text: "Boss-avoidance gameplay where the player must react before getting caught.", variant: "bullet" },
        ],
      },
      {
        title: "Game design",
        body: [
          {
            text: "Busted!! is designed around a quick hyper-casual loop: the player tries to keep playing while reacting before the boss catches them. The first-person cubicle view supports the workplace sneaking theme and keeps the focus on timing and immediate decisions.",
            variant: "paragraph",
          },
          {
            text: "Tap-and-swipe interactions keep the controls easy to understand for short mobile sessions. The main tension comes from balancing the fun of sneaking in a game session with the risk of being caught, giving the player clear feedback through the boss-avoidance mechanic.",
            variant: "paragraph",
          },
          { text: "Designed for players aged 10 and above in a hyper-casual arcade style.", variant: "bullet" },
        ],
      },
    ],
  },
];

export const selectedProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

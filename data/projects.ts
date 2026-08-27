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
  demo?: string;
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
      "An AI-powered study planner that helps students prioritize academic tasks, generate study schedules, and automatically adjust plans when tasks are missed.",
    image: "/p-cover.png",
    icon: "/planova icon.png",
    platform: "Mobile App",
    technologies: ["Flutter", "Firebase", "Python", "LightGBM", "DEAP", "Pandas", "NumPy"],
    status: "In Progress",
    category: "AI",
    featured: true,
    sections: [
      {
        title: "Project overview",
        body: [
          {
            text: "Planova is an AI-powered study planner that helps students prioritize academic tasks, generate study schedules, and automatically adjust plans when tasks are missed. It is a Final Year Project developed as a mobile application, and my role is Developer.",
            variant: "paragraph",
          },
        ],
      },
      {
        title: "Problem",
        body: [
          {
            text: "Students often struggle to manage multiple tasks, deadlines, and study sessions.",
            variant: "paragraph",
          },
          { text: "Difficult to decide what to do first.", variant: "bullet" },
          { text: "Manual scheduling takes time.", variant: "bullet" },
          { text: "Missed tasks can disrupt the whole plan.", variant: "bullet" },
        ],
      },
      {
        title: "Solution",
        body: [
          {
            text: "Planova helps students plan their studies automatically by:",
            variant: "paragraph",
          },
          { text: "Ranking tasks based on priority.", variant: "bullet" },
          { text: "Generating a personalized study schedule.", variant: "bullet" },
          { text: "Rescheduling unfinished tasks when plans change.", variant: "bullet" },
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
      {
        title: "Technical implementation",
        body: [
          { text: "Flutter is used for mobile application development.", variant: "bullet" },
          { text: "Python is used for developing and training the AI models.", variant: "bullet" },
          { text: "LightGBM is used for implementing LambdaMART.", variant: "bullet" },
          { text: "DEAP / Python is used for Genetic Algorithm development.", variant: "bullet" },
          { text: "Pandas / NumPy is used for data preparation and processing.", variant: "bullet" },
          { text: "Firebase is used for authentication and data storage.", variant: "bullet" },
        ],
      },
      {
        title: "Current status",
        body: [
          { text: "Currently in Development.", variant: "paragraph" },
          {
            text: "The project is currently focused on building the core application, developing the AI components, and integrating the prioritization and scheduling engines.",
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
      "A web-based workshop management system that centralizes customer, vehicle, service, job order, and staff management for daily workshop operations.",
    image: "/cp-cover.png",
    icon: "/cp icon.png",
    platform: "Web App",
    technologies: ["Laravel", "MySQL", "Tailwind CSS", "Git", "GitHub", "VPS Hosting"],
    status: "Completed",
    category: "Management System",
    featured: true,
    sections: [
      {
        title: "Project overview",
        body: [
          {
            text: "CPTyres is a web-based workshop management system developed for a real car workshop. It centralizes customer, vehicle, service, job order, and staff management into a single system to support daily workshop operations.",
            variant: "paragraph",
          },
        ],
      },
      {
        title: "My role",
        body: [
          { text: "Team Leader & Backend Developer.", variant: "paragraph" },
          { text: "Led a 5-member development team.", variant: "bullet" },
          { text: "Scrum Master", variant: "bullet" },
          { text: "Communicated with the client to gather system requirements.", variant: "bullet" },
          { text: "Contributed to database and system design.", variant: "bullet" },
          { text: "Developed backend features.", variant: "bullet" },
        ],
      },
      {
        title: "Problem",
        body: [
          { text: "Workshop records were managed manually, making them difficult to track and maintain.", variant: "bullet" },
          { text: "Customer, vehicle, and service information was scattered across different records.", variant: "bullet" },
          { text: "Monitoring job progress required additional time and effort.", variant: "bullet" },
          { text: "Service reminders could easily be overlooked.", variant: "bullet" },
          {
            text: "Finding specific records was inefficient due to the lack of search and filtering tools.",
            variant: "bullet",
          },
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
            text: "Added job order tracking and dashboard statistics to help staff monitor workshop progress more efficiently.",
            variant: "bullet",
          },
          {
            text: "Implemented service reminders and in-app notifications to reduce the risk of missed maintenance follow-ups.",
            variant: "bullet",
          },
          {
            text: "Added search, filtering, sorting, and pagination to help staff locate specific records more efficiently.",
            variant: "bullet",
          },
        ],
      },
      {
        title: "Core features",
        body: [
          { text: "Customer and vehicle management.", variant: "bullet" },
          { text: "Job order and service management.", variant: "bullet" },
          { text: "Staff management with role-based access.", variant: "bullet" },
          { text: "Dashboard with workshop statistics.", variant: "bullet" },
          { text: "Vehicle service reminders.", variant: "bullet" },
          { text: "In-app notifications.", variant: "bullet" },
          { text: "Search, filtering, sorting, and pagination.", variant: "bullet" },
          { text: "Job status and income tracking.", variant: "bullet" },
        ],
      },
      {
        title: "Technical implementation",
        body: [
          { text: "Laravel for backend development.", variant: "bullet" },
          { text: "MySQL for database management.", variant: "bullet" },
          { text: "Tailwind CSS for interface development.", variant: "bullet" },
          { text: "Git & GitHub for version control and team collaboration.", variant: "bullet" },
          { text: "VPS Hosting for deployment and testing.", variant: "bullet" },
        ],
      },
      {
        title: "Current status",
        body: [
          {
            text: "Completed as a client-based university software engineering project. The system was deployed to a VPS and tested by the development team in an online environment.",
            variant: "paragraph",
          },
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
      "A Flutter mobile travel community application that helps users discover Sabah destinations, share travel experiences, and save favourite places.",
    image: "/travel-cover.png",
    icon: "/travel-icon.png",
    platform: "Mobile App",
    technologies: ["Flutter", "Dart", "Firebase", "Cloudinary", "Git", "GitHub"],
    status: "Completed",
    category: "Travel Community",
    featured: true,
    sections: [
      {
        title: "Project overview",
        body: [
          {
            text: "TravelBah! is a Flutter mobile travel community application developed to promote tourism in Sabah. It allows users to discover travel posts, share travel experiences, upload journey photos, interact with other travelers, and save favourite destinations in one app.",
            variant: "paragraph",
          },
        ],
      },
      {
        title: "My role",
        body: [
          { text: "Team Leader & Flutter Developer.", variant: "paragraph" },
          { text: "Led the project team and helped organize development tasks.", variant: "bullet" },
          { text: "Contributed to the mobile app structure and user flow.", variant: "bullet" },
          { text: "Developed Flutter UI screens and reusable components.", variant: "bullet" },
          { text: "Integrated Firebase Authentication and Cloud Firestore.", variant: "bullet" },
          { text: "Implemented CRUD features for posts, comments, wishlist, and profile data.", variant: "bullet" },
          { text: "Helped with testing, debugging, and project documentation.", variant: "bullet" },
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
            text: "Users have limited opportunities to interact with other travelers in one focused community.",
            variant: "bullet",
          },
          {
            text: "Saving favourite places for future trips can be inconvenient when using separate apps or manual notes.",
            variant: "bullet",
          },
          {
            text: "Travel information, community sharing, and personal travel planning are not centralized in one place.",
            variant: "bullet",
          },
        ],
      },
      {
        title: "Solution",
        body: [
          { text: "Developed a mobile travel community app focused on Sabah tourism.", variant: "bullet" },
          {
            text: "Combined destination discovery, travel sharing, community interaction, and wishlist management in one platform.",
            variant: "bullet",
          },
          {
            text: "Added a community feed where users can view travel stories, like posts, and leave comments.",
            variant: "bullet",
          },
          {
            text: "Implemented a Share Your Journey feature for users to upload travel photos with titles, locations, categories, and captions.",
            variant: "bullet",
          },
          {
            text: "Added wishlist and profile management features to support personal travel planning.",
            variant: "bullet",
          },
        ],
      },
      {
        title: "Core features",
        body: [
          { text: "User registration, login, forgot password, change password, and logout.", variant: "bullet" },
          { text: "Explore page with search, category filtering, and sorting.", variant: "bullet" },
          { text: "Community feed for viewing travel posts.", variant: "bullet" },
          { text: "Create, edit, and delete travel posts.", variant: "bullet" },
          { text: "Image uploads for post photos and profile pictures.", variant: "bullet" },
          { text: "Likes and comments for community interaction.", variant: "bullet" },
          { text: "Wishlist for saving and removing favourite destinations.", variant: "bullet" },
          { text: "Profile management with username, profile picture, and activity statistics.", variant: "bullet" },
        ],
      },
      {
        title: "Technical implementation",
        body: [
          { text: "Flutter for mobile application development.", variant: "bullet" },
          { text: "Dart for application logic.", variant: "bullet" },
          {
            text: "Firebase Authentication for user login, registration, password reset, and password change.",
            variant: "bullet",
          },
          {
            text: "Cloud Firestore for storing users, posts, comments, likes, and wishlist data.",
            variant: "bullet",
          },
          {
            text: "Cloudinary for uploading and retrieving travel post images and profile pictures.",
            variant: "bullet",
          },
          { text: "Git & GitHub for version control and team collaboration.", variant: "bullet" },
        ],
      },
      {
        title: "Current status",
        body: [
          {
            text: "Completed as a university mobile application development project. The app includes the main modules for authentication, explore, community, post sharing, wishlist, and profile management, with real-time data storage and image upload functionality implemented.",
            variant: "paragraph",
          },
        ],
      },
    ],
  },

  //UniParcel
  {
    slug: "uniparcel",
    title: "UniParcel",
    description:
      "A mobile-first campus parcel concept that helps students track parcel status and pickup information.",
    image: "/projects/project-mobile.svg",
    platform: "Mobile App",
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

  //Memory of Regret
  {
    slug: "memory-of-regret",
    title: "Memory of Regret",
    description:
      "An interactive narrative project concept focused on memory, choices, and reflective user experience.",
    image: "/projects/project-memory.svg",
    platform: "Interactive Web",
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
  
  {
    slug: "student-management-dashboard",
    title: "Student Management Dashboard",
    description:
      "A dashboard concept for organizing student records, academic information, and simple administrative workflows.",
    image: "/projects/project-api.svg",
    platform: "Web App",
    technologies: ["React", "TypeScript", "UI/UX"],
    status: "Project Draft",
    category: "Dashboard",
    featured: true,
    sections: [
      {
        title: "Project overview",
        body: [
          "This project explores how student-related information can be organized into a clear dashboard for faster review and management.",
        ],
      },
      {
        title: "Problem",
        body: [
          "Administrative interfaces can become difficult to scan when records, actions, and status information are spread across multiple pages.",
        ],
      },
      {
        title: "Solution",
        body: [
          "The dashboard groups important information into simple sections so users can review records and actions more efficiently.",
        ],
      },
    ],
  },
];

export const selectedProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

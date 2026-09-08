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
    github: "#",
    apk: "#",
    demo: "#",
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
    github: "https://github.com/Alantan97/cptyres-system.git",
    demo: "#",
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
    github: "https://github.com/ncychannnn/TravelBah-.git",
    apk: "https://drive.google.com/drive/folders/1zMQnN6bCvEnQxqyavey7FUrqgdqBXEt6?usp=sharing",
    demo: "#",
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
    subtitle: "Effortless Parcel Management in UPSI",
    description:
      "A web-based parcel management system for UPSI students to submit parcel details, track parcel status, and receive pickup updates more efficiently.",
    image: "/uni-cover.png",
    icon: "/uni-icon.png",
    platform: "Web App",
    technologies: ["Laravel", "Vite", "PHP", "HTML", "CSS", "JavaScript"],
    status: "Completed",
    category: "Management System",
    github: "#",
    demo: "https://yeeshuan.online/uniparcel/",
    featured: true,
    sections: [
      {
        title: "Project overview",
        body: [
          {
            text: "UniParcel is a web-based parcel management system designed for Universiti Pendidikan Sultan Idris students. The system helps students submit incoming parcel details, track parcel movement, and know when their parcels are ready for pickup.",
            variant: "paragraph",
          },
        ],
      },
      {
        title: "My role",
        body: [
          { text: "Proposed the project idea for a campus parcel management system.", variant: "bullet" },
          { text: "Contributed to the software engineering documentation, including requirements, design, and testing.", variant: "bullet" },
          { text: "Worked with the team to define student and admin workflows for parcel submission, tracking, and management.", variant: "bullet" },
        ],
      },
      {
        title: "Problem",
        body: [
          {
            text: "Students receive more parcels due to online shopping, but campus parcel handling can become difficult when parcel records, status updates, and pickup readiness are not managed in one organized system.",
            variant: "paragraph",
          },
          { text: "Students need a clearer way to submit and track parcel information.", variant: "bullet" },
          { text: "Admins need an efficient way to search, update, and manage parcel records.", variant: "bullet" },
          { text: "Parcel status should be easy to understand so students know when to collect their items.", variant: "bullet" },
          { text: "Personal parcel information needs secure access through authentication and authorization.", variant: "bullet" },
        ],
      },
      {
        title: "Solution",
        body: [
          {
            text: "UniParcel provides separate student and admin workflows to make campus parcel management more structured and convenient.",
            variant: "paragraph",
          },
          { text: "Students can register, log in, submit parcel details, and track parcel status.", variant: "bullet" },
          { text: "Admins can view submitted parcels, update parcel status, search records, and manage users.", variant: "bullet" },
          { text: "The system supports parcel status stages such as Not Yet Arrived, Arrived, Ready to Pick Up, and Received.", variant: "bullet" },
          { text: "Email notifications inform students when parcel information is updated.", variant: "bullet" },
        ],
      },
      {
        title: "Core features",
        body: [
          { text: "User registration and secure login.", variant: "bullet" },
          { text: "Student dashboard with parcel status summaries.", variant: "bullet" },
          { text: "Submit new parcel details with tracking number, recipient name, and phone number.", variant: "bullet" },
          { text: "Track parcel status using a tracking number.", variant: "bullet" },
          { text: "Edit parcel information to prevent mismatched details.", variant: "bullet" },
          { text: "Admin dashboard for parcel movement summaries.", variant: "bullet" },
          { text: "Admin parcel list with update, delete, search, and print functions.", variant: "bullet" },
          { text: "User profile management and password update.", variant: "bullet" },
          { text: "Shop management for adding, updating, deleting, and searching shops.", variant: "bullet" },
          { text: "Export and printing support for parcel records.", variant: "bullet" },
        ],
      },
      {
        title: "Technical implementation",
        body: [
          { text: "Laravel was used as the main web application framework.", variant: "bullet" },
          { text: "Vite was used for efficient asset compilation and faster development workflow.", variant: "bullet" },
          { text: "The system includes authenticated student and admin access.", variant: "bullet" },
          { text: "Role-based admin functions support parcel, user, and shop management.", variant: "bullet" },
          { text: "Search, status filtering, export, printing, and email notification features support the parcel management workflow.", variant: "bullet" },
        ],
      },
      {
        title: "Testing",
        body: [
          { text: "Registration and login were tested to confirm secure access for registered users.", variant: "bullet" },
          { text: "Dashboard navigation was tested to ensure users could access parcel submission, tracking, profile, and logout actions.", variant: "bullet" },
          { text: "Parcel status buttons were tested to confirm each status displays the correct parcel information.", variant: "bullet" },
          { text: "Search functionality was tested to verify accurate parcel retrieval.", variant: "bullet" },
          { text: "Export, PDF, Excel, CSV, and printing functions were tested for parcel record output.", variant: "bullet" },
          { text: "Profile editing, password update, error handling, and logout flows were tested.", variant: "bullet" },
        ],
      },
      {
        title: "Current status",
        body: [
          {
            text: "Completed as a university software engineering group project. The system includes core student and admin features for campus parcel submission, tracking, status updates, record search, user management, notifications, and printing/export workflows.",
            variant: "paragraph",
          },
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
      "A 2D side-scrolling adventure game about regret, forgiveness, and personal growth, built around platforming, puzzle-solving, NPC quests, and collectible orbs.",
    image: "/mor-cover.png",
    icon: "/mor-icon.png",
    platform: "Mobile Game",
    technologies: ["Unity", "C#", "Visual Studio", "Photoshop"],
    status: "Completed",
    category: "2D Platformer",
    itch: "https://alantan.itch.io/memory-of-regret",
    apk: "https://drive.google.com/drive/folders/1V1zlk_0yiKcdmyBtLLLT4Ms1_AhGmALI?usp=sharing",
    demo: "#",
    featured: true,
    sections: [
      {
        title: "Project overview",
        body: [
          {
            text: "Memory of Regret is a 2D side-scrolling adventure game developed as a diploma final year project. The game follows Bay, a small creature who travels through different areas to uncover the truth behind his parents' death and recover three stolen orbs that belonged to them.",
            variant: "paragraph",
          },
          {
            text: "The project combines platforming, puzzle-solving, NPC quests, combat, animated cutscenes, and an educational storyline about respect, regret, forgiveness, and personal growth.",
            variant: "paragraph",
          },
        ],
      },
      {
        title: "My role",
        body: [
          { text: "Game Designer & Developer.", variant: "paragraph" },
          { text: "Created the game concept, story, characters, levels, mechanics, and interface flow.", variant: "bullet" },
          { text: "Designed the visual direction, game poster, packaging concept, and 2D art assets.", variant: "bullet" },
          { text: "Built gameplay mechanics and interaction flow using Unity and C# scripting.", variant: "bullet" },
          { text: "Documented the game design, storyline, gameplay elements, testing feedback, and improvement plans.", variant: "bullet" },
        ],
      },
      {
        title: "Problem",
        body: [
          {
            text: "Many educational games deliver moral lessons directly, which can feel less engaging for players. Memory of Regret explores how a story-driven game can teach reflection and respect through gameplay, emotional storytelling, and player discovery.",
            variant: "paragraph",
          },
          { text: "The game needed to communicate the value of respecting parents without feeling like a lecture.", variant: "bullet" },
          { text: "The story, platforming, puzzles, and rewards had to support the same emotional theme.", variant: "bullet" },
          { text: "The level design needed to balance exploration, action, and narrative pacing.", variant: "bullet" },
        ],
      },
      {
        title: "Solution",
        body: [
          {
            text: "I designed a game where the player's progress is connected to Bay's emotional journey. Each recovered orb unlocks a memory of Bay with his parents, reinforcing the story while rewarding exploration and progress.",
            variant: "paragraph",
          },
          { text: "Built a side-scrolling adventure structure across home, forest, city, and night-time home levels.", variant: "bullet" },
          { text: "Used collectible orbs as both gameplay objectives and narrative rewards.", variant: "bullet" },
          { text: "Added NPC quests that guide players toward clues and progression items.", variant: "bullet" },
          { text: "Included platforming, enemy encounters, and boss battles to keep the experience interactive.", variant: "bullet" },
        ],
      },
      {
        title: "Core features",
        body: [
          { text: "2D side-scrolling exploration with flat/cartoon-style visuals.", variant: "bullet" },
          { text: "Story-driven quest about Bay uncovering the truth behind his parents' death.", variant: "bullet" },
          { text: "Three collectible orbs that unlock memories and drive the emotional progression.", variant: "bullet" },
          { text: "NPC quests involving items such as honey and a guitar.", variant: "bullet" },
          { text: "Puzzle-platforming challenges including keys, boxes, obstacles, and unlockable paths.", variant: "bullet" },
          { text: "Simple combat where the player defeats enemies by jumping on them.", variant: "bullet" },
          { text: "Boss battle moments at major story points.", variant: "bullet" },
          { text: "Menus, HUD, dialogue box, movement controls, and pause interface.", variant: "bullet" },
        ],
      },
      {
        title: "Game design",
        body: [
          {
            text: "The game was designed around a moderate pacing structure, moving between slower exploration moments and faster action or combat sequences. This allowed the story to unfold gradually while still giving players active challenges.",
            variant: "paragraph",
          },
          { text: "Target audience: players aged 10 and above.", variant: "bullet" },
          { text: "Genre: role-playing / puzzle-platformer adventure.", variant: "bullet" },
          { text: "Art style: simplified 2D flat visual style inspired by cartoon and comic-like presentation.", variant: "bullet" },
          { text: "Main environments: home, forest, city, and home at night.", variant: "bullet" },
          { text: "Unique selling points: educational storyline, animated cutscenes, and NPC quests.", variant: "bullet" },
        ],
      },
      {
        title: "Technical implementation",
        body: [
          { text: "Unity Engine was used to build the game and implement gameplay mechanics.", variant: "bullet" },
          { text: "C# scripting in Visual Studio was used for player control, interactions, and game logic.", variant: "bullet" },
          { text: "Adobe Photoshop was used to design visual assets and artwork.", variant: "bullet" },
          { text: "Adobe After Effects was used for animated cutscene work.", variant: "bullet" },
          { text: "The game was planned for Android and PC compatibility based on the project specifications.", variant: "bullet" },
        ],
      },
      {
        title: "Testing",
        body: [
          { text: "The game was tested for bugs, performance issues, platform limitations, user experience, balancing, and time constraints.", variant: "bullet" },
          { text: "Positive feedback highlighted the art style, soundtrack, rewarding gameplay, engaging story, and moral value of the narrative.", variant: "bullet" },
          { text: "Improvement feedback pointed to the need for stronger level design and more creative level ideas.", variant: "bullet" },
          { text: "Testing and optimization were identified as important steps before release, especially for performance across devices.", variant: "bullet" },
        ],
      },
      {
        title: "Challenges",
        body: [
          { text: "Balancing story, moral message, and gameplay so the experience stayed engaging.", variant: "bullet" },
          { text: "Designing levels that supported exploration, puzzles, combat, and story progression.", variant: "bullet" },
          { text: "Managing art, sound, animation, interface, and development work within the project timeline.", variant: "bullet" },
          { text: "Improving compatibility and performance for different target devices.", variant: "bullet" },
        ],
      },
      {
        title: "Current status",
        body: [
          {
            text: "Completed as a Diploma in Game Design & Development final year project. The project includes the game concept, story, gameplay mechanics, interface design, poster, packaging concept, testing feedback, and documented improvement suggestions.",
            variant: "paragraph",
          },
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
      "A portrait-mode mobile arcade game where players secretly play games at work while avoiding getting caught by their boss.",
    image: "/busted-cover.png",
    icon: "/busted-icon.png",
    platform: "Mobile Game",
    technologies: ["Unity", "C#", "Visual Studio", "Photoshop", "After Effects", "Game Design"],
    status: "Completed",
    category: "Hyper Casual",
    itch: "#",
    apk: "https://drive.google.com/drive/folders/1xuZRFXmr9zdD3bkof5hSwtt66QkfnCTH?usp=sharing",
    demo: "#",
    featured: true,
    sections: [
      {
        title: "Project overview",
        body: [
          {
            text: "Busted!! is a hyper casual mobile arcade game where players take on the role of a worker trying to play games on their computer without getting caught by their boss. The game is played in portrait mode, with the player shown from a first-person cubicle view facing their computer screen.",
            variant: "paragraph",
          },
        ],
      },
      {
        title: "Objective",
        body: [
          {
            text: "The goal of Busted!! is to create a quick, funny, and engaging mobile experience that uses simple tap-and-swipe interactions. The game is designed to boost workplace-themed entertainment through a light stealth mechanic where players must react quickly, avoid the boss, and keep the game session going.",
            variant: "paragraph",
          },
        ],
      },
      {
        title: "Core features",
        body: [
          { text: "Portrait-mode mobile gameplay designed for quick sessions.", variant: "bullet" },
          { text: "First-person cubicle view that places the player at a workplace computer.", variant: "bullet" },
          { text: "Tap and swipe interactions for simple mobile control.", variant: "bullet" },
          { text: "Boss-avoidance gameplay where the player must react before getting caught.", variant: "bullet" },
          { text: "Hyper casual structure focused on fast, repeatable, and easy-to-understand play.", variant: "bullet" },
          { text: "Workplace theme with a humorous sneaking-game concept.", variant: "bullet" },
        ],
      },
      {
        title: "Game design",
        body: [
          { text: "Genre: hyper casual / arcade.", variant: "bullet" },
          { text: "Target audience: players aged 10 years old and above.", variant: "bullet" },
          { text: "Platform: mobile / Google Play Store.", variant: "bullet" },
          { text: "Interaction: tap and swipe.", variant: "bullet" },
          {
            text: "The gameplay concept is built around tension and timing, where players balance the fun of sneaking in a game session with the risk of being caught.",
            variant: "paragraph",
          },
        ],
      },
      {
        title: "Technical implementation",
        body: [
          { text: "Unity was used as the main game development engine.", variant: "bullet" },
          { text: "C# scripting was used for gameplay interactions, player input, and game logic.", variant: "bullet" },
          { text: "Visual Studio was used for scripting and development workflow.", variant: "bullet" },
          { text: "Photoshop was used for visual assets and interface graphics.", variant: "bullet" },
          { text: "After Effects was used for animation and motion-related assets where needed.", variant: "bullet" },
        ],
      },
      {
        title: "Current status",
        body: [
          {
            text: "Completed as a mobile game project concept focused on simple controls, humorous workplace gameplay, and short-session arcade engagement.",
            variant: "paragraph",
          },
        ],
      },
    ],
  },
];

export const selectedProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

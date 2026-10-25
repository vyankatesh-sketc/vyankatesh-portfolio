export interface ProjectLink {
  label: string;
  url: string;
  type: "github" | "live" | "demo" | "other";
}

export interface Project {
  id: string;
  title: string;
  status: "Completed" | "In progress" | "Planned";
  summary: string;
  tech: string[];
  implemented: string[];
  planned: string[];
  links: ProjectLink[];
  hidden?: boolean;
}

export const projectsData: Project[] = [
  {
    id: "yalu-ai-manager",
    title: "Yalu AI Manager",
    status: "In progress",
    summary:
      "An AI-assisted social media management and analytics project tailored to Yalu India, a deals and discovery application.",
    tech: ["React.js", "Node.js", "TypeScript", "AI Integration"],
    implemented: [],
    planned: [
      "Analytics summaries and performance reports",
      "Competitor and content analysis",
      "Content-calendar generation",
      "Creative prompts for posts, posters, and videos",
      "Progress and improvement reports",
    ],
    links: [],
  },
  {
    id: "employee-management-app",
    title: "Employee Management App",
    status: "Completed",
    summary:
      "An employee management application built with Flask and containerized with Docker, designed for structured employee record tracking and administrative operations.",
    tech: ["Flask", "Docker", "Python", "REST APIs"],
    implemented: [
      "Employee directory and department record management",
      "RESTful backend endpoints for employee operations",
      "Docker containerization for consistent deployment and local setup",
    ],
    planned: [],
    links: [],
  },
  {
    id: "bfs-puzzle-game",
    title: "Puzzle Game Using BFS",
    status: "Planned",
    summary:
      "A planned interactive puzzle game exploring breadth-first search (BFS) algorithms for 4-directional grid traversal, visited-set cycle prevention, and pathfinding mechanics.",
    tech: ["JavaScript", "HTML5", "CSS3", "Algorithms"],
    implemented: [],
    planned: [
      "4-directional BFS grid traversal with cycle prevention",
      "Interactive territory flood-fill and pathfinding puzzle mechanics",
      "Dynamic difficulty grid scaling and algorithmic hint calculation",
    ],
    links: [],
  },
];

export interface SkillGroup {
  category: string;
  jpTitle: string;
  description: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Programming Languages",
    jpTitle: "言語",
    description: "Core syntax, multi-paradigm programming, and computational logic",
    skills: ["Java", "Python", "JavaScript", "C", "C++", "SQL"],
  },
  {
    category: "Frontend Development",
    jpTitle: "フロントエンド",
    description: "Modern, component-driven user interfaces and responsive layouts",
    skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    category: "Backend Development",
    jpTitle: "バックエンド",
    description: "Server-side runtimes, micro-frameworks, and REST API development",
    skills: ["Node.js", "Flask"],
  },
  {
    category: "Databases",
    jpTitle: "データベース",
    description: "Relational data modeling, schema architecture, and query optimization",
    skills: ["MySQL"],
  },
  {
    category: "Developer Tools",
    jpTitle: "ツール・環境",
    description: "Version control, containerization, and modern development workflows",
    skills: ["Git", "GitHub", "Docker", "Linux/Unix", "VS Code"],
  },
  {
    category: "DSA & Algorithms",
    jpTitle: "アルゴリズム",
    description: "Data structures, graph traversals, and algorithmic problem solving",
    skills: [
      "BFS",
      "DFS",
      "Flood Fill",
      "Dynamic Programming",
      "Trees & Graphs",
      "Sorting",
    ],
  },
];

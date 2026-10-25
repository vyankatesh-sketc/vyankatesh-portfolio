export interface Internship {
  id: string;
  company: string;
  role: string;
  period: string;
  focus: string;
  description: string;
  highlights: string[];
}

export const internshipsData: Internship[] = [
  {
    id: "prodigy-infotech",
    company: "Prodigy InfoTech",
    role: "Generative AI Intern",
    period: "July 2026",
    focus: "Applied AI & Prompt Architecture",
    description:
      "Explored generative AI models, prompt engineering patterns, and practical integration workflows for intelligent software applications.",
    highlights: [
      "Studied generative model integration techniques and structured output generation.",
      "Investigated prompt engineering patterns to enhance reliability in developer tools.",
    ],
  },
  {
    id: "codsoft",
    company: "CodSoft",
    role: "Web Development Intern",
    period: "July 2026",
    focus: "Frontend Engineering & Responsive UI",
    description:
      "Developed web application interfaces, focusing on modern frontend architecture, component reusability, and responsive layouts across viewports.",
    highlights: [
      "Built semantic, accessible web components using modern HTML, CSS, and JavaScript.",
      "Implemented responsive layouts and user interface state handling.",
    ],
  },
  {
    id: "codealpha",
    company: "CodeAlpha",
    role: "Data Analytics Intern",
    period: "July 2026",
    focus: "Exploratory Data Analysis & Visualization",
    description:
      "Analyzed datasets to identify trends, clean unstructured records, and generate clear visualizations to support data-informed conclusions.",
    highlights: [
      "Conducted exploratory data analysis across tabular datasets using Python libraries.",
      "Generated structured charts and summaries to communicate insights effectively.",
    ],
  },
];

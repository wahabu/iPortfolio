export type Project = {
  id: string;
  name: string;
  summary: string;
  stack: string[];
  role: string;
};

export const projects: Project[] = [
  {
    id: "knowledge-hub",
    name: "Knowledge Hub",
    summary:
      "A personal learning system for organizing technical courses, vocabulary, progress, and review history.",
    stack: ["React", "TypeScript", "Vite"],
    role: "Product & Software Engineering",
  },
  {
    id: "jlpt-mondai",
    name: "JLPT Mondai",
    summary:
      "An interactive Japanese study application for practicing JLPT-style questions with timers, instant feedback, and multiple question formats.",
    stack: ["HTML", "CSS", "JavaScript"],
    role: "Frontend Engineering & Learning Experience",
  },
];

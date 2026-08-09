import { projects } from "../../content/projects";
import { ProjectCard } from "../ui/ProjectCard/ProjectCard";
import "./Projects.css";

export function Projects() {
  return (
    <section className="projects" id="projects" aria-labelledby="projects-title">
      <div className="projects__inner">
        <p className="projects__eyebrow">Selected Work</p>

        <h2 id="projects-title">Projects built around real problems.</h2>

        <div className="projects__list">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

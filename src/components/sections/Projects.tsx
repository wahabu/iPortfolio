import { projects } from '../../content/projects'
import './Projects.css'
import { ProjectCard } from '../ui/ProjectCard/ProjectCard'

export function Projects() {
  const project = projects[0]

  return (
    <section className="projects" id="projects">
      <div className="projects__inner">
        <p className="projects__eyebrow">Selected Work</p>

        <h2>Projects built around real problems.</h2>

        <ProjectCard project={project} index={1} />
      </div>
    </section>
  )
}
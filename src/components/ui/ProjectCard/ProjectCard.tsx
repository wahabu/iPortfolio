import type { Project } from '../../../content/projects'
import './ProjectCard.css'

type ProjectCardProps = {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article className="project-card">
      <p className="project-card__number">
        {String(index).padStart(2, '0')}
      </p>

      <div>
        <h3>{project.name}</h3>
        <p>{project.summary}</p>

        <p className="project-card__role">{project.role}</p>

        <ul className="project-card__stack">
          {project.stack?.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}
import { projects } from '../../content/projects'
import './Projects.css'

export function Projects() {
  const project = projects[0]

  return (
    <section className="projects" id="projects">
      <div className="projects__inner">
        <p className="projects__eyebrow">Selected Work</p>

        <h2>Projects built around real problems.</h2>

        <article className="project-card">
          <p className="project-card__number">01</p>

          <div>
            <h3>{project.name}</h3>
            <p>{project.summary}</p>
            <p className="project-card__role">{project.role}</p>
            <ul className="project-card__stack">
                {project.stack?.map((technology) => (
                <li key={technology}>
                  <span>{technology}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </section>
  )
}
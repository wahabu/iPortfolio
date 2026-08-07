import { about } from '../../content/about'
import './About.css'

export function About() {
  return (
    <section className="about" id="about" aria-labelledby="about-title">
      <div className="about__inner">
        <p className="about__eyebrow">{about.eyebrow}</p>

        <h2 id="about-title">{about.heading}</h2>

        <div className="about__body">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}

import { site } from '../../content/site'
import './Hero.css'

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__content">
        <p className="hero__eyebrow">Software Engineer</p>

        <h1 id="hero-title">{site.name}</h1>

        <p className="hero__tagline">{site.tagline}</p>

        <div className="hero__actions">
          <a className="button button--primary" href="#projects">
            View selected work
          </a>

          <a className="button button--secondary" href="#contact">
            Contact me
          </a>
        </div>
      </div>
    </section>
  )
}
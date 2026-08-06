import { site } from '../../content/site'

export function Hero() {
  return (
    <section aria-labelledby="hero-title">
      <p>Software Engineer</p>

      <h1 id="hero-title">{site.name}</h1>

      <p>{site.tagline}</p>
    </section>
  )
}
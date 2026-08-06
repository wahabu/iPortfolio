import { site } from '../../content/site'
import { Hero } from '../sections/Hero'

export function PageShell() {
  return (
    <>
      <header>
        <p>{site.name}</p>
      </header>
      <main>
        <Hero />
      </main>
    </>
  )
}

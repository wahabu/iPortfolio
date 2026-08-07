import { Header } from './Header'
import { About } from '../sections/About'
import { Hero } from '../sections/Hero'
import { Projects } from '../sections/Projects'

export function PageShell() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Projects />
        <About />
      </main>
    </>
  )
}
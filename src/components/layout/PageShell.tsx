import { Header } from './Header'
import { Hero } from '../sections/Hero'
import { Projects } from '../sections/Projects'

export function PageShell() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Projects />
      </main>
    </>
  )
}
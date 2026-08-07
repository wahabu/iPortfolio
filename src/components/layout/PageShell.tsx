import { Header } from './Header'
import { Hero } from '../sections/Hero'

export function PageShell() {
  return (
    <>
      <Header />

      <main>
        <Hero />
      </main>
    </>
  )
}
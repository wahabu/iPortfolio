import { site } from '../../content/site'

export function PageShell() {
  return (
    <>
      <header>
        <p>{site.name}</p>
      </header>
      <main />
    </>
  )
}

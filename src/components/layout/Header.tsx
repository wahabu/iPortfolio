import { site } from '../../content/site'
import './Header.css'

export function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-header__brand" href="/">
          {site.name}
        </a>

        <nav aria-label="Primary navigation">
          <ul className="site-header__nav">
            <li><a href="#projects">Work</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
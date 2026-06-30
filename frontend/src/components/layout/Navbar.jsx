import './Navbar.css'
import { useScrollY } from '../../hooks'
import { scrollToSection, cn } from '../../utils'
import { NAV_LINKS, SITE } from '../../constants'

export default function Navbar() {
  const scrolled = useScrollY(50)
  const logo = <span className="logo">&lt;{SITE.initials}/&gt;</span>

  return (
    <nav className={cn('navbar', { scrolled })}>
      <div className="container navbar-inner">
        <a href="#" className="logo">{logo}</a>

        <div className="nav-links">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button className="nav-cv">
          <svg viewBox="0 0 24 24" width="15" height="15" stroke="currentColor" strokeWidth="2.2" fill="none">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Download CV
        </button>
      </div>
    </nav>
  )
}

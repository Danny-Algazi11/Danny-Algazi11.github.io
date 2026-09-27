import { useState } from 'react'
import { GitHubIcon, LinkedInIcon } from './icons.jsx'

const LINKS = [
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#top" className="nav-brand" onClick={() => setOpen(false)}>
          <span className="nav-monogram">DA</span>
          <span className="nav-brand-text">
            <span className="nav-name">Danny Algazi</span>
            <span className="nav-role">Full-Stack Developer</span>
          </span>
        </a>
        <nav className="nav-links">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </nav>
        <div className="nav-actions">
          <div className="nav-status">
            <span className="dot dot-pulse" />
            <span>Open to opportunities</span>
          </div>
          <div className="nav-social">
            <a className="icon-btn" href="https://github.com/Danny-Algazi11" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <GitHubIcon />
            </a>
            <a className="icon-btn" href="https://www.linkedin.com/in/danny-gazi-65097a2b0/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
          </div>
          <a className="btn btn-primary nav-cta" href="#contact">Get in Touch</a>
          <button
            className="nav-toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className={open ? 'burger burger-open' : 'burger'} />
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-menu" id="mobile-menu">
          <nav className="mobile-links">
            {LINKS.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mobile-menu-footer">
            <div className="nav-status">
              <span className="dot dot-pulse" />
              <span>Open to opportunities</span>
            </div>
            <div className="nav-social">
              <a className="icon-btn" href="https://github.com/Danny-Algazi11" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <GitHubIcon />
              </a>
              <a className="icon-btn" href="https://www.linkedin.com/in/danny-gazi-65097a2b0/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

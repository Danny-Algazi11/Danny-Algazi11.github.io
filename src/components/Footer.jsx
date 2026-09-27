import { GitHubIcon, LinkedInIcon } from './icons.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>&copy; {new Date().getFullYear()} Danny Algazi &middot; Sahnaya, Syria</span>
        <div className="footer-social">
          <a className="icon-btn" href="https://github.com/Danny-Algazi11" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GitHubIcon />
          </a>
          <a className="icon-btn" href="https://www.linkedin.com/in/danny-gazi-65097a2b0/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </footer>
  )
}

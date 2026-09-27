import { MailIcon, LinkedInIcon } from './icons.jsx'

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="contact-card">
          <h2 className="contact-heading">Let&rsquo;s build something together.</h2>
          <p className="contact-sub">
            Open to internship and junior full-stack developer roles. Reach out and let&rsquo;s
            talk about what you&rsquo;re building.
          </p>
          <div className="contact-actions">
            <a className="btn btn-primary" href="mailto:danny.algazi@gmail.com">
              <MailIcon />
              <span>danny.algazi@gmail.com</span>
            </a>
            <a
              className="btn btn-ghost"
              href="https://www.linkedin.com/in/danny-gazi-65097a2b0/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
              <span>Connect on LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

import { DownloadIcon, ArrowRightIcon } from './icons.jsx'

const STATS = [
  { value: '42', label: 'Automated Tests Written' },
  { value: '182', label: 'Backend Assertions' },
  { value: '2', label: 'Full-Stack Projects Shipped' },
  { value: '2027', label: 'Expected Graduation' },
]

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-glow" />
      <div className="container hero-grid">
        <div>
          <div className="hero-badge">
            <span className="dot dot-pulse" />
            <span>IT Engineering Student @ Damascus University</span>
          </div>
          <h1 className="hero-title">
            Building full-stack products with <span className="accent">React</span> and{' '}
            <span className="accent-secondary">Laravel</span>.
          </h1>
          <p className="hero-lede">
            IT Engineering student specializing in full-stack web development. Experienced in
            building web applications with React and Laravel, backed by a strong foundation in
            Java and SQL &mdash; and always looking to ship something real.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              <span>View Projects</span>
              <ArrowRightIcon />
            </a>
            <a className="btn btn-ghost" href="/Danny_Algazi_CV.pdf" download>
              <DownloadIcon />
              <span>Download Resume</span>
            </a>
          </div>
          <div className="hero-meta">
            <div className="hero-meta-item">
              <span style={{ color: 'var(--primary)' }}>&#9679;</span>
              <span>REACT &amp; LARAVEL</span>
            </div>
            <div className="hero-meta-item">
              <span style={{ color: 'var(--secondary)' }}>&#9679;</span>
              <span>CLEAN ARCHITECTURE</span>
            </div>
            <div className="hero-meta-item">
              <span style={{ color: 'var(--primary)' }}>&#9679;</span>
              <span>SAHNAYA, SYRIA</span>
            </div>
          </div>
        </div>

        <div>
          <div className="terminal">
            <div className="terminal-bar">
              <div className="terminal-dots">
                <span />
                <span />
                <span />
              </div>
              <span className="terminal-title">danny@portfolio:~</span>
              <div className="terminal-status">
                <span className="dot dot-pulse" style={{ background: 'var(--primary)' }} />
                <span>LIVE</span>
              </div>
            </div>
            <div className="terminal-body">
              <div className="terminal-line-cmd">$ whoami</div>
              <div className="terminal-line-out">
                <span className="val-primary">danny_algazi</span> &mdash; it engineering student
              </div>
              <div className="terminal-line-cmd" style={{ marginTop: '0.75rem' }}>$ cat stack.json</div>
              <div className="terminal-line-out">
                {'{ '}frontend: <span className="val">"react"</span>, backend: <span className="val">"laravel"</span>, db: <span className="val">"mysql"</span>{' }'}
              </div>
              <div className="terminal-line-cmd" style={{ marginTop: '0.75rem' }}>$ git log -1 --oneline</div>
              <div className="terminal-line-out">
                <span className="val">a1c9e2f</span> feat: real-time board sync via Reverb
              </div>
              <div className="terminal-line-cmd" style={{ marginTop: '0.75rem' }}>
                $ status --availability
                <span className="terminal-cursor" style={{ marginLeft: '0.4rem' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="stats-strip">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

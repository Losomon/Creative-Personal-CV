import '../../styles/components/PersonalStatement.css'

const valueCards = [
  { title: 'Design', subtitle: 'First' },
  { title: 'Clean', subtitle: 'Code' },
  { title: 'User', subtitle: 'Focused' },
  { title: 'Performance', subtitle: 'Driven' }
]

export default function PersonalStatement() {
  return (
    <section className="personal-statement" aria-label="Personal statement">
      <div className="container">
        <div className="personal-statement-top">
          <span className="section-label">MY PHILOSOPHY</span>

          <h2 className="personal-statement-heading animate-fade-up">
            Designing digital products
            <span className="glow-text">that matter.</span>
          </h2>

          <p className="personal-statement-description animate-fade-up animate-delay-1">
            I combine modern technologies, clean architecture, and thoughtful design to create memorable digital
            experiences.
          </p>

          <div className="metrics" aria-label="Portfolio metrics">
            <div className="metric-item">
              <div className="metric-number">20+</div>
              <div className="metric-label">Projects</div>
            </div>
            <div className="metric-item">
              <div className="metric-number">3+</div>
              <div className="metric-label">Years</div>
            </div>
            <div className="metric-item">
              <div className="metric-number">15+</div>
              <div className="metric-label">Technologies</div>
            </div>
            <div className="metric-item">
              <div className="metric-number metric-number-accent">100%</div>
              <div className="metric-label">Commitment</div>
            </div>
          </div>
        </div>

        <div className="value-cards" aria-label="Core principles">
          {valueCards.map((c, idx) => (
            <div
              key={c.title}
              className={`value-card glass-card animate-fade-up ${idx === 0 ? 'animate-delay-0' : `animate-delay-${idx + 1}`}`}
            >
              <div className="value-card-title">{c.title}</div>
              <div className="value-card-subtitle">{c.subtitle}</div>
            </div>
          ))}
        </div>

        <div className="personal-statement-bottom-note">
          <div className="bottom-split">
            <div className="split-line">
              <span className="split-big">I DON'T JUST BUILD</span>
              <span className="split-big">WEBSITES.</span>
            </div>
            <div className="split-line split-right">
              <span className="split-big">I BUILD EXPERIENCES.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


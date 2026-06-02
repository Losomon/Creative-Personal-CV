import '../../styles/components/Philosophy.css'

export default function Philosophy() {
  const stats = [
    { num: '20+', lbl: 'Projects' },
    { num: '3+', lbl: 'Years' },
    { num: '15+', lbl: 'Technologies' },
    { num: '100%', lbl: 'Commitment' },
  ]

  const values = [
    'Design First',
    'Clean Code',
    'User Focused',
    'Performance Driven',
  ]

  return (
    <section className="philosophy-section reveal" id="philosophy">
      <div className="phil-header">
        <div className="eyebrow">My Philosophy</div>
        <h2 className="phil-title">Designing digital products<br />that matter.</h2>
        <p className="phil-desc">
          I combine modern technologies, clean architecture, and thoughtful design
          to create memorable digital experiences.
        </p>
      </div>

      <div className="phil-stats">
        {stats.map((s, i) => (
          <div key={i} className="phil-stat-card">
            <div className="phil-stat-num">{s.num}</div>
            <div className="phil-stat-lbl">{s.lbl}</div>
          </div>
        ))}
      </div>

      <div className="phil-values">
        {values.map((v, i) => (
          <div key={i} className="phil-value">{v}</div>
        ))}
      </div>

      <div className="phil-manifesto">
        I DON&rsquo;T JUST BUILD<br />
        <span className="gold">WEBSITES.</span><br />
        I BUILD <span className="gold">EXPERIENCES.</span>
      </div>
    </section>
  )
}

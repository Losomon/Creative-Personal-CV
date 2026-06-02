import '../../styles/components/Testimonials.css'

export default function Testimonials() {
  const testimonials = [
    {
      quote: '"Solomon is an exceptional developer — his attention to detail and ability to deliver clean, scalable code on tight deadlines is truly impressive. One of the best I\'ve worked with."',
      name: 'James Kariuki',
      role: 'CTO — FinTech Africa Ltd',
      colorClass: 'ta-1',
      initials: 'JK'
    },
    {
      quote: '"The most reliable and highly skilled developer I\'ve ever worked with. He built our entire platform from scratch and the result was beyond what we imagined. Absolutely recommend."',
      name: 'Amina Njoroge',
      role: 'Founder — Savanna EdTech',
      colorClass: 'ta-2',
      initials: 'AN'
    },
    {
      quote: '"Solomon transformed our outdated system into a beautifully designed, blazing-fast web application. Communication was always clear and he always delivered ahead of schedule."',
      name: 'David Mwenda',
      role: 'Product Manager — TechHub KE',
      colorClass: 'ta-3',
      initials: 'DM'
    }
  ]

  return (
    <section className="testi-section reveal" id="testimonials">
      <div style={{textAlign: 'center'}}>
        <div className="eyebrow" style={{justifyContent: 'center', marginBottom: 12}}>What People Say</div>
        <h2 className="section-title">Client <em>Testimonials</em></h2>
      </div>
      <div className="testi-grid">
        {testimonials.map((t, i) => (
          <div key={i} className="testi-card">
            <div className="testi-stars">
              {Array(5).fill('<i className="ti ti-star-filled" />').map((icon, j) => (
                <i key={j} className="ti ti-star-filled" />
              ))}
            </div>
            <p className="testi-quote">{t.quote}</p>
            <div className="testi-author">
              <div className={`testi-avatar ${t.colorClass}`}>{t.initials}</div>
              <div>
                <div className="testi-name">{t.name}</div>
                <div className="testi-role">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

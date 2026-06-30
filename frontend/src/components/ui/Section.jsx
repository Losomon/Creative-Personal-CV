import './Section.css'

export default function Section({ id, eyebrow, title, eyebrowClass = '', children, className = '' }) {
  return (
    <section id={id} className={`reveal ${className}`}>
      {eyebrow && <div className={`sec-ew ${eyebrowClass}`}>{eyebrow}</div>}
      {title && <h2 className="sec-ttl" dangerouslySetInnerHTML={{ __html: title }} />}
      {children}
    </section>
  )
}

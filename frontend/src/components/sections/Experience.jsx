export default function Experience() {
  const experiences = [
    {
      year: '2021',
      title: 'Started Journey',
      desc: 'Began learning web development with <strong>HTML, CSS & JavaScript</strong> through self-study and online courses.',
    },
    {
      year: '2022',
      title: 'First Freelance',
      desc: 'Landed first client — a local Nairobi startup needing a <strong>React landing page</strong> and branding site.',
    },
    {
      year: '2022',
      title: 'Frequent & Create',
      desc: 'Started building full-stack projects consistently, shipping <strong>5+ products</strong> in under six months.',
    },
    {
      year: '2023',
      title: 'Full Stack Solidar',
      desc: 'Mastered backend with <strong>Node.js, PostgreSQL and Docker</strong> — delivering enterprise-grade APIs.',
    },
    {
      year: '2024',
      title: 'Desktop Head',
      desc: 'Led frontend on a <strong>SaaS platform</strong> serving 10,000+ users across East Africa.',
    },
    {
      year: 'Now',
      title: 'Still Growing',
      desc: 'Exploring <strong>AI integrations</strong> and building products that make a difference in African markets.',
    },
  ]

  return (
    <section className="exp-section" id="experience">
      <div className="exp-header">
        <div>
          <div className="eyebrow">My Journey</div>
          <h2 className="section-title">Experience &amp;<br /><em>Milestones</em></h2>
        </div>
        <p style={{fontSize:14.5, color:'rgba(240,236,224,.44)', lineHeight:1.75, fontWeight:300, maxWidth:380}}>
          A timeline of the moments that shaped who I am as a developer — from writing my
          first line of code to shipping products used by thousands.
        </p>
      </div>
      <div className="exp-cards">
        {experiences.map((exp, index) => (
          <div key={index} className={`exp-card ${index >= 3 ? 'exp-border-b' : ''}`}>
            <div className="exp-year">{exp.year}</div>
            <div className="exp-ttl">{exp.title}</div>
            <div className="exp-desc" dangerouslySetInnerHTML={{__html: exp.desc}} />
          </div>
        ))}
      </div>
    </section>
  )
}

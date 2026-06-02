import '../../styles/components/Skills.css'

export default function Skills() {
  const skillsData = [
    { name: 'Frontend', level: 95 },
    { name: 'Backend', level: 90 },
    { name: 'Database', level: 85 },
    { name: 'UI/UX', level: 90 },
    { name: 'Tools', level: 85 },
    { name: 'Mobile', level: 80 },
  ]

  return (
    <section className="skills-section reveal" id="skills">
      <div className="container-skills">
        <div className="eyebrow">My Technical Arsenal</div>
        <h2 className="section-title">What I Bring<br /><em>to the Table</em></h2>

        <div className="skills-flex">
          {skillsData.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-top">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percent">{skill.level}%</span>
              </div>
              <div className="skill-track">
                <div className="skill-fill" style={{ width: `${skill.level}%` }} />
              </div>
            </div>
          ))}
        </div>

        <div className="pills-row">
          {['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS', 'GraphQL', 'Python', 'Figma'].map((t, i) => (
            <span key={i} className="pill">{t}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

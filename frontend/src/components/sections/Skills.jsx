import '../styles/components/Skills.css'

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind'],
    icons: ['🎨', '⚡', '💛', '⚛️', '🎭']
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Firebase', 'MongoDB', 'Express', 'APIs'],
    icons: ['🟢', '🔥', '🍃', '🚂', '🔗']
  },
  {
    title: 'Tools & More',
    skills: ['Git', 'Figma', 'VS Code', 'Vercel', 'npm'],
    icons: ['📦', '🎨', '💻', '▲', '📥']
  }
]

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="skills-header">
          <span className="section-label">Skills & Technologies</span>
          <h2 className="section-title">My technical arsenal</h2>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className="skill-category glass-card">
              <h3 className="category-title">{category.title}</h3>
              <div className="skill-cards">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="skill-card"
                    style={{ animationDelay: `${catIndex * 0.1 + skillIndex * 0.05}s` }}
                  >
                    <span className="skill-icon">{category.icons[skillIndex]}</span>
                    <span className="skill-name">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
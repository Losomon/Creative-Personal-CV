import '../../styles/components/BeyondCoding.css'

export default function BeyondCoding() {
  const interests = [
    { name: 'UI Design', icon: '🎨' },
    { name: 'Technology Trends', icon: '📈' },
    { name: 'Problem Solving', icon: '🧠' },
    { name: 'Continuous Learning', icon: '📚' },
    { name: 'Open Source', icon: '💻' }
  ];

  return (
    <section className="beyond-coding" id="beyond-coding">
      <div className="container">
        <div className="beyond-coding-header">
          <span className="section-label">Beyond Development</span>
          <h2 className="section-title">Other passions</h2>
        </div>
        
        <div className="beyond-coding-grid">
          {interests.map((interest, index) => (
            <div key={index} className="beyond-coding-item glass-card">
              <div className="interest-icon">{interest.icon}</div>
              <h3 className="interest-title">{interest.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
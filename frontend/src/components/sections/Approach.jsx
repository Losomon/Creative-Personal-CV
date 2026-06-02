import '../../styles/components/Approach.css'

export default function Approach() {
  const approachData = [
    {
      number: '01',
      title: 'Design First',
      description: 'Every project starts with thoughtful design, ensuring beauty and usability from the ground up.'
    },
    {
      number: '02',
      title: 'Performance Matters',
      description: 'Optimizing for speed and efficiency because great design should never compromise performance.'
    },
    {
      number: '03',
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code that follows best practices and is easy to work with.'
    },
    {
      number: '04',
      title: 'User Experience Always',
      description: 'Putting the user at the center of every decision to create intuitive, enjoyable experiences.'
    }
  ];

  return (
    <section className="approach" id="approach">
      <div className="container">
        <div className="approach-header">
          <span className="section-label">My Approach</span>
          <h2 className="section-title">How I work</h2>
        </div>
        
        <div className="approach-grid">
          {approachData.map((item, index) => (
            <div key={index} className="approach-item glass-card">
              <div className="approach-number">{item.number}</div>
              <div className="approach-content">
                <h3 className="approach-title">{item.title}</h3>
                <p className="approach-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
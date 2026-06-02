import '../../styles/components/Approach.css'

export default function Approach() {
  const approachData = [
    {
      number: '01',
      title: 'Design First',
      description: 'Every project starts with thoughtful design, ensuring beauty and usability from the ground up.',
      icon: 'ti ti-palette'
    },
    {
      number: '02',
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code that follows best practices and is easy to work with.',
      icon: 'ti ti-code'
    },
    {
      number: '03',
      title: 'User Focused',
      description: 'Putting the user at the center of every decision to create intuitive, enjoyable experiences.',
      icon: 'ti ti-user'
    },
    {
      number: '04',
      title: 'Performance Driven',
      description: 'Optimizing for speed and efficiency because great design should never compromise performance.',
      icon: 'ti ti-gauge'
    }
  ]

  return (
    <section className="approach reveal" id="approach">
      <div className="phil-header">
        <h2 className="phil-title">MY APPROACH</h2>
      </div>

      <div className="approach-grid">
        {approachData.map((item, index) => (
          <div key={index} className="approach-card">
            <div className="ap-bg-num">{item.number}</div>
            <div className="ap-icon"><i className={item.icon} /></div>
            <h3 className="ap-title">{item.title}</h3>
            <p className="ap-desc">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

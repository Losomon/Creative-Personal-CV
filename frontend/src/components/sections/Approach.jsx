export default function Approach() {
  const approachData = [
    {
      number: '01',
      title: 'Design First',
      description: 'I create intuitive, elegant designs that provide meaningful user experiences.',
      icon: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>'
    },
    {
      number: '02',
      title: 'Clean Code',
      description: 'I write maintainable and scalable code following best practices.',
      icon: '<svg viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>'
    },
    {
      number: '03',
      title: 'User Focused',
      description: 'I build with the user in mind, ensuring usability and accessibility.',
      icon: '<svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>'
    },
    {
      number: '04',
      title: 'Performance Driven',
      description: 'I optimize for speed, performance, and exceptional quality.',
      icon: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>'
    }
  ]

  return (
    <section className="approach" id="approach" style={{background: '#0a0a0a', padding: '80px 64px 0'}}>
      <div className="approach-ew">My Approach</div>
      <div className="approach-grid">
        {approachData.map((item, index) => (
          <div key={index} className={`ap-card reveal ${index > 0 ? `d${index}` : ''}`}>
            <span className="ap-num">{item.number}</span>
            <div className="ap-icon" dangerouslySetInnerHTML={{__html: item.icon}} />
            <h3 className="ap-title">{item.title}</h3>
            <p className="ap-desc">{item.description}</p>
          </div>
        ))}
      </div>
      <div className="scroll-ind">
        <span>Scroll to Explore</span>
        <div className="scroll-box"><div className="scroll-dot"></div></div>
      </div>
    </section>
  )
}
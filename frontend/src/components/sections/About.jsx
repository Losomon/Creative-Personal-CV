import '../../styles/components/About.css'

export default function About() {
  return (
    <section id="about" className="reveal">
      {/* Left Side */}
      <div>
        <div className="about-badge">
          <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>About Me
        </div>
        <div className="sec-ew">Who I Am</div>
        <h2 className="sec-ttl">Turning ideas into<br /><em>digital solutions.</em></h2>
        <p className="about-body">As a passionate full-stack developer with expertise in creating elegant and high-performing web applications, I bring technical precision and creative thinking to every project. With a focus on delivering modern, scalable solutions, I have collaborated with startups and enterprises to transform complex challenges into seamless digital experiences.</p>
        <div className="about-meta">
          <div className="mi">
            <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>Nairobi, Kenya
          </div>
          <div className="mi">
            <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4 10 15.3 15.3 0 014-10z"/></svg>Available Worldwide
          </div>
          <div className="mi">
            <svg viewBox="0 0 24 24"><path d="M5 8l6 6"/><path d="M4 14l6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="M22 22l-5-10-5 10"/><path d="M14 18h6"/></svg>English, Swahili
          </div>
          <div className="mi">
            <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>GMT+3
          </div>
        </div>
        <div className="tech-pills">
          <span className="tpill active">React</span><span className="tpill">Node.js</span><span className="tpill">TypeScript</span>
          <span className="tpill">Next.js</span><span className="tpill">Python</span><span className="tpill">PostgreSQL</span>
          <span className="tpill">Docker</span><span className="tpill">AWS</span><span className="tpill">Figma</span><span className="tpill">GraphQL</span>
        </div>
      </div>
      
      {/* Right Side */}
      <div className="about-right">
        <div className="astat-big">
          <div className="asb-n">20+</div>
          <div className="asb-l">Projects successfully delivered across startups and enterprises</div>
        </div>
        <div className="astat-row">
          <div className="astat-sm">
            <div className="asn">3+</div>
            <div className="asl">Years of professional experience</div>
          </div>
          <div className="astat-sm">
            <div className="asn">95%</div>
            <div className="asl">Client satisfaction rate</div>
          </div>
        </div>
        <div className="astat-sm" style={{background: 'rgba(212,175,55,.06)', borderColor: 'rgba(212,175,55,.2)'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10}}>
            <div style={{width: 8, height: 8, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 8px rgba(34,197,94,.6)'}}></div>
            <span style={{fontSize: 11, color: '#d4af37', fontWeight: 500, letterSpacing: '.06em', textTransform: 'uppercase'}}>Currently available</span>
          </div>
          <div style={{fontSize: 13, color: 'rgba(255,255,255,.45)', lineHeight: 1.6, fontWeight: 300}}>
            Open to freelance projects, full-time roles and exciting collaborations.
          </div>
        </div>
      </div>
    </section>
  );
}
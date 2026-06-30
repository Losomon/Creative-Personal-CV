import '../../styles/components/Experience.css'
export default function Experience() {
  return (
    <section id="experience" className="reveal">
      <div className="exp-top">
        <div>
          <div className="sec-ew">My Journey</div>
          <h2 className="sec-ttl" style={{ marginTop: 12 }}>
            Experience &amp;<br /><em>Milestones</em>
          </h2>
        </div>
        <p className="exp-subdesc">
          A timeline of the moments that shaped who I am as a developer — from writing my first line of code to shipping products used by thousands.
        </p>
      </div>
      <div className="exp-grid">
        <div className="ec">
          <div className="ec-yr">2021</div>
          <div className="ec-ttl">Started Journey</div>
          <div className="ec-txt">
            Began learning web development with <strong>HTML, CSS &amp; JavaScript</strong> through self-study and online courses.
          </div>
        </div>
        <div className="ec">
          <div className="ec-yr">2022</div>
          <div className="ec-ttl">First Freelance</div>
          <div className="ec-txt">
            Landed first client — a local Nairobi startup needing a <strong>React landing page</strong> and branding site.
          </div>
        </div>
        <div className="ec">
          <div className="ec-yr">2022</div>
          <div className="ec-ttl">Frequent &amp; Create</div>
          <div className="ec-txt">
            Started building full-stack projects consistently, shipping <strong>5+ products</strong> in under six months.
          </div>
        </div>
        <div className="ec">
          <div className="ec-yr">2023</div>
          <div className="ec-ttl">Full Stack Solidar</div>
          <div className="ec-txt">
            Mastered backend with <strong>Node.js, PostgreSQL and Docker</strong> — delivering enterprise-grade APIs.
          </div>
        </div>
        <div className="ec">
          <div className="ec-yr">2024</div>
          <div className="ec-ttl">Desktop Head</div>
          <div className="ec-txt">
            Led frontend on a <strong>SaaS platform</strong> serving 10,000+ users across East Africa.
          </div>
        </div>
        <div className="ec">
          <div className="ec-yr">Now</div>
          <div className="ec-ttl">Still Growing</div>
          <div className="ec-txt">
            Exploring <strong>AI integrations</strong> and building products that make a difference in African markets.
          </div>
        </div>
      </div>
    </section>
  );
}
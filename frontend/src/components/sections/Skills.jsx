import '../../styles/components/Skills.css'
export default function Skills() {
  return (
    <section id="skills" className="reveal">
      <div className="skills-intro">
        <div>
          <div className="sec-ew">What I Do</div>
          <h2 className="sec-ttl" style={{ marginTop: 12 }}>
            Core <em>Expertise</em>
          </h2>
        </div>
        <p className="skills-desc">
          I specialise in building end-to-end digital products — from pixel-perfect interfaces to robust backend systems and cloud infrastructure. Every line of code is written with performance, maintainability and user experience in mind.
        </p>
      </div>
      <div className="skills-grid">
        <div className="sk-card featured reveal">
          <div className="sk-ico">
            <svg viewBox="0 0 24 24">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M3 9h18" />
              <path d="M9 21V9" />
            </svg>
          </div>
          <h3>Frontend Development</h3>
          <p>
            Pixel-perfect, accessible UIs with React and Next.js. Performance and user experience are non-negotiable.
          </p>
          <div className="sk-tags">
            <span className="sk-tag">React</span>
            <span className="sk-tag">Next.js</span>
            <span className="sk-tag">TypeScript</span>
            <span className="sk-tag">Tailwind</span>
          </div>
          <div className="sk-bar-wrap">
            <div className="sk-bar">
              <div className="sk-bar-fill" data-w="92" />
            </div>
            <span className="sk-pct">92%</span>
          </div>
        </div>
        <div className="sk-card reveal d1">
          <div className="sk-ico">
            <svg viewBox="0 0 24 24">
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
          </div>
          <h3>Backend Development</h3>
          <p>
            Robust REST and GraphQL APIs with Node.js and Python, backed by scalable database architectures.
          </p>
          <div className="sk-tags">
            <span className="sk-tag">Node.js</span>
            <span className="sk-tag">Python</span>
            <span className="sk-tag">GraphQL</span>
          </div>
          <div className="sk-bar-wrap">
            <div className="sk-bar">
              <div className="sk-bar-fill" data-w="88" />
            </div>
            <span className="sk-pct">88%</span>
          </div>
        </div>
        <div className="sk-card reveal d2">
          <div className="sk-ico">
            <svg viewBox="0 0 24 24">
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
              <line x1="12" y1="18" x2="12.01" y2="18" />
            </svg>
          </div>
          <h3>Mobile Development</h3>
          <p>
            Cross-platform mobile apps with React Native that feel truly native on both iOS and Android.
          </p>
          <div className="sk-tags">
            <span className="sk-tag">React Native</span>
            <span className="sk-tag">Expo</span>
          </div>
          <div className="sk-bar-wrap">
            <div className="sk-bar">
              <div className="sk-bar-fill" data-w="78" />
            </div>
            <span className="sk-pct">78%</span>
          </div>
        </div>
        <div className="sk-card reveal">
          <div className="sk-ico">
            <svg viewBox="0 0 24 24">
              <ellipse cx="12" cy="5" rx="9" ry="3" />
              <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
              <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
            </svg>
          </div>
          <h3>Database Architecture</h3>
          <p>
            Efficient schemas for relational (PostgreSQL, MySQL) and NoSQL (MongoDB, Redis) databases.
          </p>
          <div className="sk-tags">
            <span className="sk-tag">PostgreSQL</span>
            <span className="sk-tag">MongoDB</span>
            <span className="sk-tag">Redis</span>
          </div>
          <div className="sk-bar-wrap">
            <div className="sk-bar">
              <div className="sk-bar-fill" data-w="84" />
            </div>
            <span className="sk-pct">84%</span>
          </div>
        </div>
        <div className="sk-card reveal d1">
          <div className="sk-ico">
            <svg viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </div>
          <h3>UI/UX Design</h3>
          <p>
            Design systems, prototypes and user flows in Figma — bridging the gap between design and code.
          </p>
          <div className="sk-tags">
            <span className="sk-tag">Figma</span>
            <span className="sk-tag">Design Systems</span>
          </div>
          <div className="sk-bar-wrap">
            <div className="sk-bar">
              <div className="sk-bar-fill" data-w="85" />
            </div>
            <span className="sk-pct">85%</span>
          </div>
        </div>
        <div className="sk-card reveal d2">
          <div className="sk-ico">
            <svg viewBox="0 0 24 24">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
          </div>
          <h3>DevOps &amp; Cloud</h3>
          <p>
            CI/CD pipelines, Docker containerisation, and cloud deployments on AWS and Vercel.
          </p>
          <div className="sk-tags">
            <span className="sk-tag">AWS</span>
            <span className="sk-tag">Docker</span>
            <span className="sk-tag">CI/CD</span>
            <span className="sk-tag">Vercel</span>
          </div>
          <div className="sk-bar-wrap">
            <div className="sk-bar">
              <div className="sk-bar-fill" data-w="74" />
            </div>
            <span className="sk-pct">74%</span>
          </div>
        </div>
      </div>
    </section>
  );
}
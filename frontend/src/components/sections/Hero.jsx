import { useEffect, useRef } from 'react'
import '../../styles/components/Hero.css'

export default function Hero() {
  const heroRef = useRef(null)
  const glowRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!glowRef.current || !heroRef.current) return
      const rect = heroRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      glowRef.current.style.left = `${x}px`
      glowRef.current.style.top = `${y}px`
    }

    const hero = heroRef.current
    if (hero) {
      hero.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      if (hero) {
        hero.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [])

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-glow" ref={glowRef} />

      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-intro animate-fade-up">Hello, I'm</span>
          <h1 className="hero-name animate-fade-up animate-delay-1">
            Solomon<br />Mwangi
          </h1>
          <p className="hero-role animate-fade-up animate-delay-2">
            Full-Stack Developer
          </p>
          <p className="hero-tagline animate-fade-up animate-delay-3">
            Crafting premium digital experiences with modern technologies.
          </p>

          <div className="hero-buttons animate-fade-up animate-delay-4">
            <button className="btn btn-primary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                <polyline points="7.5 4.21 12 6.81 16.5 4.21"/>
                <polyline points="7.5 19.79 7.5 14.6 3 12"/>
                <polyline points="21 12 16.5 14.6 16.5 19.79"/>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                <line x1="12" y1="22.08" x2="12" y2="12"/>
              </svg>
              View Projects
            </button>
            <button className="btn btn-outline">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download CV
            </button>
          </div>
        </div>

        <div className="hero-visual animate-fade-up animate-delay-2">
          <div className="hero-code-window">
            <div className="window-header">
              <div className="window-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span className="window-title">portfolio.tsx</span>
            </div>
            <div className="window-content">
              <div className="code-line"><span className="code-keyword">const</span> <span className="code-variable">developer</span> = {'{'}</div>
              <div className="code-line indent">name: <span className="code-string">"Solomon Mwangi"</span>,</div>
              <div className="code-line indent">role: <span className="code-string">"Full-Stack Developer"</span>,</div>
              <div className="code-line indent">focus: <span className="code-string">"Premium Web Experiences"</span>,</div>
              <div className="code-line indent">stack: [<span className="code-string">"React"</span>, <span className="code-string">"Node.js"</span>, <span className="code-string">"TypeScript"</span>]</div>
              <div className="code-line">{'}'}</div>
              <div className="code-line">&nbsp;</div>
              <div className="code-line"><span className="code-function">export default</span> <span className="code-variable">developer</span></div>
              <div className="cursor-blink" />
            </div>
          </div>

          <div className="floating-badge badge-1">
            <span className="badge-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
              </svg>
            </span>
            Premium Quality
          </div>
          <div className="floating-badge badge-2">
            <span className="badge-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
              </svg>
            </span>
            Lightning Fast
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <span>Scroll to explore</span>
        <div className="scroll-arrow">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="12" y1="5" x2="12" y2="19"/>
            <polyline points="19 12 12 19 5 12"/>
          </svg>
        </div>
      </div>
    </section>
  )
}
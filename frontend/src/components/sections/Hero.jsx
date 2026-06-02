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
      <div className="bg-grid" />
      <div className="bg-glow-1" />
      <div className="bg-glow-2" />

      {/* 3-Column Hero */}
      <div className="hero-grid">
        {/* LEFT: Text */}
        <div className="hero-text-col">
          <p className="greeting">Hi, I'm</p>
          <h1 className="hero-heading">
            Solomon<br />
            Mwangi
          </h1>
          <p className="hero-role">Full-Stack Developer & UI Enthusiast</p>
          <p className="hero-desc">
            I design and build premium digital experiences that are fast,
            scalable and unforgettable.
          </p>
          <div className="hero-actions">
            <button className="btn-primary">
              View My Work <i className="ti ti-arrow-right" />
            </button>
            <button className="btn-secondary">
              <i className="ti ti-send" /> Hire Me
            </button>
          </div>
          <div className="social-links">
            <a href="#" className="social-link" aria-label="GitHub">
              <i className="ti ti-brand-github" />
            </a>
            <a href="#" className="social-link" aria-label="LinkedIn">
              <i className="ti ti-brand-linkedin" />
            </a>
            <a href="#" className="social-link" aria-label="Twitter">
              <i className="ti ti-brand-twitter" />
            </a>
            <a href="#" className="social-link" aria-label="Email">
              <i className="ti ti-mail" />
            </a>
          </div>
        </div>

        {/* CENTER: Photo */}
        <div className="hero-visual-col">
          <div className="photo-container">
            <div className="orbit-ring-2">
              <div className="orbit-dot-2" />
            </div>
            <div className="orbit-ring">
              <div className="orbit-dot" />
            </div>
            <div className="photo-circle">
              <span className="photo-monogram">SM</span>
            </div>
            <div className="accent-arc">
              <div className="freelance-badge">
                <div className="pulse-dot" />
                Available for Freelance
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Stats */}
        <div className="stats-col">
          <div className="stat-card">
            <div className="stat-icon-wrap"><i className="ti ti-rocket" /></div>
            <div>
              <div className="stat-num">20+</div>
              <div className="stat-lbl">Projects Completed</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon-wrap"><i className="ti ti-code" /></div>
            <div>
              <div className="stat-num">3+</div>
              <div className="stat-lbl">Years Experience</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon-wrap"><i className="ti ti-star" /></div>
            <div>
              <div className="stat-num">95%</div>
              <div className="stat-lbl">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

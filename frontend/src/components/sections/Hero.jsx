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
          <p className="hero-intro animate-fade-up">Hi, I'm</p>
          <h1 className="hero-name animate-fade-up animate-delay-1">
            Solomon Mwangi
          </h1>
          <p className="hero-role animate-fade-up animate-delay-2">
            Full-Stack Developer & UI Enthusiast
          </p>

          <div className="hero-buttons animate-fade-up animate-delay-3">
            <button className="btn btn-primary">View My Work →</button>
            <button className="btn btn-outline">Hire Me</button>
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
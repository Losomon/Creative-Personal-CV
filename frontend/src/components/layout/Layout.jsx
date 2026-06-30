import { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children, onIntersect }) {
  useEffect(() => {
    if (!onIntersect) return
    const elements = document.querySelectorAll('.reveal')
    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            onIntersect(entry)
          }
        })
      },
      { threshold: 0.08 }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [onIntersect])

  return (
    <div className="app">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

import '../../styles/components/Testimonials.css'

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Solomon delivers clean, premium interfaces with strong attention to detail. His work elevated our entire product.",
      author: "James Mitchell",
      role: "Product Lead",
      company: "Tech Academy",
      image: "/placeholder-client1.jpg"
    },
    {
      quote: "Exceptional frontend skills combined with a keen eye for design. Every project exceeded expectations.",
      author: "Sarah Chen",
      role: "Creative Director",
      company: "Design Studio",
      image: "/placeholder-client2.jpg"
    },
    {
      quote: "A developer who truly understands both code and aesthetics. The perfect balance of function and form.",
      author: "Michael Oduya",
      role: "CTO",
      company: "Startup Hub",
      image: "/placeholder-client3.jpg"
    }
  ];

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="testimonials-header">
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">What people say</h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, index) => (
            <div key={index} className="testimonial-card glass-card">
              <div className="quote-mark">"</div>
              <p className="testimonial-quote">{t.quote}</p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <img src={t.image} alt={`${t.author} avatar`} />
                </div>
                <div className="author-info">
                  <span className="author-name">{t.author}</span>
                  <span className="author-role">{t.role}</span>
                  <span className="author-company">{t.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
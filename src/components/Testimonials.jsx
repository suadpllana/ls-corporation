import React, { useRef } from 'react'

export default function Testimonials({ t }) {
  const trackRef = useRef(null)

  const scroll = (direction) => {
    const track = trackRef.current
    if (!track) return
    const amount = Math.round(track.clientWidth * 0.85)
    track.scrollBy({ left: direction * amount, behavior: 'smooth' })
  }

  return (
    <section id="testimonials">
      <div className="section-header-row">
        <div>
          <p className="section-label">{t.testimonials.label}</p>
          <h2 className="section-title">{t.testimonials.title}</h2>
          <p className="section-sub">{t.testimonials.sub}</p>
        </div>
        <div className="carousel-controls" aria-label="Testimonial navigation">
          <button type="button" className="carousel-arrow" onClick={() => scroll(-1)} aria-label="Scroll testimonials left">←</button>
          <button type="button" className="carousel-arrow" onClick={() => scroll(1)} aria-label="Scroll testimonials right">→</button>
        </div>
      </div>

      <div className="testimonials-carousel" ref={trackRef}>
        {t.testimonials.items.map((item, idx) => (
          <article className="testimonial-card" key={`${item.name}-${idx}`}>
            <div className="testimonial-quote">“</div>
            <p className="testimonial-text">{item.quote}</p>
            <div className="testimonial-person">
              <div className="testimonial-avatar">{item.name.split(' ').map((part) => part[0]).join('')}</div>
              <div>
                <h3>{item.name}</h3>
                <span>{item.role}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
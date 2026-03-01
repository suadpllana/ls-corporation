import React, { useState } from 'react'

export default function FAQ({ t }) {
  const [openFaq, setOpenFaq] = useState(null)
  const toggle = (idx) => setOpenFaq(openFaq === idx ? null : idx)

  return (
    <section id="faq">
      <p className="section-label">{t.faq.label}</p>
      <h2 className="section-title">{t.faq.title}</h2>
      <p className="section-sub">{t.faq.sub}</p>
      <div className="faq-list">
        {t.faq.items.map((item, idx) => (
          <div className="faq-item" key={idx}>
            <button
              className={'faq-q' + (openFaq === idx ? ' open' : '')}
              onClick={() => toggle(idx)}
            >
              {item.q}
              <span className="icon">{openFaq === idx ? '−' : '+'}</span>
            </button>
            <div className={'faq-a' + (openFaq === idx ? ' open' : '')}>{item.a}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

import React from 'react'

export default function Why({ t }) {
  return (
    <section id="why">
      <p className="section-label">{t.why.label}</p>
      <h2 className="section-title">{t.why.title}</h2>
      <p className="section-sub">{t.why.sub}</p>
      <div className="why-grid">
        <div className="why-card">
          <div className="why-icon">💰</div>
          <h3>{t.why.c1h}</h3>
          <p>{t.why.c1p}</p>
        </div>
        <div className="why-card">
          <div className="why-icon">🤖</div>
          <h3>{t.why.c2h}</h3>
          <p>{t.why.c2p}</p>
        </div>
        <div className="why-card">
          <div className="why-icon">🛡️</div>
          <h3>{t.why.c3h}</h3>
          <p>{t.why.c3p}</p>
        </div>
      </div>
    </section>
  )
}

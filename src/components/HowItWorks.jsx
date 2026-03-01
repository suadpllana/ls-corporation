import React from 'react'

export default function HowItWorks({ t }) {
  return (
    <section id="how">
      <p className="section-label">{t.how.label}</p>
      <h2 className="section-title">{t.how.title}</h2>
      <p className="section-sub">{t.how.sub}</p>
      <div className="steps">
        <div className="step">
          <span className="step-num">01</span>
          <h3>{t.how.s1h}</h3>
          <p>{t.how.s1p}</p>
          <div className="step-arrow">→</div>
        </div>
        <div className="step">
          <span className="step-num">02</span>
          <h3>{t.how.s2h}</h3>
          <p>{t.how.s2p}</p>
          <div className="step-arrow">→</div>
        </div>
        <div className="step">
          <span className="step-num">03</span>
          <h3>{t.how.s3h}</h3>
          <p>{t.how.s3p}</p>
        </div>
      </div>
    </section>
  )
}

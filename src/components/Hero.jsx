import React from 'react'
import { scrollTo } from '../utils'

export default function Hero({ t }) {
  return (
    <section id="hero">
      <div className="hero-bg"></div>
      <div className="hero-content">
        <div className="hero-badge">{t.hero.badge}</div>
        <h1>
          {t.hero.h1a}<br />
          <span className="highlight">{t.hero.h1b}</span>
        </h1>
        <p className="hero-sub">{t.hero.sub}</p>
        <div className="hero-actions">
          <button className="btn-primary" onClick={() => scrollTo('pricing')}>{t.hero.btn1}</button>
          <button className="btn-outline" onClick={() => scrollTo('how')}>{t.hero.btn2}</button>
        </div>
        <div className="hero-stats">
          <div><div className="stat-num">250€</div><div className="stat-label">{t.hero.s1}</div></div>
          <div><div className="stat-num">48h</div><div className="stat-label">{t.hero.s2}</div></div>
          <div><div className="stat-num">24/7</div><div className="stat-label">{t.hero.s3}</div></div>
        </div>
      </div>
      <div className="hero-orb">
        <div className="orb-inner">
          <div className="orb-ring"></div>
          <div className="orb-ring"></div>
          <div className="orb-ring"></div>
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import { scrollTo } from '../utils'

const NO_BASIC = [6, 7]
const NO_BIZ   = [7]

export default function Pricing({ t, onSelectPackage }) {
  const pick = (name) => {
    onSelectPackage(name)
    scrollTo('contact')
  }
  return (
    <section id="pricing">
      <p className="section-label">{t.pricing.label}</p>
      <h2 className="section-title">{t.pricing.title}</h2>
      <p className="section-sub">{t.pricing.sub}</p>
      <div className="pricing-grid">

        {/* Basic */}
        <div className="price-card">
          <div className="price-name">Basic</div>
          <div className="price-amount"><span>€</span>29</div>
          <div className="price-period">{t.pricing.period}</div>
          <ul className="price-features">
            {t.pricing.basicF.map((f, i) => (
              <li key={i} className={NO_BASIC.includes(i) ? 'no' : ''}>{f}</li>
            ))}
          </ul>
          <button className="btn-outline" style={{ width: '100%' }} onClick={() => pick('Basic')}>
            {t.pricing.basicBtn}
          </button>
        </div>

        {/* Business */}
        <div className="price-card featured">
          <div className="price-badge">{t.pricing.popular}</div>
          <div className="price-name">Business</div>
          <div className="price-amount"><span>€</span>59</div>
          <div className="price-period">{t.pricing.period}</div>
          <ul className="price-features">
            {t.pricing.bizF.map((f, i) => (
              <li key={i} className={NO_BIZ.includes(i) ? 'no' : ''}>{f}</li>
            ))}
          </ul>
          <button className="btn-primary" style={{ width: '100%' }} onClick={() => pick('Business')}>
            {t.pricing.bizBtn}
          </button>
        </div>

        {/* Enterprise */}
        <div className="price-card">
          <div className="price-name">Enterprise</div>
          <div className="price-amount"><span>€</span>99</div>
          <div className="price-period">{t.pricing.period}</div>
          <ul className="price-features">
            {t.pricing.entF.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
          <button className="btn-outline" style={{ width: '100%' }} onClick={() => pick('Enterprise')}>
            {t.pricing.entBtn}
          </button>
        </div>

      </div>
    </section>
  )
}

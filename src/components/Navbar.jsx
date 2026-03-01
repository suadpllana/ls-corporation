import React from 'react'
import { scrollTo } from '../utils'

export default function Navbar({ t, lang, setLang }) {
  return (
    <nav>
      <div className="logo">LS<span>Corp</span></div>
      <ul>
        <li><a href="#why">{t.nav.why}</a></li>
        <li><a href="#how">{t.nav.how}</a></li>
        <li><a href="#pricing">{t.nav.pricing}</a></li>
        <li><a href="#faq">{t.nav.faq}</a></li>
      </ul>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <button
          onClick={() => setLang(lang === 'en' ? 'sq' : 'en')}
          style={{
            background: 'transparent',
            border: '1px solid rgba(13,148,136,0.4)',
            borderRadius: '100px',
            padding: '0.4rem 0.85rem',
            fontSize: '0.8rem',
            fontFamily: "'DM Sans', sans-serif",
            cursor: 'pointer',
            color: 'var(--accent)',
            fontWeight: 500,
            transition: 'all .2s',
          }}
          title="Switch language"
        >
          {lang === 'en' ? '🇦🇱 SQ' : '🇬🇧 EN'}
        </button>
        <button className="nav-cta" onClick={() => scrollTo('kontakt')}>
          {t.nav.cta}
        </button>
      </div>
    </nav>
  )
}

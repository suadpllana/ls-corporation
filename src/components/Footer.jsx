import React from 'react'

export default function Footer({ t }) {
  return (
    <footer>
      <div className="logo">LS<span style={{ color: 'var(--accent)' }}>Corp</span></div>
      <span>{t.footer.rights}</span>
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        <a href="#">{t.footer.privacy}</a>
        <a href="#">{t.footer.terms}</a>
        <a href="#kontakt">{t.footer.contact}</a>
      </div>
    </footer>
  )
}

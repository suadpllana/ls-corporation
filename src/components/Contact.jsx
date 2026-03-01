import React, { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'

const EJS_SERVICE  = import.meta.env.VITE_EJS_SERVICE
const EJS_TEMPLATE = import.meta.env.VITE_EJS_TEMPLATE
const EJS_KEY      = import.meta.env.VITE_EJS_KEY

export default function Contact({ t, selectedPackage, setSelectedPackage }) {
  const [form, setForm]           = useState({ name: '', email: '', package: '', message: '' })

  // Pre-fill package when navigated from Pricing
  useEffect(() => {
    if (selectedPackage) {
      setForm((f) => ({ ...f, package: selectedPackage }))
    }
  }, [selectedPackage])
  const [sending, setSending]     = useState(false)
  const [sent, setSent]           = useState(false)
  const [sendError, setSendError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setSendError('')
    try {
      await emailjs.send(
        EJS_SERVICE,
        EJS_TEMPLATE,
        {
          from_name:  form.name,
          from_email: form.email,
          package:    form.package,
          message:    form.message,
        },
        EJS_KEY,
      )
      setSent(true)
      setForm({ name: '', email: '', package: '', message: '' })
      setSelectedPackage('')
    } catch (err) {
      setSendError(t.contact.error)
      console.error(err)
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="kontakt">
      <div className="contact-container">

        {/* ── Left info column ── */}
        <div className="contact-info">
          <p className="section-label">{t.contact.label}</p>
          <h2 className="section-title">{t.contact.title}</h2>
          <p className="section-sub">{t.contact.sub}</p>
          <div className="contact-methods">
            <div className="method-item">
              <div className="method-icon">📍</div>
              <div>
                <h4>Location</h4>
                <p>Prishtina</p>
              </div>
            </div>
            <div className="method-item">
              <div className="method-icon">📞</div>
              <div>
                <h4>{t.contact.phoneLabel}</h4>
                <a href="tel:+38344960113">+383 44 960 113</a>
              </div>
            </div>
          </div>
        </div>

        {/* ── Right form column ── */}
        <div className="contact-form-wrapper">
          {sent ? (
            <div style={{
              background: 'rgba(13,148,136,0.10)',
              border: '1px solid rgba(13,148,136,0.35)',
              borderRadius: '12px',
              padding: '2.5rem',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✅</div>
              <h3 style={{ marginBottom: '0.5rem' }}>{t.contact.successTitle}</h3>
              <p style={{ opacity: 0.7 }}>{t.contact.successSub}</p>
              <button
                className="btn-outline"
                style={{ marginTop: '1.5rem' }}
                onClick={() => setSent(false)}
              >
                {t.contact.sendAnother}
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="input-group">
                <input
                  type="text" name="from_name"
                  placeholder={t.contact.namePH}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>
              <div className="input-group">
                <input
                  type="email" name="from_email"
                  placeholder={t.contact.emailPH}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>
              <div className="input-group">
                <select
                  name="service"
                  value={form.package}
                  onChange={(e) => {
                    setForm({ ...form, package: e.target.value })
                    setSelectedPackage(e.target.value)
                  }}
                >
                  <option value="" disabled>{t.contact.packagePH}</option>
                  {t.contact.packages.map((p, i) => (
                    <option key={i} value={p}>{p}</option>
                  ))}
                </select>
              </div>
              <div className="input-group">
                <textarea
                  name="message"
                  placeholder={t.contact.msgPH}
                  rows="4"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>
              {sendError && (
                <p style={{ color: '#ef4444', fontSize: '0.85rem', marginTop: '-0.5rem' }}>
                  {sendError}
                </p>
              )}
              <button type="submit" className="btn-primary" disabled={sending}>
                {sending ? t.contact.sending : t.contact.sendBtn}
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  )
}

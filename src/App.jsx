import React, { useEffect, useState } from 'react'
import T from './i18n.jsx'
import Navbar      from './components/Navbar'
import Hero        from './components/Hero'
import Why         from './components/Why'
import HowItWorks  from './components/HowItWorks'
import Pricing     from './components/Pricing'
import FAQ         from './components/FAQ'
import Contact     from './components/Contact'
import Footer      from './components/Footer'

export default function App() {
  const [lang, setLang]                   = useState('en')
  const [selectedPackage, setSelectedPackage] = useState('')
  const t = T[lang]

  // Scroll-reveal animation for cards and steps
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.style.animation = 'fadeUp 0.7s ease both'
          observer.unobserve(e.target)
        }
      })
    }, { threshold: 0.1 })

    document.querySelectorAll('.why-card, .step, .price-card, .faq-item').forEach((el) => {
      el.style.opacity = '0'
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [lang]) // re-run when language changes so newly rendered cards animate in

  return (
    <div>
      <Navbar     t={t} lang={lang} setLang={setLang} />
      <Hero       t={t} />
      <Why        t={t} />
      <HowItWorks t={t} />
      <Pricing    t={t} onSelectPackage={setSelectedPackage} />
      <FAQ        t={t} />
      <Contact    t={t} selectedPackage={selectedPackage} setSelectedPackage={setSelectedPackage} />
      <Footer     t={t} />
    </div>
  )
}


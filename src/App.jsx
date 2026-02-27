import React, { useEffect, useState } from 'react'

export default function App() {
  const [openFaq, setOpenFaq] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.animation = 'fadeUp 0.7s ease both'
          observer.unobserve(e.target)
        }
      })
    }, { threshold: 0.1 })

    document.querySelectorAll('.why-card, .step, .price-card, .faq-item').forEach(el => {
      el.style.opacity = '0'
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx)
  }

  return (
    <div>
      <nav>
        <div className="logo">LS<span>Corp</span></div>
        <ul>
          <li><a href="#why">Pse ne?</a></li>
          <li><a href="#how">Si funksionon</a></li>
          <li><a href="#pricing">Çmimet</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
        <button className="nav-cta" onClick={() => document.getElementById('cta').scrollIntoView({behavior:'smooth'})}>Fillo Tani</button>
      </nav>

      <section id="hero">
        <div className="hero-bg"></div>
        <div className="hero-content">
          <div className="hero-badge">Website Rental për Biznese Shqiptare</div>
          <h1>Website Profesional.<br/><span className="highlight">Kosto Fillestare: 0€.</span></h1>
          <p className="hero-sub">LS Corporation ndërton, menaxhon dhe optimizon faqen tuaj web. Ju paguani vetëm abonimin mujor — pa investim fillestar, pa surpriza.</p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => document.getElementById('pricing').scrollIntoView({behavior:'smooth'})}>Shiko Pakotet →</button>
            <button className="btn-outline" onClick={() => document.getElementById('how').scrollIntoView({behavior:'smooth'})}>Si funksionon?</button>
          </div>
          <div className="hero-stats">
            <div>
              <div className="stat-num">0€</div>
              <div className="stat-label">Kosto fillestare</div>
            </div>
            <div>
              <div className="stat-num">48h</div>
              <div className="stat-label">Dil online</div>
            </div>
            <div>
              <div className="stat-num">24/7</div>
              <div className="stat-label">Mirëmbajtje</div>
            </div>
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

      <section id="why">
        <p className="section-label">Avantazhet tona</p>
        <h2 className="section-title">Pse të zgjedhësh<br/>LS Corporation?</h2>
        <p className="section-sub">Ne heqim barrierat tradicionale të dixhitalizimit — kosto të larta fillestare, agjenci jo-responsive, teknologji të komplikuar.</p>
        <div className="why-grid">
          <div className="why-card">
            <div className="why-icon">💰</div>
            <h3>Kursim Real Parash</h3>
            <p>Nuk paguan asgjë para se faqja juaj të jetë gati. Pa investim fillestar, pa faturë surprizë. Abonimi mujor mbulon gjithçka — dizajn, hosting, domain dhe mirëmbajtje.</p>
          </div>
          <div className="why-card">
            <div className="why-icon">🤖</div>
            <h3>AI Bots të Integruar</h3>
            <p>Çdo paketë vjen me chatbot inteligjent të integruar që i përgjigjet klientëve tuaj 24/7, mbledh lead-e dhe automatison komunikimin — pa kosto shtesë.</p>
          </div>
          <div className="why-card">
            <div className="why-icon">🛡️</div>
            <h3>Mirëmbajtje Totale</h3>
            <p>Ekipi ynë kujdeset për çdo detaj teknik: update-et, sigurinë, backup-et dhe performancën. Ju fokusoheni te biznesi, ne te teknologjia.</p>
          </div>
        </div>
      </section>

      <section id="how">
        <p className="section-label">Procesi ynë</p>
        <h2 className="section-title">Gati Online në 3 Hapa</h2>
        <p className="section-sub">Nuk duhet të kesh njohuri teknike. Procesi ynë është i thjeshtë dhe transparent.</p>
        <div className="steps">
          <div className="step">
            <span className="step-num">01</span>
            <h3>Zgjidh Dizajnin</h3>
            <p>Shfleton koleksionin tonë të template-ve profesionale dhe zgjedh stilin që përkon me brandin tuaj. Mund të personalizosh ngjyrat, fontet dhe strukturën.</p>
            <div className="step-arrow">→</div>
          </div>
          <div className="step">
            <span className="step-num">02</span>
            <h3>Ne e Modifikojmë</h3>
            <p>Ekipi ynë integron logon, tekstin, fotot dhe informacionin e biznesit tuaj. Ju shikoni një preview dhe bëni çdo ndryshim që dëshironi pa kosto shtesë.</p>
            <div className="step-arrow">→</div>
          </div>
          <div className="step">
            <span className="step-num">03</span>
            <h3>Dil Online</h3>
            <p>Pas aprovimit tuaj, faqja publikon live brenda 48 orësh. Domain, hosting dhe SSL certifikata janë të gjitha të kujdesura prej nesh.</p>
          </div>
        </div>
      </section>

      <section id="pricing">
        <p className="section-label">Pakotet tona</p>
        <h2 className="section-title">Zgjidhje për Çdo Biznes</h2>
        <p className="section-sub">Pa kontrata afatgjata. Mund ta ndryshosh ose anulosh abonimin çdo muaj.</p>
        <div className="pricing-grid">
          <div className="price-card">
            <div className="price-name">Basic</div>
            <div className="price-amount"><span>€</span>29</div>
            <div className="price-period">/ muaj — Faturim mujor</div>
            <ul className="price-features">
              <li>Deri 5 faqe</li>
              <li>Domain .al ose .com</li>
              <li>Hosting & SSL</li>
              <li>AI Chatbot Basic</li>
              <li>Formë kontakti</li>
              <li>Mirëmbajtje mujore</li>
              <li className="no">E-Commerce</li>
              <li className="no">Integrimi CRM</li>
            </ul>
            <button className="btn-outline" style={{width:'100%'}} onClick={() => document.getElementById('cta').scrollIntoView({behavior:'smooth'})}>Zgjidh Basic</button>
          </div>

          <div className="price-card featured">
            <div className="price-badge">Më popular</div>
            <div className="price-name">Business</div>
            <div className="price-amount"><span>€</span>59</div>
            <div className="price-period">/ muaj — Faturim mujor</div>
            <ul className="price-features">
              <li>Deri 15 faqe</li>
              <li>Domain .al ose .com</li>
              <li>Hosting & SSL Premium</li>
              <li>AI Chatbot i avancuar</li>
              <li>Blog & Lajme</li>
              <li>SEO Optimizim</li>
              <li>Google Analytics</li>
              <li className="no">E-Commerce</li>
            </ul>
            <button className="btn-primary" style={{width:'100%'}} onClick={() => document.getElementById('cta').scrollIntoView({behavior:'smooth'})}>Zgjidh Business</button>
          </div>

          <div className="price-card">
            <div className="price-name">Enterprise</div>
            <div className="price-amount"><span>€</span>99</div>
            <div className="price-period">/ muaj — Faturim mujor</div>
            <ul className="price-features">
              <li>Faqe të pakufizuara</li>
              <li>Domain + Email biznes</li>
              <li>Hosting Dedikuar</li>
              <li>AI Chatbot + CRM</li>
              <li>E-Commerce Shopify/WooCommerce</li>
              <li>SEO + Analitikë të avancuar</li>
              <li>Integrimi API</li>
              <li>Support prioritar 24/7</li>
            </ul>
            <button className="btn-outline" style={{width:'100%'}} onClick={() => document.getElementById('cta').scrollIntoView({behavior:'smooth'})}>Zgjidh Enterprise</button>
          </div>
        </div>
      </section>

      <section id="faq">
        <p className="section-label">Pyetje të shpeshta</p>
        <h2 className="section-title">Keni Pyetje?</h2>
        <p className="section-sub">Këtu gjeni përgjigjet më të zakonshme. Nëse keni diçka tjetër, na kontaktoni.</p>

        <div className="faq-list">
          {[{
            q: 'A jam unë pronar i domain-it?',
            a: 'Domain-i regjistrohet në emrin tuaj dhe mbetet i juaji gjithmonë. Nëse vendosni të largoheni nga LS Corporation, domain-i do të transferohet tek ju plotësisht falas. Ne menaxhojmë rinovimet vjetore si pjesë e abonimit tuaj.'
          },{
            q: 'A mund ta ndërpres abonimin kur të dua?',
            a: 'Po, absolutisht. Nuk ka kontrata afatgjata apo penalitete. Mund ta anulosh abonimin çdo muaj me 30 ditë njoftim paraprak. Ne do t\'ju ndihmojmë të eksportoni të dhënat tuaja pa problem.'
          },{
            q: 'A mund ta ndryshoj paketën në çdo kohë?',
            a: 'Po. Mund të ngritesh ose të ulesh në paketë çdo muaj, sipas nevojave të biznesit tuaj. Ndryshimi hyn në fuqi në ciklin e ardhshëm faturimi pa asnjë kosto shtesë.'
          },{
            q: 'Çfarë ndodh nëse faqja jonë ka probleme teknike?',
            a: 'Ekipi ynë i monitoron faqet 24/7. Nëse ka ndonjë problem, ne e adresojmë automatikisht pa qenë nevoja të na kontaktoni. Për paketat Business dhe Enterprise, koha e reagimit është brenda 2 orësh.'
          },{
            q: 'A mund të bëj ndryshime në faqen time pas lansimit?',
            a: 'Po. Çdo paketë përfshin ndryshime mujore pa kosto shtesë (Basic: deri 3 ndryshime, Business: 8, Enterprise: të pakufizuara). Ndryshimet urgjente trajtohen brenda 24 orësh.'
          }].map((item, idx) => (
            <div className="faq-item" key={idx}>
              <button className={"faq-q" + (openFaq===idx? ' open':'')} onClick={() => toggleFaq(idx)}>
                {item.q}
                <span className="icon">{openFaq===idx? '−' : '+'}</span>
              </button>
              <div className={"faq-a" + (openFaq===idx? ' open':'')}>
                {item.a}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="cta">
        <div className="cta-box">
          <h2>Gati të Filloni?</h2>
          <p>Kontaktoni LS Corporation sot dhe merrni konsultën e parë falas. Faqja juaj mund të jetë online brenda 48 orësh.</p>
          <div style={{display:'flex',gap:'1rem',justifyContent:'center',flexWrap:'wrap'}}>
            <button className="btn-primary">Na Kontaktoni →</button>
            <button className="btn-outline">Shiko Portfolio</button>
          </div>
          <p style={{marginTop:'1.5rem',fontSize:'0.82rem',color:'var(--slate)'}}>Nuk kërkohet kartë krediti · Pa kontratë · Anulo kur të duash</p>
        </div>
      </section>

      <footer>
        <div className="logo">LS<span style={{color:'var(--accent)'}}>Corp</span></div>
        <span>© 2025 LS Corporation. Të gjitha të drejtat e rezervuara.</span>
        <div style={{display:'flex',gap:'1.5rem'}}>
          <a href="#">Politika e Privatësisë</a>
          <a href="#">Termat e Shërbimit</a>
          <a href="#">Kontakt</a>
        </div>
      </footer>
    </div>
  )
}

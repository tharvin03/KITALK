import { useState, useEffect } from 'react'
import Background from './components/Background'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import DemoModal from './components/DemoModal'
import HeroSection from './sections/HeroSection'
import ProductsSection from './sections/ProductsSection'
import UseCasesSection from './sections/UseCasesSection'
import PricingSection from './sections/PricingSection'
import ContactSection from './sections/ContactSection'

const SECTIONS = ['hero', 'products', 'usecases', 'pricing', 'contact']

export default function App() {
  const [active,   setActive]   = useState('hero')
  const [showDemo, setShowDemo] = useState(false)

  const openDemo  = () => setShowDemo(true)
  const closeDemo = () => setShowDemo(false)

  // Track which section is in view and highlight it in the navbar
  useEffect(() => {
    const observers = []
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { threshold: 0.3 }
      )
      observer.observe(el)
      observers.push(observer)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const goTo = (section) => {
    const el = document.getElementById(section)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="app">
      <Background />
      <Navbar active={active} onNav={goTo} onDemo={openDemo} />
      <main className="main">
        <div id="hero"      className="page-section"><HeroSection    onNav={goTo} onDemo={openDemo} /></div>
        <div id="products"  className="page-section"><ProductsSection onNav={goTo} /></div>
        <div id="usecases"  className="page-section"><UseCasesSection /></div>
        <div id="pricing"   className="page-section"><PricingSection  onDemo={openDemo} /></div>
        <div id="contact"   className="page-section"><ContactSection  onDemo={openDemo} /></div>
      </main>
      {showDemo && <DemoModal onClose={closeDemo} />}
      <Footer />
    </div>
  )
}

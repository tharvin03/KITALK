import { useState, useEffect, useRef } from 'react'
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
  const [navDir,   setNavDir]   = useState(1)
  const [showDemo, setShowDemo] = useState(false)

  const openDemo  = () => setShowDemo(true)
  const closeDemo = () => setShowDemo(false)

  const activeRef   = useRef(active)
  const showDemoRef = useRef(showDemo)
  const mainRef     = useRef(null)   // ref to <main> — lets us check scroll position
  const lastScroll  = useRef(0)
  const touchStartY = useRef(0)

  useEffect(() => { activeRef.current   = active   }, [active])
  useEffect(() => { showDemoRef.current = showDemo }, [showDemo])

  // Reset scroll to top every time the active section changes
  useEffect(() => {
    if (mainRef.current) mainRef.current.scrollTop = 0
  }, [active])

  // Navigate with direction — used by nav clicks and scroll
  const goTo = (section) => {
    const from = SECTIONS.indexOf(activeRef.current)
    const to   = SECTIONS.indexOf(section)
    setNavDir(to >= from ? 1 : -1)
    setActive(section)
  }

  // ── Scroll / swipe section navigation ────────────────────────
  useEffect(() => {
    const navigate = (dir) => {
      const idx  = SECTIONS.indexOf(activeRef.current)
      const next = idx + dir
      if (next >= 0 && next < SECTIONS.length) {
        setNavDir(dir)
        setActive(SECTIONS[next])
      }
    }

    const handleWheel = (e) => {
      if (showDemoRef.current) return
      if (Math.abs(e.deltaY) < 30) return

      const main      = mainRef.current
      const goingDown = e.deltaY > 0
      // Check whether the scrollable area still has room to scroll
      const atBottom  = !main || main.scrollTop + main.clientHeight >= main.scrollHeight - 8
      const atTop     = !main || main.scrollTop <= 8

      // Still have content to scroll through — let the browser handle it
      if (goingDown && !atBottom) return
      if (!goingDown && !atTop)   return

      // Already at the edge — switch section
      const now = Date.now()
      if (now - lastScroll.current < 900) return
      lastScroll.current = now
      e.preventDefault()
      navigate(goingDown ? 1 : -1)
    }

    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY
    }
    const handleTouchEnd = (e) => {
      if (showDemoRef.current) return
      const diff      = touchStartY.current - e.changedTouches[0].clientY
      if (Math.abs(diff) < 40) return

      const main        = mainRef.current
      const goingDown   = diff > 0

      // iOS memo: scrollTop may not have updated yet at touchend time (momentum
      // scroll fires after finger lift).  Use a generous 120 px tolerance so a
      // page that's only slightly taller than the viewport still navigates on the
      // first swipe.  Also navigate immediately when the swipe distance itself
      // would overshoot the remaining scrollable content.
      const remaining   = main ? main.scrollHeight - main.clientHeight - main.scrollTop : 0
      const atBottom    = !main || remaining <= 0 || (goingDown  && diff > remaining)  || main.scrollTop + main.clientHeight >= main.scrollHeight - 120
      const atTop       = !main || main.scrollTop <= 8

      if (goingDown  && !atBottom) return
      if (!goingDown && !atTop)    return

      const now = Date.now()
      if (now - lastScroll.current < 900) return
      lastScroll.current = now
      navigate(goingDown ? 1 : -1)
    }

    window.addEventListener('wheel',      handleWheel,      { passive: false })
    window.addEventListener('touchstart', handleTouchStart, { passive: true  })
    window.addEventListener('touchend',   handleTouchEnd,   { passive: true  })

    return () => {
      window.removeEventListener('wheel',      handleWheel)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchend',   handleTouchEnd)
    }
  }, [])

  const renderSection = () => {
    switch (active) {
      case 'products':  return <ProductsSection onNav={goTo} />
      case 'usecases':  return <UseCasesSection />
      case 'pricing':   return <PricingSection  onDemo={openDemo} />
      case 'contact':   return <ContactSection  onDemo={openDemo} />
      default:          return <HeroSection     onNav={goTo} onDemo={openDemo} />
    }
  }

  return (
    <div className="app">
      <Background />
      <Navbar active={active} onNav={goTo} onDemo={openDemo} />
      <main className="main" ref={mainRef}>
        <div className="section-anim" key={active} data-dir={navDir}>
          {renderSection()}
        </div>
      </main>
      {showDemo && <DemoModal onClose={closeDemo} />}
      <Footer />
    </div>
  )
}

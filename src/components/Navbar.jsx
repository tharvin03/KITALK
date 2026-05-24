import { useRef, useEffect, useState } from 'react'

const NAV_ITEMS = [
  { id: 'products',  label: 'Products'  },
  { id: 'usecases',  label: 'Use Cases' },
  { id: 'pricing',   label: 'Pricing'   },
  { id: 'contact',   label: 'Contact'   },
]

export default function Navbar({ active, onNav, onDemo }) {
  const itemRefs = useRef({})
  const [pill, setPill] = useState({ left: 0, width: 0, visible: false })

  // Measure the active nav item and slide the pill to it
  useEffect(() => {
    const el = itemRefs.current[active]
    if (el) {
      setPill({ left: el.offsetLeft, width: el.offsetWidth, visible: true })
    } else {
      setPill(p => ({ ...p, visible: false }))
    }
  }, [active])

  return (
    <nav className="navbar">
      <div className="nav-logo" onClick={() => onNav('hero')}>
        <span className="nav-logo-name">KITALK</span>
      </div>

      <div className="nav-center">
        {/* Sliding pill — absolutely positioned behind the buttons */}
        <span
          className="nav-pill-slider"
          style={{
            left:    pill.left,
            width:   pill.width,
            opacity: pill.visible ? 1 : 0,
          }}
        />

        {NAV_ITEMS.map(({ id, label }) => (
          <button
            key={id}
            ref={el => { itemRefs.current[id] = el }}
            className={`nav-item${active === id ? ' active' : ''}`}
            onClick={() => onNav(id)}
          >
            {label}
          </button>
        ))}
      </div>

      <button className="nav-cta" onClick={onDemo}>
        Book a Demo
      </button>
    </nav>
  )
}

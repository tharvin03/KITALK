import { useState, useEffect, useRef } from 'react'

const MESSAGES = [
  { id: 1, from: 'me',   text: "Hi! 👋 You recently viewed our property listing. I'm Maya from PropAgent — need any info about the house?", time: '09:14' },
  { id: 2, from: 'them', text: "Yes please", time: '09:15' },
  { id: 3, from: 'me',   text: "Great! You were looking at No. 14, Jalan Maju 3 — 2-storey link house, 4 bed 3 bath, 1,800 sq ft. Asking RM 620,000. Still available! ✅", time: '09:15' },
  { id: 4, from: 'them', text: "Is the price negotiable?", time: '09:16' },
  { id: 5, from: 'me',   text: "Yes, the owner is open to offers for serious buyers. Would you like to book a viewing? 🏠", time: '09:16' },
]

export default function PhoneMockup() {
  const [count, setCount]   = useState(0)
  const [typing, setTyping] = useState(false)
  const chatRef = useRef(null)

  useEffect(() => {
    let t
    const step = (s) => {
      if      (s === 0) t = setTimeout(() => { setCount(1);                   step(1) }, 1200)  // agent outbound appears
      else if (s === 1) t = setTimeout(() => { setCount(2);                   step(2) }, 2800)  // read msg 1, then customer replies
      else if (s === 2) t = setTimeout(() => { setTyping(true);               step(3) }, 1200)  // agent typing indicator
      else if (s === 3) t = setTimeout(() => { setTyping(false); setCount(3); step(4) }, 2800)  // agent sends property details
      else if (s === 4) t = setTimeout(() => { setCount(4);                   step(5) }, 3200)  // read property info, customer asks price
      else if (s === 5) t = setTimeout(() => { setTyping(true);               step(6) }, 1200)  // agent typing
      else if (s === 6) t = setTimeout(() => { setTyping(false); setCount(5); step(7) }, 2500)  // agent final reply
      else if (s === 7) t = setTimeout(() => { setCount(0); setTyping(false); step(0) }, 7000)  // read final msg, then reset
    }
    step(0)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight
  }, [count, typing])

  return (
    <div className="phone-wrap">
      {/* Left buttons: mute + vol up + vol down */}
      <div className="phone-btn-l1" />
      <div className="phone-btn-l2" />
      <div className="phone-btn-l3" />

      <div className="phone-body">

        <div className="phone-screen">
          <div className="wa-wrap">

            {/* ── iOS status bar ── */}
            <div className="wa-statusbar">
              <span className="wa-time-txt">9:41</span>
              <div style={{ display:'flex', gap:4, alignItems:'center' }}>
                <SignalSvg /><WifiSvg /><BatterySvg />
              </div>
            </div>

            {/* ── WhatsApp header ── */}
            <div className="wa-header">
              <BackChevron />
              <PersonAvatar />
              <div className="wa-info">
                <div className="wa-name">KITALK Solution</div>
                <div className="wa-online">online</div>
              </div>
              <div className="wa-header-icons">
                <VideoSvg />
                <PhoneCallSvg />
              </div>
            </div>

            {/* ── Chat area ── */}
            <div className="wa-chat" ref={chatRef}>
              {MESSAGES.slice(0, count).map((msg) => (
                <div key={msg.id} className={`wa-bubble wa-${msg.from === 'them' ? 'received' : 'sent'}`}>
                  <span className="wa-text">{msg.text}</span><span className="wa-tail" style={{ width: msg.from === 'me' ? 48 : 32 }} />
                  <div className="wa-meta">
                    <span className="wa-ts">{msg.time}</span>
                    {msg.from === 'me' && (
                      <svg width="15" height="9" viewBox="0 0 15 9" style={{ display:'block' }}>
                        <path d="M1 4.5l3 3L10 1" stroke="#53bdeb" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M5 4.5l3 3 6-7" stroke="#53bdeb" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>
                </div>
              ))}
              {typing && (
                <div className="wa-typing-wrap">
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                </div>
              )}
            </div>

            {/* ── Input bar ── */}
            <div className="wa-footer">
              <PlusSvg />
              <div className="wa-input-box">Type a message</div>
              <CameraSvg />
              <div className="wa-mic-btn"><MicSvg /></div>
            </div>

          </div>
          <div className="home-bar" />
        </div>
      </div>
    </div>
  )
}

/* ── SVG components ─────────────────────────────────────── */

const BackChevron = () => (
  <div style={{ display:'flex', alignItems:'center' }}>
    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" stroke="#e9edef" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 1L1 6l5 5"/>
    </svg>
  </div>
)

const PersonAvatar = () => (
  <div style={{
    width:26, height:26, borderRadius:'50%',
    background:'#3d5365',
    flexShrink:0,
  }} />
)

const VideoSvg = () => (
  <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#aebac1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14"/>
    <rect x="1" y="6" width="14" height="12" rx="2"/>
  </svg>
)

const PhoneCallSvg = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="#aebac1">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
  </svg>
)

const PlusSvg = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8696a0" strokeWidth="2.2" strokeLinecap="round">
    <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
  </svg>
)

const CameraSvg = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8696a0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/>
    <circle cx="12" cy="13" r="4"/>
  </svg>
)

const MicSvg = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z"/>
    <path d="M19 10v2a7 7 0 01-14 0v-2"/>
    <line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/>
  </svg>
)

const SignalSvg = () => (
  <svg width="14" height="11" viewBox="0 0 17 13" fill="white">
    <rect x="0"  y="9"  width="3" height="4" rx="0.5"/>
    <rect x="4.5" y="6" width="3" height="7" rx="0.5"/>
    <rect x="9"  y="3"  width="3" height="10" rx="0.5"/>
    <rect x="13.5" y="0" width="3" height="13" rx="0.5"/>
  </svg>
)

const WifiSvg = () => (
  <svg width="15" height="11" viewBox="0 0 24 17" fill="none" stroke="white" strokeWidth="2.4" strokeLinecap="round">
    <path d="M1.5 6a14 14 0 0121 0"/>
    <path d="M5 10a9 9 0 0114 0"/>
    <path d="M8.5 14a4 4 0 017 0"/>
    <circle cx="12" cy="17" r="1.5" fill="white" stroke="none"/>
  </svg>
)

const BatterySvg = () => (
  <svg width="22" height="11" viewBox="0 0 27 13">
    <rect x="0.5" y="0.5" width="22" height="12" rx="3.5" fill="none" stroke="white" strokeOpacity="0.35"/>
    <rect x="1.5" y="1.5" width="18" height="10" rx="2.5" fill="white"/>
    <path d="M24.5 4.5v4a2.5 2.5 0 000-4z" fill="white" fillOpacity="0.4"/>
  </svg>
)

import PhoneMockup from '../components/PhoneMockup'

export default function HeroSection({ onDemo }) {
  return (
    <div className="section hero-grid">

      {/* Left — text */}
      <div className="hero-text">
        <div className="tag" style={{ display:'inline-flex' }}>Malaysia's AI Communication Platform</div>
        <h1 className="hero-title" style={{ marginBottom:14 }}>
          AI-Powered Calls<br />&amp; Messaging,<br />24/7. No Human<br />Needed.
        </h1>
        <p className="hero-sub" style={{ margin:'0 0 32px' }}>
          KITALK Solution gives your business intelligent voice and messaging agents
          that handle every conversation — around the clock, automatically.
        </p>
        <button className="btn btn-solid" onClick={onDemo}>
          Book a Free Demo →
        </button>
      </div>

      {/* Right — phone */}
      <div className="hero-phone">
        <div className="hero-phone-label">Messaging Agent</div>
        <PhoneMockup />
      </div>

    </div>
  )
}

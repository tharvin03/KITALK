export default function HeroSection({ onDemo }) {
  return (
    <div className="section hero-grid" style={{ gridTemplateColumns: '1fr' }}>

      <div className="hero-text" style={{ alignItems: 'center', textAlign: 'center' }}>
        <div className="tag" style={{ display:'inline-flex' }}>Malaysia's AI Voice Agent Platform</div>
        <h1 className="hero-title" style={{ marginBottom: 14, textAlign: 'center' }}>
          AI Voice Agent<br />That Handles Calls<br />24/7. No Human<br />Needed.
        </h1>
        <p className="hero-sub" style={{ margin: '0 auto 32px', textAlign: 'center' }}>
          KITALK gives your business an intelligent voice agent that answers calls,
          makes outbound calls, and handles full conversations — around the clock, automatically.
        </p>

        {/* Selling points */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center', marginBottom: 36 }}>
          {[
            '✅ No Upfront Cost',
            '✅ Pay As You Go',
            '✅ No Vendor Lock-In',
            '✅ Cancel Anytime',
          ].map((t) => (
            <span key={t} style={{
              padding: '6px 16px',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 50,
              fontSize: 13,
              fontWeight: 600,
              color: 'rgba(255,255,255,0.85)',
            }}>{t}</span>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
          <button className="btn btn-solid" onClick={onDemo} style={{ padding: '14px 32px', fontSize: 15 }}>
            🎁 Book a Free Demo
          </button>
          <span style={{ fontSize: 13, color: 'var(--text-2)' }}>
            Get a 3-day free trial — no credit card required
          </span>
        </div>
      </div>

    </div>
  )
}

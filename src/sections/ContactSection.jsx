export default function ContactSection({ onDemo }) {
  return (
    <div className="section center">
      <div className="tag">Contact</div>
      <div className="section-title" style={{ marginBottom: 8 }}>Never miss another lead</div>
      <p className="section-sub">
        Reach out today — see how KITALK's voice agent puts your customer calls on autopilot, 24/7.
      </p>

      <div style={{ maxWidth: 560, margin: '0 auto' }}>
        <div className="card" style={{ padding: '30px 32px', textAlign: 'left', marginBottom: 16 }}>
          <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 4 }}>KITALK Solution</div>
          <div style={{ fontSize: 13, color: 'var(--text-2)', marginBottom: 20 }}>
            AI Voice Agent Provider
          </div>

          <div className="contact-row">
            <span className="contact-icon">📍</span>
            <div>
              <div style={{ color: 'var(--text)', fontWeight: 500 }}>Melaka, Malaysia</div>
              <div style={{ fontSize: 12, color: 'var(--text-3)', marginTop: 2 }}>Serving clients across Malaysia</div>
            </div>
          </div>

          <div className="contact-row">
            <span className="contact-icon">✉️</span>
            <div>
              <div style={{ color: 'var(--text)', fontWeight: 500 }}>admin@kitalk.my</div>
              <div style={{ fontSize: 12, color: 'var(--text-3)', marginTop: 2 }}>For general enquiries &amp; business proposals</div>
            </div>
          </div>

          <div className="contact-row">
            <span className="contact-icon">📱</span>
            <div>
              <div style={{ color: 'var(--text)', fontWeight: 500 }}>+60 12-384 0308</div>
              <div style={{ fontSize: 12, color: 'var(--text-3)', marginTop: 2 }}>WhatsApp also available</div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <button className="btn btn-solid" onClick={onDemo} style={{ width: '100%', justifyContent: 'center', padding: '14px 24px', borderRadius: 14 }}>
            Book a Free Demo
          </button>
          <span style={{ fontSize: 13, color: 'var(--text-2)' }}>
            3-day free trial included — no credit card required
          </span>
        </div>
      </div>
    </div>
  )
}

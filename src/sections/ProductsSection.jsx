export default function ProductsSection({ onNav }) {
  return (
    <div className="section center">
      <div className="tag">What We Offer</div>
      <div className="products-title" style={{ fontSize: 'clamp(48px, 7vw, 88px)', fontWeight: 800, letterSpacing: '-0.035em', color: '#fff', marginBottom: 16 }}>
        Voice Agent
      </div>
      <p style={{ fontSize: 16, color: 'var(--text-2)', lineHeight: 1.6, maxWidth: 560, margin: '0 auto 40px' }}>
        Your AI-powered phone agent that handles inbound and outbound calls — so you never miss a customer again.
      </p>

      <div style={{ maxWidth: 680, margin: '0 auto' }}>
        <div className="card" style={{ padding: '36px 32px', textAlign: 'left' }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: 'rgba(110,160,255,0.85)', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: 22 }}>
            What It Can Do
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {[
              'Make outbound calls to deliver updates, reminders & collect information',
              'Answer incoming calls, respond to questions & take action automatically',
              'Handle full conversations end-to-end, 24/7',
              'No human agent needed — fully automated',
            ].map((text) => (
              <div key={text} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <span className="feat-dot" style={{ marginTop: 7 }} />
                <span style={{ fontSize: 13.5, color: 'var(--text-2)', lineHeight: 1.5 }}>{text}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 28, cursor: 'pointer', fontSize: 14, fontWeight: 600, color: 'rgba(140,175,255,0.8)' }} onClick={() => onNav('usecases')}>
          See use cases →
        </div>
      </div>
    </div>
  )
}

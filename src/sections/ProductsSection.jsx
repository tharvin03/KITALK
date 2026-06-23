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
        {/* Capabilities */}
        <div className="card" style={{ padding: '36px 32px', textAlign: 'left', marginBottom: 16 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: 'rgba(110,160,255,0.85)', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: 22 }}>
            What It Can Do
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {[
              { icon: '📞', text: 'Deliver updates, reminders & collect information from customers' },
              { icon: '📥', text: 'Answer incoming calls, respond to questions & take action' },
              { icon: '🔄', text: 'Handle full conversations end-to-end, 24/7' },
              { icon: '🤖', text: 'No human agent needed — fully automated' },
            ].map(({ icon, text }) => (
              <div key={text} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <span style={{ fontSize: 18, flexShrink: 0 }}>{icon}</span>
                <span style={{ fontSize: 13.5, color: 'var(--text-2)', lineHeight: 1.5 }}>{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Why KITALK */}
        <div className="card" style={{ padding: '28px 32px', textAlign: 'left' }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: 'rgba(110,160,255,0.85)', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: 18 }}>
            Why KITALK
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            {[
              '💰 No Upfront Cost',
              '📊 Pay As You Go',
              '🔓 No Vendor Lock-In',
              '⚡ Training Straight Away',
              '❌ Cancel Anytime, No Questions Asked',
            ].map((t) => (
              <span key={t} style={{
                padding: '8px 16px',
                background: 'rgba(80,200,120,0.08)',
                border: '1px solid rgba(80,200,120,0.18)',
                borderRadius: 50,
                fontSize: 13,
                fontWeight: 600,
                color: 'rgba(255,255,255,0.85)',
              }}>{t}</span>
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

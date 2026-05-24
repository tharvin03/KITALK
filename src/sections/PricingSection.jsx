export default function PricingSection({ onDemo }) {
  return (
    <div className="section center">
      <div className="tag">Pricing</div>
      <div className="pricing-big">PAY AS<br />YOU GO</div>
      <p style={{ fontSize: 16, color: 'var(--text-2)', marginBottom: 28, lineHeight: 1.6 }}>
        No monthly fees. No minimum commitment.<br />
        Only pay for what your business actually uses.
      </p>

      <div className="two-col" style={{ maxWidth: 680, margin: '0 auto 22px' }}>
        <div className="card pricing-card" style={{ padding: '28px 26px', textAlign: 'left' }}>
          <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 6 }}>Voice Agent</div>
          <div style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 4 }}>
            Per Minute
          </div>
          <div style={{ fontSize: 13, color: 'var(--text-2)', marginBottom: 18, lineHeight: 1.5 }}>
            Billed only for active call duration. Inbound and outbound included.
          </div>
          <ul className="feat-list">
            <li className="feat-item"><span className="feat-dot" />No setup fee</li>
            <li className="feat-item"><span className="feat-dot" />Scales with your call volume</li>
            <li className="feat-item"><span className="feat-dot" />Transparent monthly invoice</li>
            <li className="feat-item"><span className="feat-dot" />Real-time usage dashboard</li>
          </ul>
        </div>

        <div className="card pricing-card" style={{ padding: '28px 26px', textAlign: 'left' }}>
          <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 6 }}>Messaging Agent</div>
          <div style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 4 }}>
            Per Message
          </div>
          <div style={{ fontSize: 13, color: 'var(--text-2)', marginBottom: 18, lineHeight: 1.5 }}>
            Charged per message processed. Inbound replies and outbound broadcasts.
          </div>
          <ul className="feat-list">
            <li className="feat-item"><span className="feat-dot" />No setup fee</li>
            <li className="feat-item"><span className="feat-dot" />Scales with your message volume</li>
            <li className="feat-item"><span className="feat-dot" />Transparent monthly invoice</li>
            <li className="feat-item"><span className="feat-dot" />Real-time usage dashboard</li>
          </ul>
        </div>
      </div>

      <p style={{ fontSize: 13, color: 'var(--text-3)', marginBottom: 18 }}>
        Exact rates depend on your usage volume. Get a personalised quote during your demo.
      </p>
      <button className="btn btn-solid" onClick={onDemo}>
        Get a Quote →
      </button>
    </div>
  )
}

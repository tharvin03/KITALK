export default function ProductsSection({ onNav }) {
  return (
    <div className="section center">
      <div className="products-title" style={{ fontSize: 'clamp(48px, 7vw, 88px)', fontWeight: 800, letterSpacing: '-0.035em', color: '#fff', marginBottom: 48 }}>
        Our Products
      </div>

      <div className="two-col" style={{ maxWidth: 780, margin: '0 auto' }}>
        <div
          className="card product-card"
          style={{ padding: '40px 36px', cursor: 'pointer', textAlign: 'left' }}
          onClick={() => onNav('usecases')}
        >
          <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 6 }}>Voice Agent</div>
          <div style={{ fontSize: 13, fontWeight: 600, color: 'rgba(110,160,255,0.85)', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: 18 }}>
            Inbound &amp; Outbound Calls
          </div>
          <ul className="feat-list">
            <li className="feat-item"><span className="feat-dot" />Make calls to deliver updates, reminders, or collect information from customers</li>
            <li className="feat-item"><span className="feat-dot" />Answer incoming calls, respond to questions, and take action — automatically</li>
            <li className="feat-item"><span className="feat-dot" />Handles full conversations end-to-end, 24/7, without a human agent</li>
          </ul>
          <div className="product-arrow">See use cases →</div>
        </div>

        <div
          className="card product-card"
          style={{ padding: '40px 36px', cursor: 'pointer', textAlign: 'left' }}
          onClick={() => onNav('usecases')}
        >
          <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 6 }}>Messaging Agent</div>
          <div style={{ fontSize: 13, fontWeight: 600, color: 'rgba(110,160,255,0.85)', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: 18 }}>
            Send &amp; Receive Messages
          </div>
          <ul className="feat-list">
            <li className="feat-item"><span className="feat-dot" />Send messages to follow up, notify customers, or broadcast promotions</li>
            <li className="feat-item"><span className="feat-dot" />Receive messages, understand the request, and reply or take action instantly</li>
            <li className="feat-item"><span className="feat-dot" />Manages every conversation automatically, 24/7, via WhatsApp</li>
          </ul>
          <div className="product-arrow">See use cases →</div>
        </div>
      </div>
    </div>
  )
}

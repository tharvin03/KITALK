const Icons = {
  hospital: (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <line x1="10" y1="3" x2="10" y2="17"/>
      <line x1="3"  y1="10" x2="17" y2="10"/>
    </svg>
  ),
  cart: (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 1h3l1.5 8h9l1.5-5H5"/>
      <circle cx="8"  cy="17" r="1.2"/>
      <circle cx="14" cy="17" r="1.2"/>
    </svg>
  ),
  dollar: (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
      <line x1="10" y1="1" x2="10" y2="19"/>
      <path d="M14 5.5H8a2.5 2.5 0 000 5h4a2.5 2.5 0 010 5H6"/>
    </svg>
  ),
  home: (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 9L10 2l8 7v9a1 1 0 01-1 1H3a1 1 0 01-1-1z"/>
      <path d="M8 19v-7h4v7"/>
    </svg>
  ),
  mug: (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 7h10v6a3 3 0 01-3 3H8a3 3 0 01-3-3V7z"/>
      <path d="M15 8h1a2 2 0 010 4h-1"/>
      <line x1="7"  y1="1" x2="7"  y2="4"/>
      <line x1="10" y1="1" x2="10" y2="4"/>
      <line x1="13" y1="1" x2="13" y2="4"/>
    </svg>
  ),
  book: (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h5a3 3 0 013 3v11a2 2 0 00-2-2H2V3z"/>
      <path d="M18 3h-5a3 3 0 00-3 3v11a2 2 0 012-2h6V3z"/>
    </svg>
  ),
  people: (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="7" cy="6" r="3"/>
      <path d="M1 18v-1a5 5 0 0112 0v1"/>
      <path d="M15 10a3 3 0 010 5.5"/>
      <path d="M19 18a4 4 0 00-3-3.8"/>
    </svg>
  ),
  steering: (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="10" cy="10" r="8"/>
      <circle cx="10" cy="10" r="2"/>
      <line x1="10" y1="2"    x2="10" y2="8"/>
      <line x1="3.6" y1="14"  x2="8.3" y2="11.3"/>
      <line x1="16.4" y1="14" x2="11.7" y2="11.3"/>
    </svg>
  ),
}

const CASES = [
  { icon: Icons.hospital, title: 'Clinic & Hospital',      desc: 'Auto-confirm appointments, send reminders, handle rescheduling calls without staff.' },
  { icon: Icons.cart,     title: 'E-commerce',             desc: 'Answer order status, delivery queries, and returns via outbound follow-up calls.' },
  { icon: Icons.dollar,   title: 'Finance & Banking',      desc: 'Handle inbound loan enquiries, payment reminders, and KYC verification calls.' },
  { icon: Icons.home,     title: 'Property & Real Estate', desc: 'Auto-qualify leads from ads, book viewings, and follow up prospects 24/7.' },
  { icon: Icons.mug,      title: 'F&B & Restaurants',      desc: 'Handle table reservations, order confirmations, and delivery update calls automatically.' },
  { icon: Icons.book,     title: 'Education',              desc: 'Automate class schedule enquiries, fee reminders, and student follow-up calls.' },
  { icon: Icons.people,   title: 'HR & Recruitment',       desc: 'Screen candidates via phone, schedule interviews, and keep applicants updated.' },
  { icon: Icons.steering, title: 'Automotive',             desc: 'Service reminders, booking confirmations, and follow-up on test drive leads via voice.' },
]

function CaseCard({ icon, title, desc }) {
  return (
    <div className="card" style={{ padding: '18px 20px', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
      <div style={{
        width: 36, height: 36, borderRadius: 10, flexShrink: 0,
        background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: 'rgba(255,255,255,0.95)',
      }}>
        {icon}
      </div>
      <div>
        <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4 }}>{title}</div>
        <div style={{ fontSize: 12.5, color: 'var(--text-2)', lineHeight: 1.55 }}>{desc}</div>
      </div>
    </div>
  )
}

export default function UseCasesSection() {
  return (
    <div className="section">
      <div className="center" style={{ marginBottom: 28 }}>
        <div className="tag">Use Cases</div>
        <div className="section-title">Built for every industry</div>
        <p className="section-sub">
          If your business receives or makes calls, our voice agent can handle it.
        </p>
      </div>

      <div className="two-col">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {CASES.slice(0, 4).map((c) => <CaseCard key={c.title} {...c} />)}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {CASES.slice(4).map((c) => <CaseCard key={c.title} {...c} />)}
        </div>
      </div>
    </div>
  )
}

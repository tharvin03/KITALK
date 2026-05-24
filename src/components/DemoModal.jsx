import { useState } from 'react'

// Replace with your actual Google Form URL
const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform'

export default function DemoModal({ onClose }) {
  const [form, setForm] = useState({ name: '', phone: '', company: '', email: '', interest: '' })
  const [submitted, setSubmitted] = useState(false)

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    window.open(GOOGLE_FORM_URL, '_blank')
    setSubmitted(true)
  }

  return (
    <div className="overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal">
        <button className="modal-close" onClick={onClose}>✕</button>

        {submitted ? (
          <div className="modal-success">
            <div className="success-icon">✓</div>
            <div style={{ fontWeight: 700, fontSize: 18 }}>Request Received!</div>
            <p style={{ color: 'var(--text-2)', fontSize: 14, lineHeight: 1.6 }}>
              We'll reach out within 1 business day to schedule your demo.
            </p>
            <button className="btn btn-glass" style={{ marginTop: 8 }} onClick={onClose}>
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="modal-title">Book a Demo</div>
            <p className="modal-sub">
              See KITALK in action. We'll walk you through a live demo tailored to your business.
            </p>

            {/* Required */}
            <div className="form-row">
              <label className="form-label">Full Name <span style={{ color: 'rgba(255,100,100,0.8)' }}>*</span></label>
              <input className="form-input" placeholder="Ahmad bin Razak" value={form.name} onChange={set('name')} required />
            </div>

            <div className="form-row">
              <label className="form-label">Phone Number <span style={{ color: 'rgba(255,100,100,0.8)' }}>*</span></label>
              <input className="form-input" placeholder="+60 12-345 6789" value={form.phone} onChange={set('phone')} required />
            </div>

            {/* Optional */}
            <div className="form-row">
              <label className="form-label">Company <span style={{ color: 'var(--text-3)', fontWeight: 400, textTransform: 'none', letterSpacing: 0 }}>— optional</span></label>
              <input className="form-input" placeholder="Your company name" value={form.company} onChange={set('company')} />
            </div>

            <div className="form-row">
              <label className="form-label">Email <span style={{ color: 'var(--text-3)', fontWeight: 400, textTransform: 'none', letterSpacing: 0 }}>— optional</span></label>
              <input className="form-input" type="email" placeholder="you@company.com" value={form.email} onChange={set('email')} />
            </div>

            <div className="form-row">
              <label className="form-label">I'm interested in <span style={{ color: 'rgba(255,100,100,0.8)' }}>*</span></label>
              <select className="form-select" value={form.interest} onChange={set('interest')} required>
                <option value="" disabled>Select an option…</option>
                <option value="voice">Voice Agent (Calls)</option>
                <option value="messaging">Messaging Agent</option>
                <option value="both">Both</option>
              </select>
            </div>

            <button type="submit" className="form-submit">
              Request Demo →
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

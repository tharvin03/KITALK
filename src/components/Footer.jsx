export default function Footer() {
  return (
    <footer style={{
      position: 'fixed',
      bottom: 0, left: 0, right: 0,
      zIndex: 50,
      padding: '10px 28px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontSize: '11px',
      color: 'rgba(255,255,255,0.3)',
      pointerEvents: 'none',
    }}>
      {/* Replace 000000000 with your actual SSM registration number from your Form A */}
      <span>KITALK Solution (202603130184-MA0346838-A)</span>
      <span>© {new Date().getFullYear()} KITALK Solution. All rights reserved.</span>
    </footer>
  )
}

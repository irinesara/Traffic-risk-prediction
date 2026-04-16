import { Link } from 'react-router-dom';

export default function Navbar() {
  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '1px'
  };

  return (
    <nav style={{
      backgroundColor: '#0f172a',
      borderBottom: '2px solid #1e293b',
      padding: '20px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      boxSizing: 'border-box'
    }}>
      <div style={{ 
        fontWeight: '900', 
        fontSize: '24px', 
        color: '#3b82f6',
        margin: 0
      }}>
        SENTINEL AI
      </div>
      <div style={{ display: 'flex', gap: '40px' }}>
        <Link to="/" style={linkStyle}>Dashboard</Link>
        <Link to="/interventions" style={linkStyle}>Interventions</Link>
      </div>
    </nav>
  );
}
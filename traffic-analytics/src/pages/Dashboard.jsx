import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine, Cell } from 'recharts';

const barData = [
  { day: 'Mon', accidents: 20 }, { day: 'Wed', accidents: 15 },
  { day: 'Sat', accidents: 85 }, { day: 'Sun', accidents: 40 },
];

export default function Dashboard() {
  const [viewMode, setViewMode] = useState('current'); // 'current' or 'success'
  const [riskScore, setRiskScore] = useState(45);
  const [loading, setLoading] = useState(true);

  // Simulation: Skeleton Loader effect
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  // Animations
  const animations = `
    @keyframes shimmer { 0% { opacity: 0.5; } 50% { opacity: 1; } 100% { opacity: 0.5; } }
    @keyframes glitched { 0% { transform: translate(0); } 20% { transform: translate(-2px, 2px); } 40% { transform: translate(-2px, -2px); } 60% { transform: translate(2px, 2px); } 80% { transform: translate(2px, -2px); } 100% { transform: translate(0); } }
  `;

  if (loading) {
    return (
      <div style={{ padding: '40px', color: 'white', backgroundColor: '#020617', height: '100vh', animation: 'shimmer 1.5s infinite' }}>
        <div style={{ width: '300px', height: '40px', backgroundColor: '#1e293b', marginBottom: '20px', borderRadius: '8px' }}></div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {[1,2,3].map(i => <div key={i} style={{ height: '120px', backgroundColor: '#0f172a', borderRadius: '15px' }}></div>)}
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px 40px', color: 'white', fontFamily: 'sans-serif', backgroundColor: '#020617' }}>
      <style>{animations}</style>

      {/* HEADER & TOGGLE */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
        <div>
          <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#3b82f6', margin: 0 }}>Sentinel AI Command</h1>
          <p style={{ color: '#64748b', fontSize: '14px' }}>Predictive Traffic Intelligence Engine</p>
        </div>
        
        <div style={{ display: 'flex', backgroundColor: '#0f172a', padding: '5px', borderRadius: '30px', border: '1px solid #1e293b' }}>
          <button 
            onClick={() => setViewMode('current')}
            style={{ ...toggleBtn, backgroundColor: viewMode === 'current' ? '#ef4444' : 'transparent' }}>
            Live Danger
          </button>
          <button 
            onClick={() => setViewMode('success')}
            style={{ ...toggleBtn, backgroundColor: viewMode === 'success' ? '#10b981' : 'transparent' }}>
            Success Stories
          </button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', gap: '20px' }}>
        
        {/* LEFT: PREDICTIVE AI FORECAST */}
        <div style={{ ...panelStyle, borderLeft: '4px solid #f59e0b' }}>
          <h4 style={{ color: '#f59e0b', fontSize: '12px', letterSpacing: '2px', animation: 'glitched 3s infinite' }}>⚠️ AI FORECAST</h4>
          <div style={{ marginTop: '20px' }}>
            <p style={{ fontSize: '14px', fontWeight: 'bold' }}>Tomorrow @ 08:00 AM</p>
            <p style={{ fontSize: '13px', color: '#94a3b8' }}>Heavy Drizzle + Rush Hour</p>
            <div style={{ color: '#ef4444', fontSize: '13px', marginTop: '10px', fontWeight: 'bold' }}>HIGH RISK: Sector 4 Bridge</div>
            <button style={actionBtn}>Pre-Deploy Patrol</button>
          </div>
          <hr style={{ borderColor: '#1e293b', margin: '20px 0' }} />
          <h4 style={{ fontSize: '12px', color: '#3b82f6' }}>CORRELATION STRENGTH</h4>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>94.2%</p>
        </div>

        {/* MIDDLE: THE "BEFORE & AFTER" MAP */}
        <div style={{ position: 'relative', backgroundColor: '#0f172a', borderRadius: '20px', border: '1px solid #1e293b', height: '550px', overflow: 'hidden' }}>
          <div style={{ width: '100%', height: '100%', backgroundColor: '#020617', backgroundImage: 'radial-gradient(#1e293b 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
            {/* Map Markers change based on Toggle */}
            {viewMode === 'current' ? (
              <>
                <div style={{ ...marker, top: '30%', left: '40%', filter: 'drop-shadow(0 0 10px #ef4444)', backgroundColor: '#ef4444' }}></div>
                <div style={{ ...marker, top: '60%', left: '20%', filter: 'drop-shadow(0 0 10px #ef4444)', backgroundColor: '#ef4444' }}></div>
              </>
            ) : (
              <>
                <div style={{ ...marker, top: '30%', left: '40%', backgroundColor: '#10b981', filter: 'drop-shadow(0 0 10px #10b981)' }}>✓</div>
                <div style={{ ...marker, top: '60%', left: '20%', backgroundColor: '#10b981', filter: 'drop-shadow(0 0 10px #10b981)' }}>✓</div>
              </>
            )}
            <div style={{ position: 'absolute', bottom: 20, left: 20, fontSize: '12px', color: '#64748b' }}>
              Viewing: {viewMode === 'current' ? 'Active High-Risk Clusters' : 'Resolved Hotspots'}
            </div>
          </div>
        </div>

        {/* RIGHT: COMPARISON & RISK GAUGE */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={panelStyle}>
            <h4 style={{ fontSize: '12px', color: '#94a3b8', textAlign: 'center' }}>DYNAMIC RISK LEVEL</h4>
            <div style={{ position: 'relative', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               {/* Gauge Meter Simulation */}
               <div style={{ width: '120px', height: '120px', borderRadius: '50%', border: '10px solid #1e293b', borderTopColor: riskScore > 70 ? '#ef4444' : '#3b82f6', transform: `rotate(${riskScore}deg)`, transition: '1s' }}></div>
               <span style={{ position: 'absolute', fontSize: '24px', fontWeight: 'bold' }}>{riskScore}%</span>
            </div>
            <div style={{ display: 'flex', gap: '5px' }}>
                <button onClick={() => setRiskScore(85)} style={smallBtn}>Rain</button>
                <button onClick={() => setRiskScore(95)} style={smallBtn}>Friday</button>
                <button onClick={() => setRiskScore(30)} style={smallBtn}>Clear</button>
            </div>
          </div>

          <div style={panelStyle}>
            <h4 style={{ fontSize: '12px', marginBottom: '15px' }}>DANGER BY DAY</h4>
            <div style={{ height: '180px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData}>
                  <XAxis dataKey="day" stroke="#475569" fontSize={10} />
                  <Bar dataKey="accidents" radius={[4, 4, 0, 0]}>
                    {barData.map((entry, index) => (
                      <Cell key={index} fill={entry.accidents > 50 ? '#ef4444' : '#3b82f6'} style={{ cursor: 'pointer', transition: '0.3s' }} />
                    ))}
                  </Bar>
                  <ReferenceLine y={50} stroke="#ef4444" strokeDasharray="3 3" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// STYLES
const toggleBtn = { border: 'none', padding: '8px 15px', borderRadius: '25px', color: 'white', cursor: 'pointer', fontSize: '12px', fontWeight: 'bold', transition: '0.3s' };
const panelStyle = { backgroundColor: '#0f172a', padding: '25px', borderRadius: '20px', border: '1px solid #1e293b' };
const marker = { position: 'absolute', width: '20px', height: '20px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 'bold' };
const actionBtn = { width: '100%', marginTop: '15px', padding: '10px', backgroundColor: '#3b82f6', border: 'none', color: 'white', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' };
const smallBtn = { flex: 1, padding: '5px', backgroundColor: '#1e293b', border: '1px solid #334155', color: 'white', borderRadius: '5px', fontSize: '10px', cursor: 'pointer' };
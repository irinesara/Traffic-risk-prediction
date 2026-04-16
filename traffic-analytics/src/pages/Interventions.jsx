import React, { useState } from 'react';

export default function Interventions() {
  const [tasks, setTasks] = useState([
    { id: 1, type: "Weather", alert: "High rain predicted", action: "Deploy automated 'Slippery Road' signs on Highway 4.", priority: "CRITICAL", impact: "-45% Crashes", status: 0 },
    { id: 2, type: "Road Type", alert: "Curve Incident Spike", action: "Install reflective barriers at the East Bend.", priority: "STABLE", impact: "-20% Crashes", status: 1 },
    { id: 3, type: "Time", alert: "Night Peak Hours", action: "Increase patrol units in Sector 7 between 22:00 - 02:00.", priority: "CRITICAL", impact: "-30% Crashes", status: 0 }
  ]);

  const animations = `
    @keyframes pulse-border {
      0% { border-color: rgba(239, 68, 68, 0.5); }
      50% { border-color: rgba(239, 68, 68, 1); box-shadow: 0 0 15px rgba(239, 68, 68, 0.4); }
      100% { border-color: rgba(239, 68, 68, 0.5); }
    }
  `;

  const handleAction = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, status: 3 } : t));
  };

  return (
    <div style={{ padding: '40px', color: 'white', fontFamily: 'sans-serif', backgroundColor: '#020617', minHeight: '100vh', display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '40px' }}>
      <style>{animations}</style>

      {/* LEFT SIDE: PENDING INTERVENTIONS */}
      <div>
        <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '10px' }}>Active Interventions</h1>
        <p style={{ color: '#64748b', marginBottom: '30px' }}>AI-driven responses to detected road anomalies.</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {tasks.filter(t => t.status < 3).map(item => (
            <div key={item.id} style={{
              backgroundColor: '#0f172a',
              borderRadius: '16px',
              padding: '24px',
              border: item.priority === 'CRITICAL' ? '2px solid #ef4444' : '1px solid #1e293b',
              animation: item.priority === 'CRITICAL' ? 'pulse-border 2s infinite' : 'none',
              display: 'flex',
              justifyContent: 'space-between',
              position: 'relative'
            }}>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '10px' }}>
                  <span style={{ 
                    backgroundColor: item.priority === 'CRITICAL' ? '#ef4444' : '#3b82f6', 
                    fontSize: '10px', fontWeight: '900', padding: '4px 8px', borderRadius: '4px' 
                  }}>{item.priority}</span>
                  <span style={{ color: '#94a3b8', fontSize: '12px' }}>{item.type} Analysis</span>
                </div>
                
                <h3 style={{ fontSize: '20px', margin: '0 0 8px 0' }}>{item.alert}</h3>
                <p style={{ color: '#94a3b8', fontSize: '14px', margin: '0 0 20px 0', maxWidth: '80%' }}>{item.action}</p>
                
                {/* Impact Badge */}
                <div style={{ display: 'inline-block', backgroundColor: '#064e3b', color: '#10b981', padding: '6px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>
                  Predicted Impact: {item.impact}
                </div>

                {/* Progress Stepper */}
                <div style={{ marginTop: '25px' }}>
                  <div style={{ height: '4px', width: '100%', backgroundColor: '#1e293b', borderRadius: '2px', position: 'relative' }}>
                    <div style={{ height: '100%', width: item.status === 1 ? '50%' : '10%', backgroundColor: '#3b82f6', borderRadius: '2px', transition: '1s' }}></div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px', fontSize: '10px', color: '#475569', fontWeight: 'bold' }}>
                    <span>IDENTIFIED</span>
                    <span>ALLOCATED</span>
                    <span>IN PROGRESS</span>
                  </div>
                </div>
              </div>

              {/* Mini Map Preview Mock */}
              <div style={{ width: '120px', height: '120px', backgroundColor: '#020617', borderRadius: '12px', border: '1px solid #1e293b', backgroundImage: 'radial-gradient(#1e293b 1px, transparent 1px)', backgroundSize: '10px 10px', marginLeft: '20px' }}>
                 <div style={{ width: '6px', height: '6px', backgroundColor: '#ef4444', borderRadius: '50%', margin: '40% auto', boxShadow: '0 0 10px #ef4444' }}></div>
              </div>

              <button 
                onClick={() => handleAction(item.id)}
                style={{ position: 'absolute', bottom: '24px', right: '24px', padding: '10px 20px', backgroundColor: '#3b82f6', border: 'none', borderRadius: '8px', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}>
                Deploy →
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE: GLOBAL IMPACT PANEL */}
      <div style={{ backgroundColor: '#0f172a', padding: '30px', borderRadius: '24px', border: '1px solid #1e293b', height: 'fit-content', position: 'sticky', top: '40px' }}>
        <h2 style={{ fontSize: '20px', marginBottom: '20px', color: '#3b82f6' }}>Global Safety Impact</h2>
        
        <div style={{ marginBottom: '30px' }}>
          <div style={{ fontSize: '48px', fontWeight: 'bold' }}>124</div>
          <div style={{ color: '#10b981', fontWeight: 'bold' }}>LIVES SAVED THIS MONTH</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '8px' }}>
              <span>BUDGET UTILIZED</span>
              <span>68%</span>
            </div>
            <div style={{ height: '8px', width: '100%', backgroundColor: '#1e293b', borderRadius: '4px' }}>
              <div style={{ height: '100%', width: '68%', backgroundColor: '#f59e0b', borderRadius: '4px' }}></div>
            </div>
          </div>

          <div style={{ marginTop: '20px' }}>
            <h4 style={{ fontSize: '14px', color: '#94a3b8', marginBottom: '15px' }}>SAFE ROAD LEADERBOARD</h4>
            {['Highway 4', 'Sector 7', 'North Bridge'].map((road, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #1e293b' }}>
                <span style={{ fontSize: '14px' }}>{road}</span>
                <span style={{ color: '#10b981', fontSize: '14px', fontWeight: 'bold' }}>↑ {90 - (i*10)}% Safer</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
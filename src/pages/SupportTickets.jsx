import React, { useState } from 'react';
import { Ticket, MessageSquare, AlertCircle, CheckCircle2 } from 'lucide-react';

const SupportTickets = () => {
  const [tickets, setTickets] = useState([
    { id: 'TKT-102', bakery: 'The Cake Corner', subject: 'WhatsApp API Disconnected', status: 'Open', priority: 'High', date: '2026-06-19' },
    { id: 'TKT-101', bakery: 'Sweet Delights Bakery', subject: 'Need help with Diwali Campaign', status: 'Resolved', priority: 'Low', date: '2026-06-18' }
  ]);

  const handleResolve = (id) => {
    setTickets(tickets.map(t => t.id === id ? { ...t, status: 'Resolved', priority: 'Low' } : t));
    alert(`Ticket ${id} marked as resolved!`);
  };

  return (
    <div className="animate-fade-in" style={{ paddingBottom: '3rem' }}>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="premium-title">Support Queue</h1>
          <p className="premium-subtitle">Manage incoming support requests from Bakery Managers</p>
        </div>
        <button className="premium-btn-primary" style={{ background: 'white', color: 'var(--text-primary)', border: '1px solid var(--border-color)' }} onClick={() => alert('Loading ticket archives...')}>
          <Ticket size={18} /> View Archives
        </button>
      </div>

      <div className="premium-table-container">
        <table className="premium-table">
          <thead>
            <tr>
              <th>Ticket ID</th>
              <th>Bakery</th>
              <th>Subject</th>
              <th>Status</th>
              <th>Priority</th>
              <th className="text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map(t => (
              <tr key={t.id}>
                <td className="font-bold text-slate-700">{t.id}</td>
                <td className="font-semibold">{t.bakery}</td>
                <td>{t.subject}</td>
                <td>
                  <span className={`saas-status-badge ${t.status === 'Open' ? 'blocked' : 'active'}`}>
                    {t.status === 'Open' ? <AlertCircle size={12}/> : <CheckCircle2 size={12}/>} {t.status}
                  </span>
                </td>
                <td><span className="text-sm font-bold" style={{ color: t.priority === 'High' ? 'var(--danger)' : 'var(--text-secondary)' }}>{t.priority}</span></td>
                <td className="text-right">
                  {t.status === 'Open' ? (
                     <button className="btn" style={{ padding: '0.4rem 1rem', borderRadius: '8px', fontSize: '0.8rem', background: 'var(--accent-primary)', color: 'white' }} onClick={() => handleResolve(t.id)}>Resolve</button>
                  ) : (
                     <button className="btn" style={{ padding: '0.4rem 1rem', borderRadius: '8px', fontSize: '0.8rem', background: 'var(--bg-tertiary)', color: 'var(--accent-primary)' }} onClick={() => alert(`Viewing ticket ${t.id} details...`)}>View</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SupportTickets;

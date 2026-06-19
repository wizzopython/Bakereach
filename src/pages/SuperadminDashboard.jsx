import React, { useState, useEffect } from 'react';
import { Plus, Store, MapPin, Phone, CheckCircle2, Gift, Cake, Trash2, Ban, Unlock, Calendar, AlertCircle, Users, MessageSquare, Activity, Wifi, WifiOff, TrendingUp } from 'lucide-react';
import ConfirmModal from '../components/ConfirmModal';
import './SuperadminDashboard.css';

const MOCK_BAKERIES = [
  { id: 1, name: "Sweet Delights Bakery", address: "123 Main St, NY", mobile: "+1 234 567 8900", plan: "Premium", status: "Active", banner: "/birthday_cake_banner.png", validUntil: "2027-06-19", isBlocked: false, customersCount: 1240, messagesSent: 14290, messageLimit: 20000, waStatus: 'connected' },
  { id: 2, name: "The Cake Corner", address: "456 Baker Ave, CA", mobile: "+1 987 654 3210", plan: "Basic", status: "Blocked", banner: "/bakery_festival_banner.png", validUntil: "2024-05-10", isBlocked: true, customersCount: 310, messagesSent: 480, messageLimit: 500, waStatus: 'disconnected' }
];

const SuperadminDashboard = () => {
  const getInitialBakeries = () => {
    const saved = localStorage.getItem('global_bakeries');
    if (saved) return JSON.parse(saved);
    localStorage.setItem('global_bakeries', JSON.stringify(MOCK_BAKERIES));
    return MOCK_BAKERIES;
  };

  const [bakeries, setBakeries] = useState(getInitialBakeries);
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', address: '', mobile: '', plan: 'Basic', banner: '/birthday_cake_banner.png' });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, banner: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    localStorage.setItem('global_bakeries', JSON.stringify(bakeries));
  }, [bakeries]);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [bakeryToDelete, setBakeryToDelete] = useState(null);

  const handleAddBakery = (e) => {
    e.preventDefault();
    const newBakery = {
      id: Date.now(),
      ...formData,
      status: 'Active',
      banner: formData.banner,
      validUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
      isBlocked: false,
      customersCount: 0,
      messagesSent: 0,
      messageLimit: formData.plan === 'Basic' ? 500 : 20000,
      waStatus: 'pending'
    };
    setBakeries([...bakeries, newBakery]);
    setShowAddForm(false);
    setFormData({ name: '', address: '', mobile: '', plan: 'Basic', banner: '/birthday_cake_banner.png' });
  };

  const handleDeleteClick = (id) => {
    setBakeryToDelete(id);
    setDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    if (bakeryToDelete) {
      setBakeries(bakeries.filter(b => b.id !== bakeryToDelete));
      setDeleteModalOpen(false);
      setBakeryToDelete(null);
    }
  };

  const cancelDelete = () => {
    setDeleteModalOpen(false);
    setBakeryToDelete(null);
  };

  const handleToggleBlock = (id) => {
    setBakeries(bakeries.map(b => {
      if (b.id === id) {
        const newStatus = !b.isBlocked;
        return { ...b, isBlocked: newStatus, status: newStatus ? "Blocked" : "Active" };
      }
      return b;
    }));
  };

  return (
    <div className="dashboard-container animate-fade-in" style={{ paddingBottom: '2rem' }}>
      
      {/* Premium Bakery SaaS Header */}
      <div className="premium-bakery-hero mb-8 animate-fade-in">
        <div className="hero-overlay"></div>
        <div className="hero-content relative z-10 flex justify-between items-center">
          <div>
            <h1 className="hero-title text-white">BakeReach Command Center</h1>
            <p className="hero-subtitle text-white/90">Monitor bakery performance, WhatsApp API health, and manage client subscriptions globally.</p>
          </div>
          <button className="btn premium-btn-primary" style={{ background: 'white', color: 'var(--accent-primary)' }} onClick={() => setShowAddForm(!showAddForm)}>
            <Plus size={18} /> Onboard New Bakery
          </button>
        </div>
      </div>

      {showAddForm && (
        <div className="premium-form-card mb-6 animate-fade-in">
          <h2 className="form-heading flex items-center gap-2">
            <Store size={20} /> Client Onboarding Form
          </h2>
          <form onSubmit={handleAddBakery} className="add-bakery-form">
            <div className="form-row flex gap-6">
              <div className="form-group flex-1">
                <label className="form-label">Bakery Name</label>
                <input 
                  type="text" 
                  className="form-input" 
                  required
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  placeholder="e.g. Magical Cakes"
                />
              </div>
              <div className="form-group flex-1">
                <label className="form-label">Manager Mobile Number</label>
                <input 
                  type="tel" 
                  className="form-input" 
                  required
                  value={formData.mobile}
                  onChange={e => setFormData({...formData, mobile: e.target.value})}
                  placeholder="e.g. +1 234 567 8900"
                />
              </div>
            </div>
            <div className="form-row flex gap-6">
              <div className="form-group flex-1">
                <label className="form-label">Complete Address</label>
                <input 
                  type="text" 
                  className="form-input" 
                  required
                  value={formData.address}
                  onChange={e => setFormData({...formData, address: e.target.value})}
                  placeholder="Enter full address"
                />
              </div>
              <div className="form-group flex-1">
                <label className="form-label">Subscription Plan</label>
                <select 
                  className="form-input"
                  value={formData.plan}
                  onChange={e => setFormData({...formData, plan: e.target.value})}
                >
                  <option value="Basic">Basic Plan (Birthdays only)</option>
                  <option value="Premium">Premium Plan (Birthdays + Festivals)</option>
                  <option value="Enterprise">Enterprise Plan (Unlimited)</option>
                </select>
              </div>
              <div className="form-group flex-1">
                <label className="form-label">Upload Bakery Cover Image</label>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  {formData.banner && (
                    <img src={formData.banner} alt="Preview" style={{ width: '80px', height: '40px', objectFit: 'cover', borderRadius: '6px', border: '1px solid var(--border-color)' }} />
                  )}
                  <input type="file" accept="image/*" onChange={handleImageUpload} className="form-input" style={{ flex: 1, padding: '0.4rem' }} />
                </div>
              </div>
            </div>
            <div className="form-actions-right mt-6">
              <button type="button" className="premium-btn-ghost mr-3" onClick={() => setShowAddForm(false)}>Cancel</button>
              <button type="submit" className="premium-btn-primary">Save & Dispatch Credentials</button>
            </div>
          </form>
        </div>
      )}

      {/* Revenue Analytics Section */}
      <div className="analytics-section">
        <div className="mrr-card">
          <div className="flex justify-between items-start">
            <div>
              <h3>Monthly Recurring Revenue</h3>
              <div className="mrr-value">$1,240 <span style={{fontSize: '1rem', color: 'var(--success)', fontWeight: '600'}}>+12%</span></div>
            </div>
            <div style={{ padding: '0.8rem', background: '#ecfdf5', borderRadius: '12px', color: '#10b981' }}>
              <TrendingUp size={24} />
            </div>
          </div>
          <p className="text-sm text-secondary" style={{ marginTop: '0.5rem' }}>Based on current active subscriptions across all bakeries.</p>
        </div>

        <div className="mrr-card">
          <h3>Plan Distribution</h3>
          <div className="plan-distribution">
            <div className="plan-bar-container">
              <div className="plan-bar-premium" style={{ width: '65%' }}></div>
              <div className="plan-bar-basic" style={{ width: '35%' }}></div>
            </div>
            <div className="plan-legend">
              <span style={{ color: 'var(--accent-primary)' }}>65% Premium</span>
              <span style={{ color: '#3b82f6' }}>35% Basic</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats Overview */}
      <div className="saas-stats-grid mb-8">
        <div className="saas-stat-card">
          <div className="saas-stat-icon text-indigo-600 bg-indigo-50"><Store size={24} /></div>
          <div className="saas-stat-info">
            <h3>Total Active Clients</h3>
            <p className="saas-stat-value">{bakeries.length}</p>
          </div>
        </div>
        <div className="saas-stat-card">
          <div className="saas-stat-icon text-pink-600 bg-pink-50"><MessageSquare size={24} /></div>
          <div className="saas-stat-info">
            <h3>Messages Dispatched</h3>
            <p className="saas-stat-value">14,290</p>
          </div>
        </div>
        <div className="saas-stat-card">
          <div className="saas-stat-icon text-emerald-600 bg-emerald-50"><Users size={24} /></div>
          <div className="saas-stat-info">
            <h3>Global Customers</h3>
            <p className="saas-stat-value">8,450</p>
          </div>
        </div>
        <div className="saas-stat-card">
          <div className="saas-stat-icon text-blue-600 bg-blue-50"><Activity size={24} /></div>
          <div className="saas-stat-info">
            <h3>API Health</h3>
            <p className="saas-stat-value text-success">99.9% Up</p>
          </div>
        </div>
      </div>

      <h2 className="premium-title" style={{fontSize: '1.5rem', marginBottom: '1rem'}}>Active Integrations</h2>
      <div className="saas-cards-grid">
        {bakeries.map((bakery, idx) => {
          const apiUsagePercent = Math.min(100, Math.round((bakery.messagesSent / bakery.messageLimit) * 100));
          const progressColor = apiUsagePercent > 90 ? 'danger' : apiUsagePercent > 75 ? 'warning' : 'safe';

          return (
          <div key={bakery.id} className="saas-bakery-card" style={{ animationDelay: `${idx * 0.1}s`, opacity: bakery.isBlocked ? 0.7 : 1 }}>
            
            <div className="card-image-header" style={{ backgroundImage: `url(${bakery.banner})`, filter: bakery.isBlocked ? 'grayscale(100%) brightness(0.7)' : 'none' }}>
              <span className={`saas-status-badge ${bakery.isBlocked ? 'blocked' : 'active'}`}>
                {bakery.isBlocked ? <AlertCircle size={12} /> : <CheckCircle2 size={12} />} {bakery.status}
              </span>
            </div>

            <div className="saas-card-body p-5 flex flex-col flex-1">
              <div className="saas-card-header flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="saas-bakery-icon" style={{ filter: bakery.isBlocked ? 'grayscale(100%)' : 'none' }}>
                    <Store size={20} />
                  </div>
                  <div>
                    <h3 className="saas-bakery-name">{bakery.name}</h3>
                    <span className="text-xs text-secondary font-semibold uppercase tracking-wide">{bakery.plan} Plan</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button onClick={() => handleToggleBlock(bakery.id)} className="icon-action-btn" title={bakery.isBlocked ? "Unblock Login" : "Block Login (Subscription Ended)"}>
                    {bakery.isBlocked ? <Unlock size={16} /> : <Ban size={16} />}
                  </button>
                  <button onClick={() => handleDeleteClick(bakery.id)} className="icon-action-btn delete" title="Delete Bakery">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
              
            <div className="saas-bakery-metrics">
              <div className="saas-metric">
                <div className="saas-metric-val">{bakery.customersCount}</div>
                <div className="saas-metric-label">Customers</div>
              </div>
              <div className="saas-metric-divider"></div>
              <div className="saas-metric">
                <div className="saas-metric-val">{bakery.messagesSent}</div>
                <div className="saas-metric-label">Sent</div>
              </div>
            </div>

            <div className="saas-bakery-details">
              <div className="saas-detail-item" style={{color: bakery.waStatus === 'connected' ? '#10b981' : (bakery.waStatus === 'pending' ? '#f59e0b' : '#ef4444')}}>
                {bakery.waStatus === 'connected' ? <Wifi size={14}/> : <WifiOff size={14}/>}
                <span className="font-semibold">API: {bakery.waStatus.charAt(0).toUpperCase() + bakery.waStatus.slice(1)}</span>
              </div>
              <div className="saas-detail-item">
                <MapPin size={14} />
                <span>{bakery.address}</span>
              </div>
              <div className="saas-detail-item">
                <Calendar size={14} className={bakery.isBlocked ? 'text-danger' : ''} />
                <span className={bakery.isBlocked ? 'text-danger font-semibold' : ''}>Valid until: {bakery.validUntil}</span>
              </div>
            </div>

            {/* API Rate Limit Progress */}
            <div className="api-limit-container">
              <div className="api-limit-header">
                <span>Message Quota</span>
                <span>{bakery.messagesSent.toLocaleString()} / {bakery.messageLimit.toLocaleString()}</span>
              </div>
              <div className="api-progress-bg">
                <div className={`api-progress-fill ${progressColor}`} style={{ width: `${apiUsagePercent}%` }}></div>
              </div>
              {apiUsagePercent > 80 && (
                <button className="upsell-btn flex items-center justify-center gap-2" onClick={() => alert('Upgrade offer dispatched to Bakery Manager via WhatsApp!')}>
                  <AlertCircle size={14} /> Send Upgrade Offer
                </button>
              )}
            </div>

            </div>
          </div>
          );
        })}
      </div>

      <ConfirmModal 
        isOpen={deleteModalOpen}
        title="Delete Bakery"
        message="Are you sure you want to permanently delete this bakery? All associated data, including customer profiles and messaging history, will be removed. This action cannot be undone."
        confirmText="Delete Bakery"
        cancelText="Cancel"
        type="danger"
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
      />
    </div>
  );
};

export default SuperadminDashboard;

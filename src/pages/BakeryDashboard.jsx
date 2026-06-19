import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, Plug, Users, MessageSquare, AlertCircle, HelpCircle, Send, Settings, UserPlus, Inbox, Camera, Calendar, Gift, Wand2, Loader2, Play, CreditCard, Activity, TrendingUp, Store, Trash2, Edit2, Search, Bot, CheckCheck, Paperclip, MoreVertical, ClipboardList, CheckCircle, MapPin, Mail, Phone, ShieldCheck, Check, X, Menu } from 'lucide-react';
import './BakeryDashboard.css';



const PremiumWorkflowMock = () => (
  <div className="premium-flow-canvas mb-8">
    <div className="flex justify-between items-center mb-6">
      <h3 className="section-heading flex items-center gap-2"><Settings size={18}/> Live Automation Architecture</h3>
    </div>
    
    <div className="premium-flow-row">
      <div className="premium-flow-node" style={{ borderLeft: '4px solid #3b82f6' }}>
        <div className="node-overlay-actions">
           <button className="node-action-btn" onClick={() => showToast('Opening logic editor...')}>Edit Logic</button>
           <button className="node-action-btn" onClick={() => showToast('Viewing node execution logs...')}>Logs</button>
         </div>
        <div className="node-header" style={{ color: '#60a5fa', background: 'transparent', borderBottom: '1px solid rgba(255,255,255,0.1)' }}><UserPlus size={16}/> Customer Data Entry</div>
        <div className="node-body">
          <div className="node-sample-image flex flex-col gap-1">
            <div className="mock-input">👤 Name & Mobile</div>
            <div className="mock-input">🎂 Date of Birth</div>
          </div>
          <p className="node-desc">System detects new ledger entry.</p>
        </div>
        <div className="node-port out"></div>
      </div>
      
      <div className="premium-flow-connection"></div>
      
      <div className="premium-flow-node" style={{ borderLeft: '4px solid #f59e0b' }}>
        <div className="node-overlay-actions">
           <button className="node-action-btn" onClick={() => showToast('Opening logic editor...')}>Edit Logic</button>
           <button className="node-action-btn" onClick={() => showToast('Viewing node execution logs...')}>Logs</button>
         </div>
        <div className="node-port in"></div>
        <div className="node-header" style={{ color: '#fbbf24', background: 'transparent', borderBottom: '1px solid rgba(255,255,255,0.1)' }}><Calendar size={16}/> Event Timer</div>
        <div className="node-body">
          <div className="node-sample-image timer-mock">
            ⏳ Wait until 48 hrs before DOB
          </div>
          <p className="node-desc">Holds message until perfect time.</p>
        </div>
        <div className="node-port out"></div>
      </div>
      
      <div className="premium-flow-connection"></div>
      
      <div className="premium-flow-node" style={{ borderLeft: '4px solid #10b981' }}>
        <div className="node-overlay-actions">
           <button className="node-action-btn" onClick={() => showToast('Opening logic editor...')}>Edit Logic</button>
           <button className="node-action-btn" onClick={() => showToast('Viewing node execution logs...')}>Logs</button>
         </div>
        <div className="node-port in"></div>
        <div className="node-header" style={{ color: '#34d399', background: 'transparent', borderBottom: '1px solid rgba(255,255,255,0.1)' }}><MessageSquare size={16}/> WhatsApp Dispatch</div>
        <div className="node-body">
          <div className="node-sample-image wa-mock">
            <img src="/birthday_cake_banner.png" alt="sample" className="wa-mock-img" />
            <div className="wa-mock-text">Advance Happy Birthday! 🎉</div>
          </div>
          <p className="node-desc">Fires personalized greeting.</p>
        </div>
        <div className="node-port out"></div>
      </div>
    </div>
    
    <div className="premium-flow-row mt-8">
      <div className="premium-flow-node" style={{ borderLeft: '4px solid #8b5cf6' }}>
        <div className="node-overlay-actions">
           <button className="node-action-btn" onClick={() => showToast('Opening logic editor...')}>Edit Logic</button>
           <button className="node-action-btn" onClick={() => showToast('Viewing node execution logs...')}>Logs</button>
         </div>
        <div className="node-header" style={{ color: '#a78bfa', background: 'transparent', borderBottom: '1px solid rgba(255,255,255,0.1)' }}><MessageSquare size={16}/> Customer Reply</div>
        <div className="node-body">
          <div className="node-sample-image wa-mock-reply-container">
             <div className="wa-mock-reply">Thank you! How much is it?</div>
          </div>
          <p className="node-desc">Listens for return messages.</p>
        </div>
        <div className="node-port out"></div>
      </div>
      
      <div className="premium-flow-connection"></div>
      
      <div className="premium-flow-node" style={{ borderLeft: '4px solid #10b981' }}>
        <div className="node-overlay-actions">
           <button className="node-action-btn" onClick={() => showToast('Opening logic editor...')}>Edit Logic</button>
           <button className="node-action-btn" onClick={() => showToast('Viewing node execution logs...')}>Logs</button>
         </div>
        <div className="node-port in"></div>
        <div className="node-header" style={{ color: '#34d399', background: 'transparent', borderBottom: '1px solid rgba(255,255,255,0.1)' }}><MessageSquare size={16}/> WhatsApp Auto-Reply</div>
        <div className="node-body">
           <div className="node-sample-image wa-mock">
             <div className="wa-mock-text">To place an order, contact the manager: +1 234 567 8900</div>
          </div>
          <p className="node-desc">Shares direct contact details.</p>
        </div>
      </div>
    </div>
  </div>
);

const BakeryDashboard = () => {
  const navigate = useNavigate();
  const [bakery, setBakery] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Slide state
  const [currentSlide, setCurrentSlide] = useState(0);

  // Form states
  const [customerForm, setCustomerForm] = useState({ name: '', mobile: '', dob: '' });
  const [configForm, setConfigForm] = useState({ birthdayQuote: '', festivalQuote: '' });
  const [campaigns, setCampaigns] = useState({ birthday: true, festival: false });
  const [customers, setCustomers] = useState([
    { id: 1, name: 'Alice Smith', mobile: '+1 555-0101', dob: '1990-05-15', added: 'Today' },
    { id: 2, name: 'Bob Johnson', mobile: '+1 555-0102', dob: '1985-11-20', added: 'Yesterday' }
  ]);
  const [inbox] = useState([
    { id: 1, name: 'Alice Smith', msg: 'thank you! the cake looks delicious.', time: '10:45 AM', autoReplied: true },
    { id: 2, name: 'Charlie Brown', msg: 'how much is this cake?', time: '09:12 AM', autoReplied: true }
  ]);
  const [logs] = useState([
    { id: 101, recipient: 'Alice Smith', phone: '+1 555-0101', type: 'Birthday Campaign', status: 'Delivered', time: 'Today, 10:45 AM' },
    { id: 102, recipient: 'Charlie Brown', phone: '+1 555-0103', type: 'Auto-Reply', status: 'Delivered', time: 'Today, 09:12 AM' },
    { id: 103, recipient: 'Bob Johnson', phone: '+1 555-0102', type: 'Festival Campaign', status: 'Failed', error: 'Invalid Number', time: 'Yesterday, 04:30 PM' },
    { id: 104, recipient: 'Diana Prince', phone: '+1 555-0104', type: 'Birthday Campaign', status: 'Delivered', time: 'Yesterday, 10:00 AM' },
    { id: 105, recipient: 'Eve Adams', phone: '+1 555-0105', type: 'Festival Campaign', status: 'Delivered', time: 'Yesterday, 09:15 AM' },
  ]);
  const [expandedLogId, setExpandedLogId] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);
  const [showBillingModal, setShowBillingModal] = useState(false);
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };


  const [isGeneratingQuote, setIsGeneratingQuote] = useState(null);
  const [isGeneratingImage, setIsGeneratingImage] = useState(null);
  const [generatedImages, setGeneratedImages] = useState({ b1: null, b2: null, f1: null });

  const slidesData = [
    { img: '/banner_1.png', quote: 'Freshly Baked Delights Every Morning' },
    { img: '/banner_2.png', quote: 'Making Your Celebrations Unforgettable' },
    { img: '/banner_3.png', quote: 'Artisan Quality, Handcrafted with Love' }
  ];

  useEffect(() => {
    if (!bakery) return;
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slidesData.length);
    }, 2000); // 2 second interval
    return () => clearInterval(interval);
  }, [bakery, slidesData.length]);

  const handleGenerateQuote = (type) => {
    setIsGeneratingQuote(type);
    setTimeout(() => {
      if (type === 'birthday') {
        setConfigForm(prev => ({...prev, birthdayQuote: "🎉 Make your special day unforgettable! Order our signature handcrafted chocolate truffles and get a free personalized message. Let's celebrate YOU! 🎂✨"}));
      } else {
        setConfigForm(prev => ({...prev, festivalQuote: "🌟 Light up your festivities! Bring home the joy with our exclusive festive hampers, baked fresh with love. Grab your box of happiness today! 🪔✨"}));
      }
      setIsGeneratingQuote(null);
    }, 1500);
  };

  const handleGenerateImage = (type) => {
    setIsGeneratingImage(type);
    setTimeout(() => {
      if (type === 'b1') setGeneratedImages(prev => ({...prev, b1: '/birthday_cake_banner.png'}));
      if (type === 'b2') setGeneratedImages(prev => ({...prev, b2: '/realistic_bakery_bg.png'}));
      if (type === 'f1') setGeneratedImages(prev => ({...prev, f1: '/bakery_festival_banner.png'}));
      setIsGeneratingImage(null);
    }, 2000);
  };

  useEffect(() => {
    const saved = localStorage.getItem('global_bakeries');
    if (saved) {
      const bakeries = JSON.parse(saved);
      setBakery(bakeries[0] || null);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('bakery_auth');
    navigate('/login');
  };

  const handleAddCustomer = (e) => {
    e.preventDefault();
    setCustomers([{ id: Date.now(), ...customerForm, added: 'Just now' }, ...customers]);
    setCustomerForm({ name: '', mobile: '', dob: '' });
    showToast('Customer successfully added to your digital ledger!');
  };

  const handleSaveConfig = (e) => {
    e.preventDefault();
    showToast('Campaign configuration saved successfully!');
  };

  if (!bakery) {
    return <div className="flex justify-center p-10">Loading Bakery Data...</div>;
  }

  const apiUsagePercent = Math.min(100, Math.round((bakery.messagesSent / bakery.messageLimit) * 100));
  const progressColor = apiUsagePercent > 90 ? 'danger' : apiUsagePercent > 75 ? 'warning' : 'safe';

  return (
    <div className="bakery-dashboard-layout animate-fade-in">
      {/* Dynamic Blurred Background */}
      <div className="dashboard-bg-blur" style={{ backgroundImage: `url(${bakery.banner})` }}></div>
      <div className="dashboard-bg-overlay"></div>

      {/* Mobile Header (Visible only on small screens) */}
      <div className="mobile-header">
        <div className="flex items-center gap-3">
          <img src={bakery.banner} alt="Logo" className="mobile-header-logo" />
          <h1 className="mobile-header-title">{bakery.name}</h1>
        </div>
        <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div className="sidebar-mobile-overlay" onClick={() => setIsMobileMenuOpen(false)}></div>
      )}

      <aside className={`bakery-sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
        <div>
          <div className="sidebar-header">
            <img src={bakery.banner} alt="Logo" className="sidebar-logo" />
            <div className="sidebar-title-container">
              <h1 className="sidebar-title">{bakery.name}</h1>
              <span className="premium-tag sidebar-plan-tag">{bakery.plan} Plan</span>
            </div>
          </div>
          <nav className="sidebar-nav">
            <button onClick={() => { setActiveTab('overview'); setIsMobileMenuOpen(false); }} className={`sidebar-tab ${activeTab==='overview'?'active':''}`}>
              <Users size={18}/> Dashboard
            </button>
            <button onClick={() => { setActiveTab('configuration'); setIsMobileMenuOpen(false); }} className={`sidebar-tab ${activeTab==='configuration'?'active':''}`}>
              <Settings size={18}/> Automations
            </button>
            <button onClick={() => { setActiveTab('customers'); setIsMobileMenuOpen(false); }} className={`sidebar-tab ${activeTab==='customers'?'active':''}`}>
              <UserPlus size={18}/> Customer Data
            </button>
            <button onClick={() => { setActiveTab('inbox'); setIsMobileMenuOpen(false); }} className={`sidebar-tab flex justify-between items-center ${activeTab==='inbox'?'active':''}`}>
              <div className="flex items-center gap-3"><Inbox size={18}/> Chat Inbox</div>
              <span className="badge-notification">2</span>
            </button>
            <button onClick={() => { setActiveTab('logs'); setIsMobileMenuOpen(false); }} className={`sidebar-tab ${activeTab==='logs'?'active':''}`}>
              <ClipboardList size={18}/> Dispatch Logs
            </button>
            <button onClick={() => { setActiveTab('integrations'); setIsMobileMenuOpen(false); }} className={`sidebar-tab ${activeTab==='integrations'?'active':''}`}>
              <Plug size={18}/> Integrations
            </button>
          </nav>
        </div>
        <div className="sidebar-footer flex flex-col gap-4">
          
          <div className="sidebar-profile-card" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.6), rgba(255,255,255,0.2))', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', padding: '18px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.8)', boxShadow: '0 8px 32px rgba(0,0,0,0.05)' }}>
            
            {/* Plan Details */}
            <div className="flex flex-col gap-2 mb-4">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Active Plan</span>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Validity</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-xl shadow-sm border border-slate-100">
                  <ShieldCheck size={14} className="text-indigo-600"/>
                  <span className="text-[12px] font-black text-indigo-600 tracking-wide uppercase">{bakery.plan}</span>
                </div>
                <span className="text-[12px] font-bold text-slate-700">Dec 31, '26</span>
              </div>
            </div>

            {/* Action Button */}
            <button className="w-full flex items-center justify-center gap-2 text-[12px] font-bold py-2.5 rounded-xl mb-4 transition-all hover:scale-[1.02]" style={{ background: 'linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)', color: '#ffffff', border: 'none', cursor: 'pointer', boxShadow: '0 4px 15px rgba(79, 70, 229, 0.3)' }} onClick={() => setShowBillingModal(true)}>
              <CreditCard size={15} /> Manage Billing
            </button>

            {/* Bakery Info */}
            <div className="flex flex-col gap-2.5 pt-3 border-t border-slate-200/50">
              <div className="flex items-center gap-3 text-slate-600">
                <div className="w-6 h-6 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-500"><Store size={12}/></div>
                <span className="text-[12px] font-bold text-slate-700 truncate">{bakery.name}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600">
                <div className="w-6 h-6 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-500"><Phone size={12}/></div>
                <span className="text-[12px] font-semibold font-mono text-slate-600">{bakery.mobile || '+1 234 567 8900'}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600">
                <div className="w-6 h-6 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-500"><Mail size={12}/></div>
                <span className="text-[12px] font-semibold text-slate-600 truncate">contact@sweetdelights.com</span>
              </div>
            </div>
          </div>

          <button onClick={handleLogout} className="btn-logout flex items-center justify-center gap-2 w-full py-3 rounded-xl transition-colors font-semibold text-sm mt-2" style={{ background: 'rgba(239, 68, 68, 0.08)', color: '#ef4444', border: 'none', cursor: 'pointer' }}>
            <LogOut size={18}/> Secure Logout
          </button>
        </div>
      </aside>

      <main className="bakery-main-area">
        <div className="bakery-main-container">
          
          {activeTab === 'overview' && (
            <div className="animate-fade-in">
              <div className="portal-hero mb-6 stagger-1">
                <div className="hero-slider" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                  {slidesData.map((slide, idx) => (
                    <div key={idx} className="hero-slide" style={{ backgroundImage: `url(${slide.img})` }}>
                       <div className="slide-quote-container">
                         <h2 className="side-quote">{slide.quote}</h2>
                       </div>
                    </div>
                  ))}
                </div>
                <div className="portal-hero-overlay"></div>
                <div className="portal-hero-content z-10 relative flex justify-between items-end">
                  <div>
                    <h2>Welcome back, Manager!</h2>
                    <p>Your WhatsApp API is <strong style={{color: '#4ade80'}}>{bakery.waStatus}</strong> and ready to dispatch.</p>
                  </div>
                </div>
              </div>

              <div className="quick-actions-row mb-6 stagger-2">
                <button className="quick-action-btn" onClick={() => showToast('Starting message simulation...')}><Play size={16} className="text-blue-500"/> Simulate Message</button>
                <button className="quick-action-btn" onClick={() => setActiveTab('customers')}><UserPlus size={16} className="text-green-500"/> Quick Add Customer</button>
                <button className="quick-action-btn" onClick={() => showToast('Redirecting to billing portal...')}><CreditCard size={16} className="text-pink-500"/> Recharge Quota</button>
              </div>

              <div className="portal-stats-grid mb-8 stagger-3">
                <div className="portal-stat-card glass-panel flex items-center gap-4 p-5">
                  <div className="stat-icon-wrapper bg-pink-100 text-pink-600"><Users size={28}/></div>
                  <div>
                    <h3>Total Customers</h3>
                    <p className="stat-value">{customers.length + bakery.customersCount}</p>
                  </div>
                </div>
                <div className="portal-stat-card glass-panel flex items-center gap-4 p-5">
                  <div className="stat-icon-wrapper bg-blue-100 text-blue-600"><Send size={28}/></div>
                  <div>
                    <h3>Messages Dispatched</h3>
                    <p className="stat-value">{bakery.messagesSent.toLocaleString()}</p>
                  </div>
                </div>
                <div className="portal-stat-card glass-panel flex flex-col justify-center p-5 relative overflow-hidden">
                  <div className="flex justify-between items-end mb-2 relative z-10">
                    <div>
                      <h3>API Message Quota</h3>
                      <p className="text-sm text-secondary">{bakery.messagesSent.toLocaleString()} / {bakery.messageLimit.toLocaleString()}</p>
                    </div>
                  </div>
                  <div className="api-progress-bar-bg relative z-10">
                    <div className={`api-progress-bar-fill ${progressColor}`} style={{width: `${apiUsagePercent}%`}}></div>
                  </div>
                </div>
              </div>

              {/* Bottom Analytics & Activity Grid */}
              <div className="dashboard-bottom-grid stagger-4">
                <div className="glass-panel p-5">
                  <h3 className="section-heading text-sm flex items-center gap-2 mb-4"><Calendar size={16}/> Upcoming Birthdays</h3>
                  <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-center bg-white bg-opacity-40 p-3 rounded-xl">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center font-bold text-xs">JS</div>
                        <span className="font-semibold text-sm">John Smith</span>
                      </div>
                      <span className="text-xs font-bold text-pink-600">Tomorrow!</span>
                    </div>
                    <div className="flex justify-between items-center bg-white bg-opacity-40 p-3 rounded-xl">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs">ED</div>
                        <span className="font-semibold text-sm">Emma Davis</span>
                      </div>
                      <span className="text-xs font-bold text-gray-500">In 3 days</span>
                    </div>
                    <div className="flex justify-between items-center bg-white bg-opacity-40 p-3 rounded-xl">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-xs">MR</div>
                        <span className="font-semibold text-sm">Mike Ross</span>
                      </div>
                      <span className="text-xs font-bold text-gray-500">In 5 days</span>
                    </div>
                  </div>
                </div>

                <div className="glass-panel p-5">
                  <h3 className="section-heading text-sm flex items-center gap-2 mb-4"><Activity size={16}/> Live Activity Feed</h3>
                  <div className="flex flex-col">
                    <div className="activity-item">
                      <div className="activity-dot bg-green-500"></div>
                      <div>
                        <span className="activity-text">Auto-replied to Alice Smith.</span>
                        <span className="activity-time">2 mins ago</span>
                      </div>
                    </div>
                    <div className="activity-item">
                      <div className="activity-dot bg-blue-500"></div>
                      <div>
                        <span className="activity-text">Dispatched birthday message to Sarah.</span>
                        <span className="activity-time">1 hour ago</span>
                      </div>
                    </div>
                    <div className="activity-item">
                      <div className="activity-dot bg-pink-500"></div>
                      <div>
                        <span className="activity-text">Counter staff added new customer.</span>
                        <span className="activity-time">3 hours ago</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="glass-panel p-5">
                  <h3 className="section-heading text-sm flex items-center gap-2 mb-2"><TrendingUp size={16}/> Weekly Analytics</h3>
                  <p className="text-xs text-gray-500 mb-4">Messages sent vs replies (Last 7 days)</p>
                  <div className="analytics-chart">
                    <div className="chart-bar" style={{height: '30%', animationDelay: '0.1s'}} title="Mon: 30"></div>
                    <div className="chart-bar" style={{height: '50%', animationDelay: '0.2s'}} title="Tue: 50"></div>
                    <div className="chart-bar" style={{height: '80%', animationDelay: '0.3s'}} title="Wed: 80"></div>
                    <div className="chart-bar" style={{height: '40%', animationDelay: '0.4s'}} title="Thu: 40"></div>
                    <div className="chart-bar" style={{height: '90%', animationDelay: '0.5s'}} title="Fri: 90"></div>
                    <div className="chart-bar" style={{height: '100%', animationDelay: '0.6s'}} title="Sat: 100"></div>
                    <div className="chart-bar" style={{height: '60%', animationDelay: '0.7s'}} title="Sun: 60"></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-2 font-mono">
                    <span>Mon</span><span>Wed</span><span>Fri</span><span>Sun</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'configuration' && (
            <div className="animate-fade-in">
              <div className="glass-panel p-8 mb-8">
                <PremiumWorkflowMock />
              </div>

              <form onSubmit={(e) => { e.preventDefault(); showToast('Architecture Deployed Successfully!'); }}>
                <div className="config-card mb-8">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="flex items-center gap-2 mb-2"><Gift size={20} className="text-pink-600"/> Birthday Automation Settings</h3>
                      <div className="flex items-center gap-3 mb-6">
                        <div className={`ios-toggle ${campaigns.birthday ? 'active' : ''}`} onClick={() => setCampaigns({...campaigns, birthday: !campaigns.birthday})}></div>
                        <span className="text-sm font-semibold text-secondary">{campaigns.birthday ? 'Active' : 'Paused'}</span>
                        {campaigns.birthday && <span className="campaign-badge"><Activity size={12}/> Fired 12x Today</span>}
                      </div>
                    </div>
                  </div>
                  
                  <div className="form-group mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <label className="form-label mb-0">Promotional Quote</label>
                      <button type="button" className="btn-ghost text-xs flex items-center gap-1" style={{color: '#8b5cf6'}} onClick={() => handleGenerateQuote('birthday')}>
                        {isGeneratingQuote === 'birthday' ? <Loader2 size={14} className="animate-spin"/> : <Wand2 size={14}/>} AI Generate
                      </button>
                    </div>
                    <textarea 
                      className={`form-input ${isGeneratingQuote === 'birthday' ? 'ai-processing' : ''}`} 
                      rows="2" 
                      placeholder="e.g., Happy Birthday! Here is 15% off your cake."
                      value={configForm.birthdayQuote}
                      onChange={(e) => setConfigForm({...configForm, birthdayQuote: e.target.value})}
                    ></textarea>
                  </div>
                  
                  <div className="form-group flex gap-4">
                    <div className="form-group flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <label className="form-label flex items-center gap-2 mb-0"><Camera size={16}/> Birthday Image 1</label>
                        <button type="button" className="btn-ghost text-xs flex items-center gap-1" style={{color: '#8b5cf6'}} onClick={() => handleGenerateImage('b1')}>
                          {isGeneratingImage === 'b1' ? <Loader2 size={14} className="animate-spin"/> : <Wand2 size={14}/>} AI Gen
                        </button>
                      </div>
                      {generatedImages.b1 ? (
                        <img src={generatedImages.b1} alt="Generated" className="generated-preview-img" />
                      ) : (
                        <input type="file" className="form-input" accept="image/*" />
                      )}
                    </div>
                    <div className="form-group flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <label className="form-label flex items-center gap-2 mb-0"><Camera size={16}/> Birthday Image 2</label>
                        <button type="button" className="btn-ghost text-xs flex items-center gap-1" style={{color: '#8b5cf6'}} onClick={() => handleGenerateImage('b2')}>
                          {isGeneratingImage === 'b2' ? <Loader2 size={14} className="animate-spin"/> : <Wand2 size={14}/>} AI Gen
                        </button>
                      </div>
                      {generatedImages.b2 ? (
                        <img src={generatedImages.b2} alt="Generated" className="generated-preview-img" />
                      ) : (
                        <input type="file" className="form-input" accept="image/*" />
                      )}
                    </div>
                  </div>
                </div>

                <div className="config-card mb-8">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="flex items-center gap-2 mb-2"><Gift size={20} className="text-blue-600"/> Festival Automation Settings</h3>
                      <div className="flex items-center gap-3 mb-6">
                        <div className={`ios-toggle ${campaigns.festival ? 'active' : ''}`} onClick={() => setCampaigns({...campaigns, festival: !campaigns.festival})}></div>
                        <span className="text-sm font-semibold text-secondary">{campaigns.festival ? 'Active' : 'Paused'}</span>
                        {campaigns.festival && <span className="campaign-badge"><Activity size={12}/> Standby</span>}
                      </div>
                    </div>
                  </div>
                  
                  <div className="form-group mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <label className="form-label mb-0">Promotional Quote</label>
                      <button type="button" className="btn-ghost text-xs flex items-center gap-1" style={{color: '#8b5cf6'}} onClick={() => handleGenerateQuote('festival')}>
                        {isGeneratingQuote === 'festival' ? <Loader2 size={14} className="animate-spin"/> : <Wand2 size={14}/>} AI Generate
                      </button>
                    </div>
                    <textarea 
                      className={`form-input ${isGeneratingQuote === 'festival' ? 'ai-processing' : ''}`} 
                      rows="2" 
                      placeholder="e.g., Wishing you a joyous Diwali! Check out our exclusive hamper collections."
                      value={configForm.festivalQuote}
                      onChange={(e) => setConfigForm({...configForm, festivalQuote: e.target.value})}
                    ></textarea>
                  </div>
                  
                  <div className="form-group">
                    <div className="flex justify-between items-center mb-2">
                      <label className="form-label flex items-center gap-2 mb-0"><Camera size={16}/> Festival Promotional Banner</label>
                      <button type="button" className="btn-ghost text-xs flex items-center gap-1" style={{color: '#8b5cf6'}} onClick={() => handleGenerateImage('f1')}>
                        {isGeneratingImage === 'f1' ? <Loader2 size={14} className="animate-spin"/> : <Wand2 size={14}/>} AI Gen
                      </button>
                    </div>
                    {generatedImages.f1 ? (
                      <img src={generatedImages.f1} alt="Generated" className="generated-preview-img banner" />
                    ) : (
                      <input type="file" className="form-input" accept="image/*" />
                    )}
                  </div>
                </div>

                <button type="submit" className="btn-primary" style={{width: '100%', justifyContent: 'center', marginTop: '1rem', padding: '1rem', fontSize: '1.1rem'}}>
                  <Settings size={18}/> Save & Deploy Automations
                </button>
              </form>
            </div>
          )}

          {activeTab === 'customers' && (
            <div className="portal-bottom-section flex gap-6 animate-fade-in" style={{ alignItems: 'flex-start' }}>
              
              {/* Add Customer Form */}
              <div className="portal-section flex-1 glass-panel p-8" style={{position: 'sticky', top: '2rem', border: '1px solid rgba(255,255,255,0.4)', borderRadius: '24px'}}>
                <h3 className="section-heading mb-2 flex items-center gap-2"><UserPlus size={20}/> New Customer Entry</h3>
                <p className="text-sm text-secondary mb-6 pb-4" style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>Input physical data collected at the counter.</p>
                <form onSubmit={(e) => { e.preventDefault(); handleAddCustomer(e); showToast('✅ Customer saved successfully to the ledger!'); }} className="flex-col gap-5" style={{ display: 'flex' }}>
                  <div className="form-group">
                    <label className="form-label mb-2" style={{ fontWeight: '600', color: '#334155' }}>Customer Name</label>
                    <input type="text" className="form-input" style={{ borderRadius: '12px', padding: '12px 16px', background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(0,0,0,0.1)' }} placeholder="e.g. Alice Smith" required value={customerForm.name} onChange={e => setCustomerForm({...customerForm, name: e.target.value})} />
                  </div>
                  <div className="form-group">
                    <label className="form-label mb-2" style={{ fontWeight: '600', color: '#334155' }}>Mobile Number</label>
                    <input type="tel" className="form-input" style={{ borderRadius: '12px', padding: '12px 16px', background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(0,0,0,0.1)' }} placeholder="+1 234 567 8900" required value={customerForm.mobile} onChange={e => setCustomerForm({...customerForm, mobile: e.target.value})} />
                  </div>
                  <div className="form-group">
                    <label className="form-label mb-2" style={{ fontWeight: '600', color: '#334155' }}>Date of Birth</label>
                    <input type="date" className="form-input" style={{ borderRadius: '12px', padding: '12px 16px', background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(0,0,0,0.1)' }} required value={customerForm.dob} onChange={e => setCustomerForm({...customerForm, dob: e.target.value})} />
                  </div>
                  <button type="submit" style={{width: '100%', justifyContent: 'center', marginTop: '1rem', padding: '14px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: '12px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', boxShadow: '0 4px 14px rgba(59, 130, 246, 0.3)', transition: 'transform 0.2s, box-shadow 0.2s' }}>
                    Save to Ledger
                  </button>
                </form>
              </div>

              {/* Digital Ledger */}
              <div className="portal-section flex-[1.5] glass-panel p-8" style={{ border: '1px solid rgba(255,255,255,0.4)', borderRadius: '24px' }}>
                <div className="flex justify-between items-end mb-6 pb-4" style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <div>
                    <h3 className="section-heading mb-1 flex items-center gap-2"><Users size={20}/> Digital Ledger Database</h3>
                    <p className="text-sm text-secondary m-0">Manage your synced CRM contacts</p>
                  </div>
                  
                  <div className="relative">
                    <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input type="text" placeholder="Search customers..." className="form-input pl-9" style={{ borderRadius: '20px', padding: '8px 16px 8px 36px', fontSize: '0.85rem', width: '220px', background: 'rgba(255,255,255,0.6)' }} />
                  </div>
                </div>

                <div className="customers-list flex-col gap-4">
                  {customers.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '3rem 1rem', background: 'rgba(255,255,255,0.4)', borderRadius: '16px', border: '1px dashed rgba(0,0,0,0.1)' }}>
                      <Users size={48} className="text-gray-300 mx-auto mb-3" />
                      <h4 style={{ color: '#64748b', fontWeight: '600' }}>No Customers Yet</h4>
                      <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginTop: '4px' }}>Add your first customer using the form to start building your ledger.</p>
                    </div>
                  ) : (
                    customers.map(c => {
                      const dateObj = new Date(c.dob);
                      const formattedDob = isNaN(dateObj.getTime()) ? c.dob : new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).format(dateObj);
                      
                      return (
                        <div key={c.id} className="customer-row flex justify-between items-center p-5 relative group" style={{ background: 'rgba(255,255,255,0.6)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.8)', transition: 'all 0.2s', cursor: 'pointer' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'none'}>
                          
                          <div className="flex items-center gap-4">
                            <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'rgba(236, 72, 153, 0.1)', color: '#ec4899', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Users size={20}/></div>
                            <div>
                              <h4 style={{ fontWeight: '700', color: '#1e293b', fontSize: '1.05rem', margin: 0 }}>{c.name}</h4>
                              <p style={{ color: '#64748b', fontSize: '0.85rem', margin: '2px 0 0 0', fontFamily: 'monospace' }}>{c.mobile}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-6">
                            <div className="text-right">
                              <span className="block text-sm" style={{ color: '#475569' }}>DOB: <span style={{ fontWeight: '600' }}>{formattedDob}</span></span>
                              <span className="block mt-1" style={{ fontSize: '0.75rem', color: '#10b981', background: 'rgba(16, 185, 129, 0.1)', padding: '2px 8px', borderRadius: '10px', display: 'inline-block' }}>Added {c.added}</span>
                            </div>
                            
                            {/* Action Buttons (Visible on hover in a real app, always visible here for demo) */}
                            <div className="flex gap-2 opacity-50 hover:opacity-100 transition-opacity">
                              <button className="flex items-center justify-center" style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6', border: 'none', cursor: 'pointer' }} title="Edit Customer" onClick={() => showToast('Opening customer editor...')}>
                                <Edit2 size={14} />
                              </button>
                              <button className="flex items-center justify-center" style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', border: 'none', cursor: 'pointer' }} title="Delete Customer" onClick={() => showToast('Customer removed from ledger.')}>
                                <Trash2 size={14} />
                              </button>
                            </div>
                          </div>

                        </div>
                      )
                    })
                  )}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'inbox' && (
            <div className="portal-bottom-section flex gap-6 animate-fade-in h-[700px]">
              
              {/* Left Pane: Conversations List */}
              <div className="glass-panel flex flex-col overflow-hidden w-1/3" style={{ border: '1px solid rgba(255,255,255,0.4)', borderRadius: '24px' }}>
                <div className="p-5 border-b border-gray-100" style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <h3 className="section-heading mb-4 flex items-center gap-2 text-lg"><MessageSquare size={20}/> Conversations</h3>
                  <div className="relative">
                    <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input type="text" placeholder="Search chats..." className="form-input pl-9" style={{ borderRadius: '12px', padding: '10px 16px 10px 36px', fontSize: '0.9rem', width: '100%', background: 'rgba(255,255,255,0.6)', border: '1px solid rgba(0,0,0,0.05)' }} />
                  </div>
                </div>
                
                <div className="overflow-y-auto flex-1">
                  {/* Active Contact */}
                  <div className="p-4 cursor-pointer relative" style={{ background: 'rgba(59, 130, 246, 0.08)', borderLeft: '4px solid #3b82f6' }}>
                    <div className="flex justify-between items-start mb-1">
                      <h4 style={{ fontWeight: '700', color: '#1e293b', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }}></div>
                        Alice Smith
                      </h4>
                      <span style={{ fontSize: '0.75rem', color: '#3b82f6', fontWeight: '600' }}>10:45 AM</span>
                    </div>
                    <p style={{ color: '#64748b', fontSize: '0.85rem', margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', paddingRight: '20px' }}>
                      <CheckCheck size={14} className="inline mr-1 text-blue-500" />
                      Automated System Reply Fired...
                    </p>
                  </div>
                  
                  {/* Inactive Contact */}
                  <div className="p-4 cursor-pointer hover:bg-gray-50 transition-colors" style={{ borderBottom: '1px solid rgba(0,0,0,0.02)' }}>
                    <div className="flex justify-between items-start mb-1">
                      <h4 style={{ fontWeight: '600', color: '#334155', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#cbd5e1' }}></div>
                        Charlie Brown
                      </h4>
                      <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>09:12 AM</span>
                    </div>
                    <p style={{ color: '#64748b', fontSize: '0.85rem', margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', paddingRight: '20px' }}>
                       how much is this cake?
                    </p>
                    <div style={{ position: 'absolute', right: '16px', top: '38px', background: '#ef4444', color: '#fff', fontSize: '0.7rem', padding: '2px 6px', borderRadius: '10px', fontWeight: 'bold' }}>1</div>
                  </div>
                </div>
              </div>

              {/* Right Pane: Active Chat Window */}
              <div className="glass-panel flex flex-col flex-1" style={{ border: '1px solid rgba(255,255,255,0.4)', borderRadius: '24px', overflow: 'hidden' }}>
                
                {/* Chat Header */}
                <div className="p-4 flex justify-between items-center" style={{ background: 'rgba(255,255,255,0.8)', borderBottom: '1px solid rgba(0,0,0,0.05)', backdropFilter: 'blur(10px)' }}>
                  <div className="flex items-center gap-4">
                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Users size={24}/>
                    </div>
                    <div>
                      <h3 style={{ fontWeight: '700', fontSize: '1.2rem', color: '#1e293b', margin: 0 }}>Alice Smith</h3>
                      <p style={{ fontSize: '0.85rem', color: '#64748b', margin: 0, display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Plug size={12} className="text-green-500" /> WhatsApp (+1 555-0101)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="btn-ghost" style={{ padding: '8px 16px', borderRadius: '20px', fontSize: '0.85rem', color: '#3b82f6', background: 'rgba(59, 130, 246, 0.1)' }} onClick={() => setActiveTab('customers')}>View Ledger Profile</button>
                    <button className="text-gray-400 hover:text-gray-600 transition-colors" onClick={() => showToast('Opening chat settings...')}><MoreVertical size={20}/></button>
                  </div>
                </div>

                {/* Chat History */}
                <div className="flex-1 p-6 overflow-y-auto flex flex-col gap-6" style={{ background: 'rgba(248, 250, 252, 0.5)' }}>
                  <div className="text-center"><span style={{ fontSize: '0.75rem', color: '#94a3b8', background: 'rgba(0,0,0,0.05)', padding: '4px 12px', borderRadius: '12px' }}>Today</span></div>
                  
                  {/* Customer Message (Left) */}
                  <div className="flex gap-4 max-w-[80%]">
                    <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#e2e8f0', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Users size={16} className="text-gray-500"/></div>
                    <div>
                      <div style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.05)', padding: '14px 18px', borderRadius: '0px 20px 20px 20px', boxShadow: '0 2px 10px rgba(0,0,0,0.02)', color: '#334155', fontSize: '0.95rem', lineHeight: '1.5' }}>
                        thank you! the cake looks delicious. 🎂
                      </div>
                      <span style={{ fontSize: '0.7rem', color: '#94a3b8', marginTop: '4px', display: 'block', marginLeft: '4px' }}>10:44 AM</span>
                    </div>
                  </div>

                  {/* Automated System Reply (Right) */}
                  <div className="flex gap-4 max-w-[80%] self-end flex-row-reverse">
                    <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.1)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Bot size={18} className="text-green-500"/></div>
                    <div className="flex flex-col items-end">
                      <div style={{ background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', color: '#fff', padding: '14px 18px', borderRadius: '20px 0px 20px 20px', boxShadow: '0 4px 14px rgba(16, 185, 129, 0.2)', fontSize: '0.95rem', lineHeight: '1.5' }}>
                        Thank you for your message! To place an order, please contact our Bakery Manager directly at {bakery?.mobile || '+1 234 567 8900'}. Save our number!
                      </div>
                      <span style={{ fontSize: '0.7rem', color: '#94a3b8', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px', marginRight: '4px' }}>
                        10:45 AM <CheckCheck size={14} className="text-blue-500" /> <span style={{ color: '#10b981', fontWeight: 'bold' }}>Auto-Reply Fired</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Chat Input Area */}
                <div className="p-4" style={{ background: '#fff', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
                  <div className="flex items-center gap-3">
                    <button className="text-gray-400 hover:text-blue-500 transition-colors" title="Attach Image" onClick={() => showToast('Opening file picker...')}><Paperclip size={22}/></button>
                    <input type="text" placeholder="Type a manual override message..." className="flex-1" style={{ border: '1px solid rgba(0,0,0,0.1)', borderRadius: '24px', padding: '12px 20px', fontSize: '0.95rem', outline: 'none', background: '#f8fafc' }} />
                    <button className="btn-ghost flex items-center gap-2" style={{ background: 'rgba(139, 92, 246, 0.1)', color: '#8b5cf6', padding: '10px 16px', borderRadius: '20px', fontSize: '0.9rem', fontWeight: '600' }} onClick={() => showToast('AI is drafting a reply...')}>
                      <Wand2 size={16}/> AI Reply
                    </button>
                    <button className="flex items-center justify-center" style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#3b82f6', color: '#fff', border: 'none', cursor: 'pointer', boxShadow: '0 4px 10px rgba(59, 130, 246, 0.3)' }} title="Send Message" onClick={() => showToast('Message sent successfully!')}>
                      <Send size={18} style={{ marginLeft: '2px' }}/>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          )}

          {activeTab === 'integrations' && (
            <div className="portal-bottom-section flex flex-col gap-6 animate-fade-in">
              <div className="glass-panel p-8" style={{ border: '1px solid rgba(255,255,255,0.4)', borderRadius: '24px' }}>
                <h3 className="section-heading mb-8 flex items-center gap-2" style={{ borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '16px' }}><Plug size={20}/> Connected Services & Integrations</h3>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
                  
                  {/* WhatsApp Integration */}
                  <div className="config-card flex flex-col gap-4" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-4">
                        <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <MessageSquare size={24}/>
                        </div>
                        <div>
                          <h4 style={{ fontWeight: '700', fontSize: '1.1rem', color: '#1e293b', marginBottom: '2px' }}>WhatsApp Business API</h4>
                          <p style={{ fontSize: '0.85rem', color: '#64748b', margin: 0 }}>Connected via Meta Cloud</p>
                        </div>
                      </div>
                      <span className="campaign-badge" style={{background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', border: '1px solid rgba(16, 185, 129, 0.2)'}}>
                        <Activity size={12}/> Connected
                      </span>
                    </div>
                    <div style={{ borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                       <div className="flex justify-between" style={{ fontSize: '0.9rem' }}><span style={{ color: '#64748b' }}>Phone Number:</span> <span style={{ fontWeight: '600', color: '#334155' }}>{bakery?.mobile || '+1 234 567 8900'}</span></div>
                       <div className="flex justify-between" style={{ fontSize: '0.9rem' }}><span style={{ color: '#64748b' }}>Quality Rating:</span> <span style={{ fontWeight: '600', color: '#10b981' }}>High</span></div>
                       <div className="flex justify-between" style={{ fontSize: '0.9rem' }}><span style={{ color: '#64748b' }}>Messaging Limit:</span> <span style={{ fontWeight: '600', color: '#334155' }}>250 msgs / day</span></div>
                    </div>
                    <button style={{ width: '100%', padding: '12px', background: 'rgba(59, 130, 246, 0.05)', color: '#3b82f6', border: '1px solid rgba(59, 130, 246, 0.1)', borderRadius: '12px', marginTop: 'auto', fontWeight: '600', fontSize: '0.9rem', cursor: 'pointer', transition: 'all 0.2s' }} onClick={() => showToast('Opening Meta WhatsApp Manager...')}>Manage WhatsApp Connection</button>
                  </div>

                  {/* Twilio SMS */}
                  <div className="config-card flex flex-col gap-4" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-4">
                        <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <MessageSquare size={24}/>
                        </div>
                        <div>
                          <h4 style={{ fontWeight: '700', fontSize: '1.1rem', color: '#1e293b', marginBottom: '2px' }}>Twilio SMS Gateway</h4>
                          <p style={{ fontSize: '0.85rem', color: '#64748b', margin: 0 }}>Fallback messaging delivery</p>
                        </div>
                      </div>
                      <div className="ios-toggle active"></div>
                    </div>
                     <div style={{ borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                       <div className="flex justify-between" style={{ fontSize: '0.9rem' }}><span style={{ color: '#64748b' }}>Account SID:</span> <span style={{ fontFamily: 'monospace', color: '#94a3b8' }}>ACa8f9...32bd</span></div>
                       <div className="flex justify-between" style={{ fontSize: '0.9rem' }}><span style={{ color: '#64748b' }}>Prepaid Balance:</span> <span style={{ fontWeight: '600', color: '#10b981' }}>$45.20</span></div>
                       <div className="flex justify-between" style={{ fontSize: '0.9rem' }}><span style={{ color: '#64748b' }}>SMS Delivered Today:</span> <span style={{ fontWeight: '600', color: '#334155' }}>0</span></div>
                    </div>
                    <button style={{ width: '100%', padding: '12px', background: 'rgba(59, 130, 246, 0.05)', color: '#3b82f6', border: '1px solid rgba(59, 130, 246, 0.1)', borderRadius: '12px', marginTop: 'auto', fontWeight: '600', fontSize: '0.9rem', cursor: 'pointer', transition: 'all 0.2s' }} onClick={() => showToast('Opening Twilio Console...')}>Manage Twilio Settings</button>
                  </div>

                  {/* POS System */}
                  <div className="config-card flex flex-col gap-4" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                     <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-4">
                        <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(168, 85, 247, 0.1)', color: '#a855f7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <Store size={24}/>
                        </div>
                        <div>
                          <h4 style={{ fontWeight: '700', fontSize: '1.1rem', color: '#1e293b', marginBottom: '2px' }}>Square POS Setup</h4>
                          <p style={{ fontSize: '0.85rem', color: '#64748b', margin: 0 }}>Real-time ledger syncing</p>
                        </div>
                      </div>
                       <button style={{ background: '#a855f7', color: '#fff', border: 'none', padding: '6px 16px', borderRadius: '20px', fontWeight: '600', fontSize: '0.85rem', cursor: 'pointer', boxShadow: '0 4px 14px rgba(168, 85, 247, 0.3)' }} onClick={() => showToast('Connecting to Square POS...')}>Connect</button>
                    </div>
                    <div style={{ borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '16px' }}>
                      <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: '1.5', margin: 0 }}>Connect your bakery's Point of Sale system to automatically sync new customer data into the BakeReach CRM ledger without manual entry.</p>
                    </div>
                  </div>
                  
                  {/* Webhooks */}
                  <div className="config-card flex flex-col gap-4" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                     <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-4">
                        <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <Activity size={24}/>
                        </div>
                        <div>
                          <h4 style={{ fontWeight: '700', fontSize: '1.1rem', color: '#1e293b', marginBottom: '2px' }}>Custom Webhooks</h4>
                          <p style={{ fontSize: '0.85rem', color: '#64748b', margin: 0 }}>Developer API Access</p>
                        </div>
                      </div>
                       <button style={{ background: '#f59e0b', color: '#fff', border: 'none', padding: '6px 16px', borderRadius: '20px', fontWeight: '600', fontSize: '0.85rem', cursor: 'pointer', boxShadow: '0 4px 14px rgba(245, 158, 11, 0.3)' }} onClick={() => showToast('Opening Webhook configuration...')}>Configure</button>
                    </div>
                    <div style={{ borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '16px' }}>
                      <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: '1.5', margin: 0 }}>Setup incoming and outgoing webhooks to connect BakeReach with Zapier, Make.com, or your custom website backend.</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          )}


        
          {activeTab === 'logs' && (
            <div className="portal-bottom-section flex flex-col gap-6 animate-fade-in w-full max-w-[1200px] mx-auto">
              
              {/* Analytics Summary Row */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
                <div className="glass-panel p-6 flex items-center gap-4" style={{ borderRadius: '20px', border: '1px solid rgba(255,255,255,0.4)', background: 'linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.4))' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Send size={24}/>
                  </div>
                  <div>
                    <h4 style={{ color: '#64748b', fontSize: '0.9rem', margin: 0, fontWeight: '600' }}>Total Dispatched</h4>
                    <p style={{ color: '#1e293b', fontSize: '1.5rem', margin: 0, fontWeight: 'bold' }}>1,245</p>
                  </div>
                </div>
                <div className="glass-panel p-6 flex items-center gap-4" style={{ borderRadius: '20px', border: '1px solid rgba(255,255,255,0.4)', background: 'linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.4))' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <CheckCircle size={24}/>
                  </div>
                  <div>
                    <h4 style={{ color: '#64748b', fontSize: '0.9rem', margin: 0, fontWeight: '600' }}>Success Rate</h4>
                    <p style={{ color: '#1e293b', fontSize: '1.5rem', margin: 0, fontWeight: 'bold' }}>98.2%</p>
                  </div>
                </div>
                <div className="glass-panel p-6 flex items-center gap-4" style={{ borderRadius: '20px', border: '1px solid rgba(255,255,255,0.4)', background: 'linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.4))' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <AlertCircle size={24}/>
                  </div>
                  <div>
                    <h4 style={{ color: '#64748b', fontSize: '0.9rem', margin: 0, fontWeight: '600' }}>Failed Deliveries</h4>
                    <p style={{ color: '#1e293b', fontSize: '1.5rem', margin: 0, fontWeight: 'bold' }}>12</p>
                  </div>
                </div>
              </div>

              {/* Main Table Panel */}
              <div className="glass-panel p-8" style={{ border: '1px solid rgba(255,255,255,0.4)', borderRadius: '24px' }}>
                
                {/* Header & Filters */}
                <div className="flex justify-between items-center mb-6 pb-4" style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <h3 className="section-heading m-0 flex items-center gap-2"><ClipboardList size={20}/> Delivery Logs</h3>
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input type="text" placeholder="Search recipient..." className="form-input pl-9" style={{ borderRadius: '12px', padding: '8px 16px 8px 36px', fontSize: '0.85rem', width: '200px', background: 'rgba(255,255,255,0.6)' }} />
                    </div>
                    <select className="form-input" style={{ borderRadius: '12px', padding: '8px 16px', fontSize: '0.85rem', background: 'rgba(255,255,255,0.6)', color: '#475569', minWidth: '130px', cursor: 'pointer' }}>
                      <option>All Campaigns</option>
                      <option>Birthday</option>
                      <option>Festival</option>
                    </select>
                    <button className="btn-ghost flex items-center gap-2" style={{ fontSize: '0.85rem', padding: '8px 16px', borderRadius: '12px', background: 'rgba(255,255,255,0.6)', border: '1px solid rgba(0,0,0,0.05)' }} onClick={() => showToast('Filtering by Last 7 Days...')}>
                      <Calendar size={14}/> Last 7 Days
                    </button>
                    <button className="btn-primary flex items-center gap-2" style={{ fontSize: '0.85rem', padding: '8px 16px', borderRadius: '12px', background: '#1e293b', border: 'none', color: '#fff' }} onClick={() => showToast('Exporting logs to CSV...')}>
                       Export CSV
                    </button>
                  </div>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-left" style={{ borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ borderBottom: '2px solid rgba(0,0,0,0.05)', color: '#64748b', fontSize: '0.9rem' }}>
                        <th className="pb-3 font-semibold pl-2">Recipient</th>
                        <th className="pb-3 font-semibold">Phone Number</th>
                        <th className="pb-3 font-semibold">Message Type</th>
                        <th className="pb-3 font-semibold">Status</th>
                        <th className="pb-3 font-semibold">Timestamp</th>
                        <th className="pb-3 font-semibold text-right pr-2">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {logs.map(log => (
                        <React.Fragment key={log.id}>
                        <tr onClick={() => setExpandedLogId(expandedLogId === log.id ? null : log.id)} style={{ borderBottom: expandedLogId === log.id ? 'none' : '1px solid rgba(0,0,0,0.02)', cursor: 'pointer' }} className="hover:bg-white/40 transition-colors">
                          <td className="py-4 pl-2 font-semibold text-slate-800 flex items-center gap-3">
                            <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(99, 102, 241, 0.1)', color: '#6366f1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Users size={16}/></div>
                            {log.recipient}
                          </td>
                          <td className="py-4 text-slate-600 font-mono text-sm">{log.phone}</td>
                          <td className="py-4 text-slate-600"><span style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6', padding: '4px 10px', borderRadius: '12px', fontSize: '0.8rem', fontWeight: '600' }}>{log.type}</span></td>
                          <td className="py-4">
                            {log.status === 'Delivered' ? (
                              <span style={{ color: '#10b981', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.85rem', fontWeight: '600' }}><CheckCircle size={14}/> Delivered</span>
                            ) : (
                              <span style={{ color: '#ef4444', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.85rem', fontWeight: '600' }}><AlertCircle size={14}/> Failed</span>
                            )}
                          </td>
                          <td className="py-4 text-slate-500 text-sm">{log.time}</td>
                          <td className="py-4 text-right pr-2">
                            {log.status === 'Failed' ? (
                              <button onClick={(e) => { e.stopPropagation(); showToast('Retrying dispatch to ' + log.phone); }} style={{ padding: '6px 14px', fontSize: '0.75rem', borderRadius: '12px', background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>Retry</button>
                            ) : (
                              <button style={{ fontSize: '0.8rem', fontWeight: '600', color: '#3b82f6', background: 'rgba(59, 130, 246, 0.1)', padding: '6px 14px', borderRadius: '12px', border: 'none', cursor: 'pointer' }}>{expandedLogId === log.id ? 'Close' : 'View'}</button>
                            )}
                          </td>
                        </tr>
                        {expandedLogId === log.id && (
                          <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.02)' }}>
                            <td colSpan="6" className="py-4 px-6 rounded-b-xl" style={{ background: 'rgba(248, 250, 252, 0.7)' }}>
                              <div className="flex gap-6 items-start">
                                <div className="flex-1">
                                  <h5 className="text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider">Message Payload Preview</h5>
                                  <div className="bg-white p-4 rounded-xl shadow-sm text-sm text-slate-700 font-medium" style={{ border: '1px solid rgba(0,0,0,0.05)', position: 'relative' }}>
                                    {log.type === 'Birthday Campaign' ? '🎉 Happy Birthday! Here is 15% off your next cake order. Valid for 48 hours.' : log.type === 'Festival Campaign' ? '🌟 Special Festive Offer: Buy 1 Get 1 Free on selected premium items! Show this message at the counter.' : 'Thank you for your message! Our manager will reply shortly.'}
                                    <div style={{ position: 'absolute', bottom: '10px', right: '15px', color: '#cbd5e1' }}><CheckCheck size={16} className={log.status === 'Delivered' ? 'text-blue-400' : ''}/></div>
                                  </div>
                                </div>
                                {log.error && (
                                  <div className="flex-1">
                                    <h5 className="text-xs font-bold text-red-400 mb-2 uppercase tracking-wider">Error Diagnostics</h5>
                                    <div className="bg-red-50 p-4 rounded-xl border border-red-100 text-sm text-red-700 font-mono" style={{ whiteSpace: 'pre-line' }}>
                                      ERROR_CODE: 400_BAD_REQUEST
REASON: {log.error}
RESOLUTION: Verify customer phone format or Meta API connection.
                                    </div>
                                  </div>
                                )}
                              </div>
                            </td>
                          </tr>
                        )}
                        </React.Fragment>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                {/* Pagination */}
                <div className="flex justify-between items-center mt-6 pt-4" style={{ borderTop: '1px solid rgba(0,0,0,0.05)' }}>
                  <span className="text-sm text-slate-500 font-medium">Showing 1 to 5 of 1,245 entries</span>
                  <div className="flex items-center gap-2">
                    <button style={{ background: 'transparent', border: 'none', color: '#94a3b8', fontSize: '0.85rem', cursor: 'not-allowed', padding: '4px 8px' }} disabled>Prev</button>
                    <button style={{ background: '#3b82f6', color: '#fff', border: 'none', borderRadius: '8px', padding: '6px 12px', fontSize: '0.85rem', fontWeight: 'bold', cursor: 'pointer' }}>1</button>
                    <button style={{ background: 'rgba(255,255,255,0.5)', color: '#475569', border: 'none', borderRadius: '8px', padding: '6px 12px', fontSize: '0.85rem', fontWeight: '600', cursor: 'pointer' }} onClick={() => showToast('Loading page 2...')}>2</button>
                    <button style={{ background: 'rgba(255,255,255,0.5)', color: '#475569', border: 'none', borderRadius: '8px', padding: '6px 12px', fontSize: '0.85rem', fontWeight: '600', cursor: 'pointer' }} onClick={() => showToast('Loading page 3...')}>3</button>
                    <span className="px-2 text-slate-400">...</span>
                    <button style={{ background: 'rgba(255,255,255,0.5)', color: '#475569', border: 'none', borderRadius: '8px', padding: '6px 12px', fontSize: '0.85rem', fontWeight: '600', cursor: 'pointer' }} onClick={() => showToast('Loading page 249...')}>249</button>
                    <button style={{ background: 'transparent', border: 'none', color: '#3b82f6', fontSize: '0.85rem', cursor: 'pointer', padding: '4px 8px', fontWeight: '600' }} onClick={() => showToast('Loading next page...')}>Next</button>
                  </div>
                </div>

              </div>
            </div>
          )}
          </div>
      </main>
      
      
      
      {/* Billing & Upgrade Modal */}
      {showBillingModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 99999, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(15, 23, 42, 0.6)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', animation: 'fadeIn 0.2s ease-out' }}>
          <div style={{ background: '#ffffff', borderRadius: '24px', width: '100%', maxWidth: '700px', overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)', animation: 'slideUp 0.3s ease-out' }}>
            
            {/* Modal Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px', borderBottom: '1px solid #f1f5f9', background: '#f8fafc' }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '900', color: '#1e293b', margin: 0 }}>Plan & Billing</h3>
                <p style={{ fontSize: '0.875rem', color: '#64748b', margin: '4px 0 0 0' }}>Manage your subscription and payment methods</p>
              </div>
              <button onClick={() => setShowBillingModal(false)} style={{ width: '36px', height: '36px', borderRadius: '50%', border: 'none', background: 'rgba(0,0,0,0.05)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b' }}>
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
              
              {/* Current Plan Alert */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px', borderRadius: '16px', background: 'linear-gradient(to right, #f5f3ff, #e0e7ff)', border: '1px solid #c7d2fe' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '48px', height: '48px', background: '#ffffff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 1px 2px rgba(0,0,0,0.05)', color: '#4f46e5' }}>
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.875rem', fontWeight: 'bold', color: '#1e293b', margin: '0 0 4px 0' }}>Active Plan: {bakery.plan}</h4>
                    <p style={{ fontSize: '0.75rem', color: '#64748b', margin: 0, fontWeight: '500' }}>Renews on December 31, 2026 • 2,450 / 5,000 Messages</p>
                  </div>
                </div>
                <span style={{ padding: '4px 12px', background: '#ffffff', color: '#4f46e5', fontSize: '10px', textTransform: 'uppercase', fontWeight: '900', letterSpacing: '0.05em', borderRadius: '9999px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)', border: '1px solid #e0e7ff' }}>Active</span>
              </div>

              {/* Upgrade Options */}
              <div>
                <h4 style={{ fontSize: '11px', fontWeight: 'bold', color: '#94a3b8', margin: '0 0 16px 0', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Available Upgrades</h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  
                  {/* Growth Tier */}
                  <div style={{ padding: '24px', borderRadius: '16px', border: '2px solid #f1f5f9', background: '#f8fafc', cursor: 'pointer', position: 'relative', overflow: 'hidden', transition: 'border-color 0.2s' }} onClick={(e) => { e.currentTarget.style.borderColor = '#818cf8'; }}>
                    <h5 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#1e293b', margin: '0 0 4px 0' }}>Growth Tier</h5>
                    <p style={{ fontSize: '1.5rem', fontWeight: '900', color: '#4f46e5', margin: '0 0 16px 0' }}>$49<span style={{ fontSize: '0.875rem', color: '#94a3b8', fontWeight: '500' }}>/mo</span></p>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.875rem', color: '#475569', margin: '0 0 24px 0', padding: 0, listStyle: 'none' }}>
                      <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={16} color="#22c55e"/> 10,000 Messages</li>
                      <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={16} color="#22c55e"/> Custom Domains</li>
                    </ul>
                    <button style={{ width: '100%', padding: '10px 0', borderRadius: '12px', fontWeight: 'bold', border: 'none', cursor: 'pointer', background: '#e2e8f0', color: '#475569' }}>Select Growth</button>
                  </div>
                  
                  {/* Enterprise Tier */}
                  <div style={{ padding: '24px', borderRadius: '16px', border: '2px solid #6366f1', background: '#eef2ff', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: '12px', right: '12px', padding: '4px 8px', color: '#ffffff', fontSize: '10px', fontWeight: 'bold', borderRadius: '8px', textTransform: 'uppercase', letterSpacing: '0.05em', background: 'linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)', boxShadow: '0 2px 8px rgba(79, 70, 229, 0.4)' }}>Recommended</div>
                    <h5 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#312e81', margin: '0 0 4px 0' }}>Enterprise</h5>
                    <p style={{ fontSize: '1.5rem', fontWeight: '900', color: '#4f46e5', margin: '0 0 16px 0' }}>$99<span style={{ fontSize: '0.875rem', color: '#818cf8', fontWeight: '500' }}>/mo</span></p>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.875rem', color: '#3730a3', margin: '0 0 24px 0', padding: 0, listStyle: 'none' }}>
                      <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={16} color="#6366f1"/> Unlimited Messages</li>
                      <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={16} color="#6366f1"/> Dedicated Rep</li>
                    </ul>
                    <button style={{ width: '100%', padding: '10px 0', borderRadius: '12px', color: '#ffffff', fontWeight: 'bold', border: 'none', cursor: 'pointer', background: '#4f46e5', boxShadow: '0 4px 12px rgba(79, 70, 229, 0.3)' }} onClick={() => { setShowBillingModal(false); showToast('Upgraded to Enterprise!'); }}>Upgrade Now</button>
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div>
                <h4 style={{ fontSize: '11px', fontWeight: 'bold', color: '#94a3b8', margin: '0 0 16px 0', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Payment Method</h4>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#ffffff' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{ width: '48px', height: '32px', background: '#1e293b', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                      <span style={{ color: '#ffffff', fontSize: '11px', fontWeight: '900', fontStyle: 'italic' }}>VISA</span>
                    </div>
                    <div>
                      <p style={{ fontSize: '0.875rem', fontWeight: 'bold', color: '#1e293b', margin: 0 }}>Visa ending in 4242</p>
                      <p style={{ fontSize: '0.6875rem', fontWeight: '600', color: '#64748b', margin: 0 }}>Expires 04/28</p>
                    </div>
                  </div>
                  <button style={{ fontSize: '0.875rem', fontWeight: 'bold', color: '#4f46e5', background: 'transparent', border: 'none', cursor: 'pointer' }} onClick={() => showToast('Opening Stripe portal...')}>Edit</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* Global Toast Notification */}
      {toastMessage && (
        <div className="toast-container" style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: 9999, animation: 'slideUp 0.3s ease-out' }}>
          <div style={{ background: '#1e293b', color: '#fff', padding: '16px 24px', borderRadius: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.2)', display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.95rem', fontWeight: '500' }}>
            <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><CheckCircle size={14} color="#fff" /></div>
            {toastMessage}
          </div>
        </div>
      )}
      
      <button className="support-fab" onClick={() => showToast('Support ticket raised! A BakeReach agent will contact you shortly.')}>
        <HelpCircle size={24} />
      </button>
    </div>
  );
};

export default BakeryDashboard;

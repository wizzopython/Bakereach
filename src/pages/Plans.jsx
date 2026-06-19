import React, { useState } from 'react';
import { CreditCard, CheckCircle2 } from 'lucide-react';
import './Plans.css';

const Plans = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="plans-container animate-fade-in" style={{ maxWidth: '1100px', margin: '0 auto', paddingBottom: '3rem' }}>
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="premium-title" style={{ fontSize: '2.5rem' }}>Subscription Plans</h1>
          <p className="premium-subtitle">Manage billing tiers and feature access for your bakery clients</p>
        </div>
        <button className="premium-btn-primary" onClick={() => alert('Pricing Editor opened. (Demo only)')}>
          <CreditCard size={18} /> Update Pricing
        </button>
      </div>

      <div className="billing-toggle">
        <span style={{ fontWeight: !isAnnual ? '800' : '500', color: !isAnnual ? 'var(--text-primary)' : 'var(--text-secondary)', fontSize: '1.1rem' }}>Monthly</span>
        <div className={`toggle-switch ${isAnnual ? 'annual' : ''}`} onClick={() => setIsAnnual(!isAnnual)}>
          <div className="toggle-slider"></div>
        </div>
        <span style={{ fontWeight: isAnnual ? '800' : '500', color: isAnnual ? 'var(--text-primary)' : 'var(--text-secondary)', fontSize: '1.1rem', display: 'flex', alignItems: 'center' }}>
          Annually <span className="save-badge">Save 20%</span>
        </span>
      </div>

      <div className="pricing-grid">
        
        {/* Basic Plan */}
        <div className="plan-card">
          <h2 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>Basic Plan</h2>
          <p className="text-slate-500 text-sm mt-1">Perfect for small local bakeries.</p>
          
          <div className="plan-price">
            ${isAnnual ? '24' : '29'}
            <span className="plan-period">/mo</span>
          </div>

          <ul className="plan-features">
            <li><CheckCircle2 size={18} className="feature-icon"/> WhatsApp Birthday Automation</li>
            <li><CheckCircle2 size={18} className="feature-icon"/> Up to 500 Customers</li>
            <li><CheckCircle2 size={18} className="feature-icon"/> Basic Analytics Dashboard</li>
            <li style={{ opacity: 0.4 }}><CheckCircle2 size={18} className="feature-icon" style={{ background: 'transparent', color: 'var(--border-color)' }}/> Festival Campaigns</li>
            <li style={{ opacity: 0.4 }}><CheckCircle2 size={18} className="feature-icon" style={{ background: 'transparent', color: 'var(--border-color)' }}/> Advanced Conversion Tracking</li>
          </ul>

          <button className="premium-btn-ghost w-full justify-center" onClick={() => alert('Plan Editor opened. (Demo only)')}>Edit Plan</button>
        </div>

        {/* Premium Plan */}
        <div className="plan-card popular">
          <div className="popular-badge">Most Popular</div>
          <h2 className="text-2xl font-bold" style={{ color: 'var(--accent-primary)' }}>Premium Plan</h2>
          <p className="text-slate-500 text-sm mt-1">For established bakery chains.</p>
          
          <div className="plan-price">
            ${isAnnual ? '64' : '79'}
            <span className="plan-period">/mo</span>
          </div>

          <ul className="plan-features">
            <li><CheckCircle2 size={18} className="feature-icon"/> All Basic Features included</li>
            <li><CheckCircle2 size={18} className="feature-icon"/> Festival Campaigns (Christmas, etc.)</li>
            <li><CheckCircle2 size={18} className="feature-icon"/> Unlimited Customers</li>
            <li><CheckCircle2 size={18} className="feature-icon"/> Advanced Conversion Tracking</li>
            <li><CheckCircle2 size={18} className="feature-icon"/> Custom Media Library Access</li>
          </ul>

          <button className="premium-btn-primary w-full justify-center" onClick={() => alert('Plan Editor opened. (Demo only)')}>Edit Plan</button>
        </div>

        {/* Enterprise Plan */}
        <div className="plan-card">
          <h2 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>Enterprise</h2>
          <p className="text-slate-500 text-sm mt-1">Custom solutions for franchises.</p>
          
          <div className="plan-price" style={{ fontSize: '2.5rem' }}>
            Custom
          </div>

          <ul className="plan-features">
            <li><CheckCircle2 size={18} className="feature-icon"/> Dedicated Account Manager</li>
            <li><CheckCircle2 size={18} className="feature-icon"/> Custom API Integrations</li>
            <li><CheckCircle2 size={18} className="feature-icon"/> White-labeling Options</li>
            <li><CheckCircle2 size={18} className="feature-icon"/> Priority 24/7 Phone Support</li>
            <li><CheckCircle2 size={18} className="feature-icon"/> Multi-location Synchronization</li>
          </ul>

          <button className="premium-btn-ghost w-full justify-center" onClick={() => alert('Contacting Sales Team...')}>Contact Sales</button>
        </div>

      </div>
    </div>
  );
};

export default Plans;

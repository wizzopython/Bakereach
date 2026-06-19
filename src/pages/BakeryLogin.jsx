import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Store, KeyRound, ArrowRight, Phone, Lock } from 'lucide-react';
import './BakeryLogin.css';

const BakeryLogin = () => {
  const [mobile, setMobile] = useState('+1 234 567 8900');
  const [password, setPassword] = useState('password');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login attempt
    setTimeout(() => {
      setIsLoading(false);
      localStorage.setItem('bakery_auth', 'true');
      navigate('/bakery/dashboard');
    }, 800);
  };

  return (
    <div className="bakery-login-wrapper">
      {/* Background full-cover image */}
      <div className="bakery-login-bg"></div>
      
      {/* Glassmorphism panel */}
      <div className="bakery-glass-panel">
        <div className="bakery-login-content">
          <div className="bakery-header">
            <div className="bakery-icon-wrapper animate-float">
              <Store size={36} color="white" />
            </div>
            <h2>Bakery Partner Portal</h2>
            <p>Manage your festive campaigns and celebrate with customers.</p>
          </div>

          <form onSubmit={handleSubmit} className="bakery-form">
            <div className="input-group">
              <label className="bakery-form-label"><Phone size={16} /> Manager Mobile Number</label>
              <input 
                type="tel" 
                placeholder="+1 234 567 8900" 
                className="glass-input"
                value={mobile}
                onChange={e => setMobile(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label className="bakery-form-label"><Lock size={16} /> Password</label>
              <input 
                type="password" 
                placeholder="••••••••" 
                className="glass-input"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="glass-btn mt-2" disabled={isLoading}>
              {isLoading ? 'Authenticating...' : (
                <span className="flex items-center justify-center gap-2">
                  Enter Bakery Hub <ArrowRight size={18} />
                </span>
              )}
            </button>
          </form>

          <div className="bakery-footer">
            <p>Powered by BakeReach Automations</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BakeryLogin;

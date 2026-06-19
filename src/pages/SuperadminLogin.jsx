import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Cake, Lock, User } from 'lucide-react';
import './SuperadminLogin.css';

const SuperadminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(username && password) {
      localStorage.setItem('superadmin_auth', 'true');
      navigate('/superadmin/dashboard');
    }
  };

  return (
    <div className="sa-login-container">
      <div className="sa-login-card glass-panel animate-fade-in">
        <div className="sa-login-header text-center">
          <div className="sa-login-logo-icon animate-float mx-auto">
            <Cake size={32} />
          </div>
          <h1 className="sa-login-title">BakeReach</h1>
          <p className="sa-login-subtitle">Superadmin Portal</p>
        </div>
        
        <form onSubmit={handleSubmit} className="sa-login-form">
          <div className="form-group">
            <label className="sa-form-label flex items-center gap-2"><User size={16}/> Username</label>
            <input 
              type="text" 
              className="form-input sa-input" 
              placeholder="superadmin" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label className="sa-form-label flex items-center gap-2"><Lock size={16}/> Password</label>
            <input 
              type="password" 
              className="form-input sa-input" 
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-full justify-center mt-4" style={{fontSize: '1.1rem', padding: '1rem'}}>
            Login to Dashboard
          </button>
        </form>
      </div>
    </div>
  );
};

export default SuperadminLogin;

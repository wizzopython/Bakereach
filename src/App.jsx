import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import SuperadminDashboard from './pages/SuperadminDashboard';
import AutomationSetup from './pages/AutomationSetup';
import SuperadminLogin from './pages/SuperadminLogin';
import BakeryLogin from './pages/BakeryLogin';
import Customers from './pages/Customers';
import Plans from './pages/Plans';
import MediaLibrary from './pages/MediaLibrary';
import SupportTickets from './pages/SupportTickets';
import BakeryDashboard from './pages/BakeryDashboard';

const ProtectedSuperadmin = ({ children }) => {
  const isAuth = localStorage.getItem('superadmin_auth') === 'true';
  return isAuth ? children : <Navigate to="/superadmin" />;
};

const ProtectedBakery = ({ children }) => {
  const isAuth = localStorage.getItem('bakery_auth') === 'true';
  return isAuth ? children : <Navigate to="/login" />;
};

function App() {
  const handleLogout = () => {
    localStorage.removeItem('superadmin_auth');
    window.location.href = '/superadmin';
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<BakeryLogin />} />
        <Route path="/superadmin" element={<SuperadminLogin />} />
        
        <Route path="/bakery/dashboard" element={
          <ProtectedBakery>
            <BakeryDashboard />
          </ProtectedBakery>
        } />
        
        <Route path="/superadmin/dashboard" element={
          <ProtectedSuperadmin>
            <div className="app-container">
              <Sidebar onLogout={handleLogout} />
              <main className="main-content-area">
                <SuperadminDashboard />
              </main>
            </div>
          </ProtectedSuperadmin>
        } />

        <Route path="/superadmin/automation" element={
          <ProtectedSuperadmin>
            <div className="app-container">
              <Sidebar onLogout={handleLogout} />
              <main className="main-content-area">
                <AutomationSetup />
              </main>
            </div>
          </ProtectedSuperadmin>
        } />
        
        <Route path="/superadmin/customers" element={
          <ProtectedSuperadmin>
            <div className="app-container">
              <Sidebar onLogout={handleLogout} />
              <main className="main-content-area">
                <Customers />
              </main>
            </div>
          </ProtectedSuperadmin>
        } />

        <Route path="/superadmin/plans" element={
          <ProtectedSuperadmin>
            <div className="app-container">
              <Sidebar onLogout={handleLogout} />
              <main className="main-content-area">
                <Plans />
              </main>
            </div>
          </ProtectedSuperadmin>
        } />
        
        <Route path="/superadmin/media" element={
          <ProtectedSuperadmin>
            <div className="app-container">
              <Sidebar onLogout={handleLogout} />
              <main className="main-content-area">
                <MediaLibrary />
              </main>
            </div>
          </ProtectedSuperadmin>
        } />

        <Route path="/superadmin/support" element={
          <ProtectedSuperadmin>
            <div className="app-container">
              <Sidebar onLogout={handleLogout} />
              <main className="main-content-area">
                <SupportTickets />
              </main>
            </div>
          </ProtectedSuperadmin>
        } />
        
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;

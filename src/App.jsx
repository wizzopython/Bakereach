import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
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

const SuperadminLayout = ({ children, onLogout }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="app-container">
      {/* Mobile Header */}
      <div className="mobile-header">
        <div className="flex items-center gap-3">
          <div className="mobile-header-logo flex items-center justify-center bg-white text-orange-600 font-bold rounded-lg shadow-sm" style={{ width: '40px', height: '40px' }}>BR</div>
          <h1 className="mobile-header-title">BakeReach</h1>
        </div>
        <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div className="sidebar-mobile-overlay" onClick={() => setIsMobileMenuOpen(false)}></div>
      )}

      <Sidebar onLogout={onLogout} isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      <main className="main-content-area">
        {children}
      </main>
    </div>
  );
};

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
            <SuperadminLayout onLogout={handleLogout}>
              <SuperadminDashboard />
            </SuperadminLayout>
          </ProtectedSuperadmin>
        } />

        <Route path="/superadmin/automation" element={
          <ProtectedSuperadmin>
            <SuperadminLayout onLogout={handleLogout}>
              <AutomationSetup />
            </SuperadminLayout>
          </ProtectedSuperadmin>
        } />
        
        <Route path="/superadmin/customers" element={
          <ProtectedSuperadmin>
            <SuperadminLayout onLogout={handleLogout}>
              <Customers />
            </SuperadminLayout>
          </ProtectedSuperadmin>
        } />

        <Route path="/superadmin/plans" element={
          <ProtectedSuperadmin>
            <SuperadminLayout onLogout={handleLogout}>
              <Plans />
            </SuperadminLayout>
          </ProtectedSuperadmin>
        } />
        
        <Route path="/superadmin/media" element={
          <ProtectedSuperadmin>
            <SuperadminLayout onLogout={handleLogout}>
              <MediaLibrary />
            </SuperadminLayout>
          </ProtectedSuperadmin>
        } />

        <Route path="/superadmin/support" element={
          <ProtectedSuperadmin>
            <SuperadminLayout onLogout={handleLogout}>
              <SupportTickets />
            </SuperadminLayout>
          </ProtectedSuperadmin>
        } />
        
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;

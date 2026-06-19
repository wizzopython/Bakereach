import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Workflow, Store, Settings, LogOut, Users, CreditCard, Image as ImageIcon, HeadphonesIcon } from 'lucide-react';
import './Sidebar.css';

const Sidebar = ({ onLogout }) => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="logo-icon">BR</div>
        <h1 className="logo-text">BakeReach</h1>
      </div>
      
      <nav className="sidebar-nav">
        <div className="nav-section">MAIN</div>
        <NavLink to="/superadmin/dashboard" className={({isActive}) => `nav-item ${isActive ? 'active' : ''}`} end>
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </NavLink>
        <NavLink to="/superadmin/customers" className={({isActive}) => `nav-item ${isActive ? 'active' : ''}`}>
          <Users size={20} />
          <span>Clients</span>
        </NavLink>
        <NavLink to="/superadmin/plans" className={({isActive}) => `nav-item ${isActive ? 'active' : ''}`}>
          <CreditCard size={20} />
          <span>Subscription Plans</span>
        </NavLink>
        <NavLink to="/superadmin/automation" className={({isActive}) => `nav-item ${isActive ? 'active' : ''}`}>
          <Workflow size={20} />
          <span>Automation Flow</span>
        </NavLink>
        <NavLink to="/superadmin/media" className={({isActive}) => `nav-item ${isActive ? 'active' : ''}`}>
          <ImageIcon size={20} />
          <span>Media Library</span>
        </NavLink>
        <NavLink to="/superadmin/support" className={({isActive}) => `nav-item ${isActive ? 'active' : ''}`}>
          <HeadphonesIcon size={20} />
          <span>Support Tickets</span>
        </NavLink>
      </nav>

      <div className="sidebar-footer">
        <div className="user-profile">
          <div className="avatar">SA</div>
          <div className="user-info">
            <span className="user-name">Super Admin</span>
            <span className="user-role">Management</span>
          </div>
        </div>
        <button className="logout-btn" onClick={onLogout} title="Logout">
          <LogOut size={20} />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;

import React, { useState, useEffect } from 'react';
import { Search, Plus, UserPlus, Store, Edit2, Trash2, Wifi, WifiOff } from 'lucide-react';
import ConfirmModal from '../components/ConfirmModal';
import './Customers.css';

const MOCK_BAKERIES = [
  { id: 1, name: "Sweet Delights Bakery", address: "123 Main St, NY", mobile: "+1 234 567 8900", plan: "Premium", status: "Active", banner: "/birthday_cake_banner.png", validUntil: "2027-06-19", isBlocked: false, customersCount: 1240, messagesSent: 14290, messageLimit: 20000, waStatus: 'connected' },
  { id: 2, name: "The Cake Corner", address: "456 Baker Ave, CA", mobile: "+1 987 654 3210", plan: "Basic", status: "Blocked", banner: "/bakery_festival_banner.png", validUntil: "2024-05-10", isBlocked: true, customersCount: 310, messagesSent: 480, messageLimit: 500, waStatus: 'disconnected' }
];

const Customers = () => {
  const getInitialBakeries = () => {
    const saved = localStorage.getItem('global_bakeries');
    if (saved) return JSON.parse(saved);
    localStorage.setItem('global_bakeries', JSON.stringify(MOCK_BAKERIES));
    return MOCK_BAKERIES;
  };

  const [clients, setClients] = useState(getInitialBakeries);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingClient, setEditingClient] = useState(null);
  const [formData, setFormData] = useState({ name: '', mobile: '', address: '', plan: 'Basic', banner: '/birthday_cake_banner.png' });
  
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
  
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [clientToDelete, setClientToDelete] = useState(null);

  useEffect(() => {
    localStorage.setItem('global_bakeries', JSON.stringify(clients));
  }, [clients]);

  const filteredClients = clients.filter(c => c.name.toLowerCase().includes(searchTerm.toLowerCase()) || c.mobile.includes(searchTerm));

  const handleAddOrUpdate = (e) => {
    e.preventDefault();
    if (editingClient) {
      setClients(clients.map(c => c.id === editingClient.id ? { ...c, ...formData } : c));
    } else {
      const newBakery = { 
        id: Date.now(), 
        ...formData, 
        status: 'Active',
        validUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
        isBlocked: false,
        customersCount: 0,
        messagesSent: 0,
        messageLimit: formData.plan === 'Basic' ? 500 : 20000,
        waStatus: 'pending'
      };
      setClients([...clients, newBakery]);
    }
    setShowAddForm(false);
    setEditingClient(null);
    setFormData({ name: '', mobile: '', address: '', plan: 'Basic', banner: '/birthday_cake_banner.png' });
  };

  const openEdit = (client) => {
    setEditingClient(client);
    setFormData({ name: client.name, mobile: client.mobile, address: client.address, plan: client.plan, banner: client.banner || '/birthday_cake_banner.png' });
    setShowAddForm(true);
  };

  const openDelete = (id) => {
    setClientToDelete(id);
    setDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    if (clientToDelete) {
      setClients(clients.filter(c => c.id !== clientToDelete));
      setDeleteModalOpen(false);
      setClientToDelete(null);
    }
  };

  const cancelAdd = () => {
    setShowAddForm(false);
    setEditingClient(null);
    setFormData({ name: '', mobile: '', address: '', plan: 'Basic', banner: '/birthday_cake_banner.png' });
  };

  return (
    <div className="customers-container animate-fade-in">
      <div className="customers-header flex justify-between items-center mb-6">
        <div>
          <h1 className="premium-title">Bakery Clients</h1>
          <p className="premium-subtitle">Manage your B2B bakery subscriptions and credentials</p>
        </div>
        <button className="premium-btn-primary" onClick={() => setShowAddForm(!showAddForm)}>
          <Store size={18} /> Onboard New Bakery
        </button>
      </div>

      {showAddForm && (
        <div className="premium-form-card mb-6 animate-fade-in">
          <h2 className="form-heading">{editingClient ? 'Edit Bakery Profile' : 'Bakery Onboarding Form'}</h2>
          <form onSubmit={handleAddOrUpdate} className="customer-form">
            <div className="form-grid">
              <div className="input-field">
                <label>Bakery Name</label>
                <input type="text" placeholder="e.g. Sweet Cakes" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required />
              </div>
              <div className="input-field">
                <label>Manager Mobile</label>
                <input type="tel" placeholder="+1 234 567 8900" value={formData.mobile} onChange={e => setFormData({...formData, mobile: e.target.value})} required />
              </div>
              <div className="input-field" style={{ gridColumn: 'span 1' }}>
                <label>Complete Address</label>
                <input type="text" placeholder="Enter full address" value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})} required />
              </div>
              <div className="input-field">
                <label>Subscription Plan</label>
                <select value={formData.plan} onChange={e => setFormData({...formData, plan: e.target.value})}>
                  <option value="Basic">Basic Plan</option>
                  <option value="Premium">Premium Plan</option>
                  <option value="Enterprise">Enterprise Plan</option>
                </select>
              </div>
              <div className="input-field" style={{ gridColumn: 'span 2' }}>
                <label>Upload Bakery Cover Image</label>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  {formData.banner && (
                    <img src={formData.banner} alt="Preview" style={{ width: '80px', height: '40px', objectFit: 'cover', borderRadius: '6px', border: '1px solid var(--border-color)' }} />
                  )}
                  <input type="file" accept="image/*" onChange={handleImageUpload} className="form-input" style={{ flex: 1, padding: '0.4rem' }} />
                </div>
              </div>
            </div>
            <div className="form-actions-right mt-6">
              <button type="button" className="premium-btn-ghost mr-3" onClick={cancelAdd}>Cancel</button>
              <button type="submit" className="premium-btn-primary">{editingClient ? 'Update Profile' : 'Save & Generate Credentials'}</button>
            </div>
          </form>
        </div>
      )}

      <div className="premium-table-container">
        <div className="table-toolbar flex justify-between items-center">
          <div className="search-box">
            <Search size={18} className="search-icon" />
            <input type="text" placeholder="Search bakeries..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
          </div>
          <div className="toolbar-actions">
            <span className="text-sm text-gray-500">{filteredClients.length} clients active</span>
          </div>
        </div>

        <div className="overflow-x-auto w-full">
          <table className="premium-table">
            <thead>
              <tr>
                <th>Bakery Name</th>
                <th>Manager Contact</th>
                <th>Location</th>
                <th>Plan</th>
                <th>API Status</th>
                <th className="text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredClients.map(client => (
                <tr key={client.id}>
                  <td className="font-semibold text-slate-800">{client.name}</td>
                  <td className="text-gray-600">{client.mobile}</td>
                  <td className="text-gray-500">{client.address}</td>
                  <td>
                    <span className="saas-status-badge active" style={{ background: client.plan === 'Premium' ? '#fdf2f8' : (client.plan === 'Basic' ? '#eff6ff' : '#ecfdf5'), color: client.plan === 'Premium' ? '#db2777' : (client.plan === 'Basic' ? '#2563eb' : '#059669') }}>
                      {client.plan}
                    </span>
                  </td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: client.waStatus === 'connected' ? '#10b981' : (client.waStatus === 'pending' ? '#f59e0b' : '#ef4444'), fontSize: '0.85rem', fontWeight: '600' }}>
                      {client.waStatus === 'connected' ? <Wifi size={14}/> : <WifiOff size={14}/>}
                      {client.waStatus.charAt(0).toUpperCase() + client.waStatus.slice(1)}
                    </div>
                  </td>
                  <td className="text-right action-cells">
                    <button className="icon-action-btn" title="Edit Bakery" onClick={() => openEdit(client)}><Edit2 size={16} /></button>
                    <button className="icon-action-btn delete" title="Delete Bakery" onClick={() => openDelete(client.id)}><Trash2 size={16} /></button>
                  </td>
                </tr>
              ))}
              {filteredClients.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center py-8 text-gray-500">No bakery clients found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <ConfirmModal 
        isOpen={deleteModalOpen}
        title="Delete Bakery Client"
        message="Are you sure you want to permanently delete this bakery? All associated API keys, billing data, and their end-consumer database will be permanently wiped. This action cannot be undone."
        confirmText="Delete Client"
        cancelText="Cancel"
        type="danger"
        onConfirm={confirmDelete}
        onCancel={() => setDeleteModalOpen(false)}
      />
    </div>
  );
};

export default Customers;

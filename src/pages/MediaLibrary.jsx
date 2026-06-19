import React from 'react';
import { UploadCloud, Image as ImageIcon, Trash2, CheckCircle2 } from 'lucide-react';

const MediaLibrary = () => {
  const banners = [
    { id: 1, name: 'Christmas Special', img: '/birthday_cake_banner.png', status: 'Approved' },
    { id: 2, name: 'Diwali Offer', img: '/bakery_festival_banner.png', status: 'Approved' }
  ];

  return (
    <div className="animate-fade-in" style={{ paddingBottom: '3rem' }}>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="premium-title">Global Media Library</h1>
          <p className="premium-subtitle">Upload and manage approved banners for your bakeries</p>
        </div>
        <button className="premium-btn-primary" onClick={() => alert('File Upload Picker Opened. (Demo only)')}>
          <UploadCloud size={18} /> Upload New Banner
        </button>
      </div>

      <div className="saas-cards-grid">
        {banners.map(b => (
          <div key={b.id} className="saas-bakery-card">
            <div className="card-image-header" style={{ backgroundImage: `url(${b.img})`, height: '180px' }}>
              <span className="saas-status-badge active"><CheckCircle2 size={12}/> {b.status}</span>
            </div>
            <div className="p-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <ImageIcon size={18} className="text-pink-600" />
                <span className="font-bold text-slate-800">{b.name}</span>
              </div>
              <button className="icon-action-btn delete" title="Delete Banner" onClick={() => alert(`Deleted banner: ${b.name}`)}><Trash2 size={16} /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaLibrary;

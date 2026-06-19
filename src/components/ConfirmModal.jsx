import React from 'react';
import { AlertTriangle, X } from 'lucide-react';
import './ConfirmModal.css';

const ConfirmModal = ({ isOpen, title, message, onConfirm, onCancel, confirmText = "Confirm", cancelText = "Cancel", type = "danger" }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay animate-fade-in">
      <div className="modal-content animate-slide-up">
        <button className="modal-close" onClick={onCancel}>
          <X size={20} />
        </button>
        
        <div className={`modal-icon-wrapper ${type}`}>
          <AlertTriangle size={32} />
        </div>
        
        <h2 className="modal-title">{title}</h2>
        <p className="modal-message">{message}</p>
        
        <div className="modal-actions">
          <button className="modal-btn cancel-btn" onClick={onCancel}>
            {cancelText}
          </button>
          <button className={`modal-btn confirm-btn ${type}`} onClick={onConfirm}>
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;

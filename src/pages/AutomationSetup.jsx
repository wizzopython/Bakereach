import React, { useState } from 'react';
import { ShieldCheck, Settings, Users, MessageCircle, PhoneOutgoing, ArrowRight, Sparkles, PartyPopper } from 'lucide-react';
import './AutomationSetup.css';

const WORKFLOW_STEPS = [
  {
    id: 1,
    title: "Superadmin Onboarding",
    description: "Superadmin assigns a plan and credentials, delivered automatically to the Bakery Manager.",
    icon: <ShieldCheck size={24} />,
    color: "var(--accent-primary)"
  },
  {
    id: 2,
    title: "Bakery Configuration",
    description: "Manager uploads lively banners and sets up custom quotes for upcoming birthdays & festivals.",
    icon: <Settings size={24} />,
    color: "var(--accent-secondary)"
  },
  {
    id: 3,
    title: "Data Collection",
    description: "Counter staff inputs customer data (Name, Mobile, DOB) from storefront forms.",
    icon: <Users size={24} />,
    color: "var(--success)"
  },
  {
    id: 4,
    title: "Automated Greetings",
    description: "System triggers festive WhatsApp messages with custom banners 2-3 days before birthdays.",
    icon: <MessageCircle size={24} />,
    color: "var(--warning)"
  },
  {
    id: 5,
    title: "Direct Connect",
    description: "When a customer replies, an immediate follow-up shares the Manager's direct number for pre-orders.",
    icon: <PhoneOutgoing size={24} />,
    color: "#8b5cf6"
  }
];

const AutomationSetup = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="automation-container animate-fade-in">
      <div className="automation-header mb-6 text-center">
        <h1 className="page-title flex items-center justify-center gap-3">
          <PartyPopper className="animate-float" color="var(--accent-secondary)" size={36} /> 
          Automation Workflow 
          <PartyPopper className="animate-float" color="var(--accent-secondary)" size={36} style={{transform: 'scaleX(-1)'}}/>
        </h1>
        <p className="page-subtitle">See how BakeReach powers up festive campaigns magically!</p>
      </div>

      <div className="workflow-layout">
        {/* Timeline Visualization */}
        <div className="workflow-timeline glass-panel p-6">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ marginBottom: '2rem', color: 'var(--text-primary)' }}>
            <Sparkles color="var(--accent-secondary)" /> System Flow
          </h2>
          <div className="timeline-container">
            {WORKFLOW_STEPS.map((step, index) => (
              <div 
                key={step.id} 
                className={`timeline-item ${activeStep === step.id ? 'active' : ''} ${activeStep > step.id ? 'completed' : ''}`}
                onClick={() => setActiveStep(step.id)}
              >
                <div className="timeline-connector"></div>
                <div 
                  className="timeline-icon" 
                  style={{ 
                    backgroundColor: activeStep === step.id ? step.color : 'white',
                    border: `2px solid ${activeStep === step.id ? step.color : 'var(--border-color)'}`,
                    boxShadow: activeStep === step.id ? `0 4px 15px ${step.color}66` : 'none',
                    color: activeStep === step.id ? 'white' : 'var(--text-secondary)'
                  }}
                >
                  {step.icon}
                </div>
                <div className="timeline-content">
                  <h3 style={{ color: activeStep === step.id ? step.color : 'var(--text-primary)' }}>
                    Phase {step.id}: {step.title}
                  </h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live Simulation Panel */}
        <div className="workflow-simulation p-6">
          <h2 className="text-xl font-bold mb-4 text-center" style={{ marginBottom: '1.5rem', color: 'white' }}>Live Simulation</h2>
          
          <div className="simulation-screen">
            {/* Confetti Animation Background */}
            <div className="confetti-bg"></div>

            {activeStep === 1 && (
              <div className="sim-content animate-fade-in text-center">
                <div className="sim-circle animate-float mx-auto mb-4" style={{ margin: '0 auto 1rem', background: 'var(--accent-primary)' }}>
                  <ShieldCheck size={48} color="white" />
                </div>
                <h3 className="sim-title">Superadmin Control</h3>
                <p className="mt-2 text-sm text-white opacity-80">Credentials sent securely to the Bakery.</p>
                <div className="sim-code-block mt-4">
                  {`> Creating Bakery Profile...\n> Generating Magic Link...\n> SMS Sent to Manager ✨`}
                </div>
              </div>
            )}

            {activeStep === 2 && (
              <div className="sim-content animate-fade-in">
                <div className="sim-app-ui">
                  <div className="sim-header">Campaign Setup</div>
                  <div className="sim-body">
                    <div className="sim-banner-preview">
                       <img src="/bakery_festival_banner.png" alt="Festival Banner" className="w-full h-24 object-cover rounded-md mb-2" />
                       <div className="text-xs text-center color-secondary">Banner Uploaded!</div>
                    </div>
                    <div className="sim-input-mock">"Advance Happy Birthday! Enjoy a free cupcake on us! 🧁"</div>
                    <button className="sim-btn">Save Festive Config</button>
                  </div>
                </div>
              </div>
            )}

            {activeStep === 3 && (
              <div className="sim-content animate-fade-in">
                <div className="sim-cards">
                  <div className="sim-card text-left">
                    <div className="flex justify-between items-center">
                       <strong>John Doe</strong>
                       <span className="text-xs bg-pink-100 text-pink-600 px-2 py-1 rounded">DOB: Oct 15</span>
                    </div>
                    <div className="text-sm mt-1 opacity-70">+1 555-0198</div>
                  </div>
                  <div className="sim-card text-left">
                    <div className="flex justify-between items-center">
                       <strong>Sarah Smith</strong>
                       <span className="text-xs bg-pink-100 text-pink-600 px-2 py-1 rounded">DOB: Nov 02</span>
                    </div>
                    <div className="text-sm mt-1 opacity-70">+1 555-0245</div>
                  </div>
                </div>
                <div className="text-center mt-4 text-sm font-bold flex items-center justify-center gap-2" style={{color: '#10b981'}}>
                  <CheckCircle size={18} /> Customers Added to Bakery Ledger
                </div>
              </div>
            )}

            {activeStep === 4 && (
              <div className="sim-content animate-fade-in">
                <div className="whatsapp-mock">
                  <div className="wa-header flex items-center gap-2">
                    <div className="wa-avatar">SC</div>
                    <div>Sweet Cakes</div>
                  </div>
                  <div className="wa-body">
                    <div className="wa-msg incoming">
                      <img src="/birthday_cake_banner.png" alt="Cake Banner" className="wa-img-mock" />
                      <strong>Advance Happy Birthday! 🎂</strong><br/>
                      Enjoy a free cupcake with any custom cake order this week!
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeStep === 5 && (
              <div className="sim-content animate-fade-in">
                <div className="whatsapp-mock">
                  <div className="wa-body">
                    <div className="wa-msg outgoing">Wow, thank you so much! I need a cake for Saturday.</div>
                    <div className="wa-msg incoming mt-2">
                      You're welcome! 🎈 To place a pre-order, please contact our manager directly at <strong>+1 234 567 8900</strong>. We look forward to celebrating with you!
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="sim-controls mt-4 flex justify-between">
            <button 
              className="btn btn-secondary" 
              style={{background: 'rgba(255,255,255,0.2)', color: 'white', border: 'none'}}
              onClick={() => setActiveStep(prev => Math.max(1, prev - 1))}
              disabled={activeStep === 1}
            >
              Previous
            </button>
            <button 
              className="btn btn-primary" 
              style={{background: 'white', color: 'var(--accent-primary)', boxShadow: '0 4px 15px rgba(0,0,0,0.2)'}}
              onClick={() => setActiveStep(prev => Math.min(5, prev + 1))}
              disabled={activeStep === 5}
            >
              Next Step <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const CheckCircle = ({size}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

export default AutomationSetup;

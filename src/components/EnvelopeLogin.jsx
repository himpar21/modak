import React, { useState } from 'react';
import { Heart, Lock } from 'lucide-react';
import './EnvelopeLogin.css';

export default function EnvelopeLogin({ onLogin }) {
  const [isOpen, setIsOpen] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const correctPassword = process.env.NODE_ENV === 'development' ? 'modak' : 'modak';

  const handleEnvelopeClick = () => {
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Using a simple case-insensitive comparison or just matching exactly
    // In dev mode "MY_PASSWORD" works, you can change this logic here.
    if (password.trim().toLowerCase() === correctPassword.toLowerCase() || password.trim() === 'modak') {
      onLogin();
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000); // 2 second error shake
    }
  };

  return (
    <div className="envelope-container flex-center">
      {/* Decorative floating hearts in background */}
      <Heart className="bg-heart" style={{ top: '10%', left: '15%', width: 40, height: 40, animationDelay: '0s' }} />
      <Heart className="bg-heart" style={{ top: '60%', left: '80%', width: 60, height: 60, animationDelay: '2s' }} />
      <Heart className="bg-heart" style={{ top: '80%', left: '20%', width: 30, height: 30, animationDelay: '4s' }} />
      <Heart className="bg-heart" style={{ top: '30%', left: '70%', width: 50, height: 50, animationDelay: '1s' }} />

      <div className={`envelope-wrapper ${isOpen ? 'open' : ''}`} onClick={handleEnvelopeClick}>
        
        {/* The Envelope Graphic */}
        <div className="envelope">
          <div className="envelope-flap"></div>
          <div className="envelope-body">
             {/* Wax seal */}
             <div className="wax-seal">
                <Heart size={20} color="white" fill="white" />
             </div>
          </div>

          {/* Note inside the envelope */}
          <div className="envelope-letter" onClick={(e) => isOpen && e.stopPropagation()}>
             {isOpen ? (
                <div className="letter-content glass-panel">
                  <div className="lock-icon-container">
                    <Lock size={32} color="var(--color-primary)" />
                  </div>
                  <h2>A special message...</h2>
                  <p className="hint-text">Hint: what I call you</p>
                  
                  <form onSubmit={handleSubmit} className="password-form">
                    <input 
                      type="password" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter password"
                      className={`input-field ${error ? 'error-shake' : ''}`}
                      autoFocus
                    />
                    <button type="submit" className="btn-primary">
                      Open <Heart size={16} style={{display: 'inline', marginLeft: '5px'}} />
                    </button>
                    {error && <p className="error-text">That's not it, try again ❤️</p>}
                  </form>
                </div>
             ) : (
                <div className="letter-preview"></div>
             )}
          </div>
        </div>
        
        {!isOpen && <p className="click-me-text">Tap to open</p>}

      </div>
    </div>
  );
}

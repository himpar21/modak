import React from 'react';
import '../App.css';

export default function LetterOverlay({ note, onClose }) {
  // Prevent clicks inside the letter from closing it
  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="letter-overlay" onClick={onClose} style={{ zIndex: 3000 }}>
      <div className="letter-paper" onClick={handleContentClick}>
        <button className="letter-close" onClick={onClose}>&times;</button>
        <div className="letter-content" style={{ animationDelay: '0s' }}>
          {note}
        </div>
      </div>
    </div>
  );
}

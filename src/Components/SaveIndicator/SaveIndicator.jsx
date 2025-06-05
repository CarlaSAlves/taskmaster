import React, { useState, useEffect } from 'react';
import './SaveIndicator.css';

const SaveIndicator = ({ saving }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (saving) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
      }, 2000); // Hide after 2 seconds
      return () => clearTimeout(timer);
    } else {
      setVisible(false);
    }
  }, [saving]);

  return (
    <div className={`save-indicator ${visible ? 'visible' : ''}`}>
      Saving...
      <span className="save-icon">✓</span>
      <span className="save-text">Changes saved</span>
    </div>
  );
}
export default SaveIndicator;

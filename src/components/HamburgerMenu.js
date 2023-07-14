import React, { useState } from 'react';

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-top-bar">
        <div className={`hamburger-menu ${isOpen ? 'open' : ''}`} onClick={handleMenuToggle}>
            <div className="hamburger-bar"></div>
            <div className="hamburger-bar"></div>
            <div className="hamburger-bar"></div>
        </div>
        {isOpen && (
            <div className="hamburger-menu-items">
                <span>Excel to email converter</span>
                <span>Coming soon...</span>
                <span>Coming soon...</span>
                <span>Coming soon...</span>
            </div>
        )}
    </div>
  );
}

export default HamburgerMenu;

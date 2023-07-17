import React from 'react';
import { Link } from 'react-router-dom';

function BotBar() {
  return (
    <div className="bottom-bar">
      <div className="bottom-bar-links">
        <Link href="/UniTools">Home</Link>
        <a href="https://github.com/CaptDany/UniTools">GitHub</a>
        <a href="https://www.paypal.com/donate/?hosted_button_id=GKU2C99M4QRK4">Buy me a ☕</a>
      </div>
      <p className="bottom-bar-text">Made with ❤ love by Capt. Dany.</p>
    </div>
  );
}

export default BotBar;
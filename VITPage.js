import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './VITPage.css'; // Ensure this CSS file is updated for new styles

const VITPage = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleApply = () => {
    // Handle the apply action here, e.g., log input or perform other logic
    console.log(`Input applied: ${inputValue}`);
  };

  return (
    <div className="vit-page-container">
      {/* Navigation Bar */}
      <nav className="nav-bar">
        <Link to="/cards">SVECW</Link>
        <Link to="/cards">VDC</Link>
        <Link to="/cards">Dental</Link>
        <Link to="/cards">Diploma</Link>
      </nav>

      {/* Input Section */}
      <div className="input-container">
        <h1>Welcome to VIT Institution</h1>
        <input
          type="text"
          placeholder="Enter your input here"
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>

      {/* Food Categories */}
      <div className="food-cards-container">
        <div className="food-card">Fruits</div>
        <div className="food-card">Vegetables</div>
        <div className="food-card">Snacks</div>
        <div className="food-card">Beverages</div>
        <div className="food-card">Desserts</div>
      </div>

      {/* Apply Button */}
      <div className="apply-button-container">
        <button onClick={handleApply}>Apply</button>
      </div>
    </div>
  );
};

export default VITPage;

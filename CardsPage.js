import React from 'react';
import { Link } from 'react-router-dom';
import './CardsPage.css';

const CardsPage = () => {
  return (
    <div className="cards-container">
      <h1>Available Institutions</h1>
      <div className="cards">
        <Link to="/institution/svecw" className="card">SVECW</Link>
        <Link to="/institution/vit" className="card">VIT</Link>
        <Link to="/institution/vdc" className="card">VDC</Link>
        <Link to="/institution/dental" className="card">Dental</Link>
        <Link to="/institution/diploma" className="card">Diploma</Link>
      </div>
    </div>
  );
};

export default CardsPage;

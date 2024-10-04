import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import CardsPage from './CardsPage';
import VITPage from './VITPage'; // Import the VIT institution page

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="top-right-buttons">
          <button className="button">Login</button>
          <button className="button">Signup</button>
        </div>
        <div className="center-button">
          <Link to="/cards">
            <button className="get-started-button">Get Started</button>
          </Link>
        </div>
      </div>

      {/* Define Routes */}
      <Routes>
        <Route path="/cards" element={<CardsPage />} />
        <Route path="/institution/vit" element={<VITPage />} />
      </Routes>
    </Router>
  );
}

export default App;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

function Home() {
  const navigate = useNavigate();

  const handleLoginRedirect = () => navigate('/login');
  const handleRegisterRedirect = () => navigate('/register');

  return (
    <div className="home-container">
      <div className="abacus-info">
        <h1>Welcome to the Bead App</h1>
        <p>
          Our app is designed to help students of all ages practice and master the abacus, offering a variety of features that make learning both fun and effective. Whether you're a beginner or advanced, this platform is tailored for your growth.
        </p>

        <div className="abacus-triangle">
          {/* <img src="/path-to-your-abacus-triangle-image.jpg" alt="Abacus Triangle" /> */}
          <p className="triangle-description">
            The Abacus Triangle - A concept from SIP Abacus Academy, helping students visualize mathematical relationships more clearly.
          </p>
        </div>

        <p className="cta">Ready to improve your math skills with us? Register to get started!</p>
      </div>

      <div className="home-actions">
        <button onClick={handleLoginRedirect}>Login</button>
        <button onClick={handleRegisterRedirect}>Register</button>
      </div>
    </div>
  );
}

export default Home;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './RegisterPage.css';

function Register() {
  const [email, setEmail] = useState('');
  const [studentCode, setStudentCode] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    if (email && studentCode && password) {
      // Add register logic here (e.g., API call)
      navigate('/dashboard');
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Student Code"
        value={studentCode}
        onChange={(e) => setStudentCode(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>

      {/* Link to go back to the login page */}
      <p className="back-to-login">
        Already have an account? <Link to="/login">Login here</Link>
      </p>

      {/* Forgot Password link */}
      <p className="forgot-password">
        <Link to="/forgot-password">Forgot Password?</Link>
      </p>
    </div>
  );
}

export default Register;

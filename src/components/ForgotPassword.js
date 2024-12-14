import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ForgotPassword.css';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (email) {
      // Simulate a request to send a password reset email (usually an API call)
      alert("Password reset email sent to " + email);
      navigate("/reset-password");  // Redirect to the reset password page
    } else {
      alert("Please enter a valid email");
    }
  };

  return (
    <div className="forgot-password-container">
      <h2>Forgot Password</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default ForgotPassword;

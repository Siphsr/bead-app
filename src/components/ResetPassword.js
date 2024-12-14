import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ResetPassword.css';

function ResetPassword() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (newPassword && confirmPassword) {
      if (newPassword === confirmPassword) {
        // Simulate password reset API call here
        alert("Your password has been reset successfully!");
        navigate("/login");  // Redirect to the login page after successful password reset
      } else {
        alert("Passwords do not match!");
      }
    } else {
      alert("Please fill in both password fields.");
    }
  };

  return (
    <div className="reset-password-container">
      <h2>Reset Your Password</h2>
      <input
        type="password"
        placeholder="New Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm New Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Reset Password</button>
    </div>
  );
}

export default ResetPassword;

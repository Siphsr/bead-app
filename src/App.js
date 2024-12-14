import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import DashboardPage from './components/DashboardPage';
import DictationPage from './components/DictationPage';
import Footer from './components/Footer';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/dictation" element={<DictationPage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />  {/* Route for Forgot Password */}
          <Route path="/reset-password" element={<ResetPassword />} />  {/* Route for Reset Password */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

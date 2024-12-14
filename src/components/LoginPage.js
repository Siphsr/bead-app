import React, { useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import "./LoginPage.css";
import { UserContext } from '../context/UserContext';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setUserId } = useContext(UserContext)

  const handleLogin = async (e) => {
    e.preventDefault();

    localStorage.setItem('userId', 'SJN2023i243')
    console.log(localStorage.getItem('userId'))
                navigate('/dashboard');

    // try {
    //     const response = await fetch('https://thebeadappbe.vercel.app/login', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             email,
    //             password
    //         }),
    //     });

        

    //     const result = await response.json();
    //     if (result.message === "Login successful") {
    //         setTimeout(() => {
    //             const fetchedUserId = 3501;
    //             if(fetchedUserId) {
    //               setUserId(fetchedUserId)
    //               localStorage.setItem('userId', fetchedUserId)
    //             } else {
    //               console.log('Failed to fetch userId')
    //             }
    //             navigate('/dashboard');
               
    //         }, 3000);
    //     } 
    // } catch (error) {
    //     console.error('Error during login:', error);
        
    // }
};
  

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      
      <div className="forgot-password">
        <Link to="/reset-password">ResetPassword</Link>
      </div>
    </div>
  );
}

export default Login;

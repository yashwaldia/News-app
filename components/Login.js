import React, { useState } from 'react';
import { auth, signInWithEmailAndPassword } from '../firebase/firebase';
import { useRouter } from 'next/router';
import './Login.css'; // Import the CSS file for styling

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Login successful!');
      router.push('/dashboard');
    } catch (error) {
      console.error('Login error:', error.message);
    }
  };

  return (
    <div className="login-container">
          <div className="login-cardd">

      <h2 className="login-title">Welcome</h2>
      <form className="login-form" onSubmit={handleLogin}>
        {/* Add the onSubmit attribute to the form */}
        <label className="login-label" htmlFor="email">
          Email:
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login-input"
        />
        <label className="login-label" htmlFor="password">
          Password:
        </label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
    </div>

  );
};

export default Login; 
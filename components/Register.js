import React, { useState } from 'react';
import { auth, createUserWithEmailAndPassword } from '../firebase/firebase';
import { useRouter } from 'next/router';
import './Register.css'; // Import the CSS file for styling

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleRegister = async () => {
    try {
      setLoading(true);
      setError(null);
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('Registration successful!');
      router.push('/login');
    } catch (error) {
      console.error('Registration error:', error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      <div className="register-cardd">
        <h2 className="register-title">Create your Account</h2>
        <form className="register-form">
          <label className="register-label" htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="register-input"
          />
          <label className="register-label" htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="register-input"
          />
          <button className="register-button" onClick={handleRegister} disabled={loading}>
            {loading ? 'Registering...' : 'Register'}
          </button>
        </form>
        {error && <p className="register-error">{error}</p>}
      </div>
    </div>
  );
};

export default Register;

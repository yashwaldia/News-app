import Link from 'next/link';
import React from 'react';
import './HomePage.css'; // Import the CSS file

const HomePage = () => {
  return (

    <div className="homepage-container">
      <h1 className="homepage-title">Triveous News</h1>
      <div className="card-container">
        <Link href="/login" className="login-card">
          <div className="card-content">
            <h3>Login</h3>
            <p>Access your existing account</p>
          </div>
        </Link>
        <Link href="/register" className="register-card">
          <div className="card-content">
            <h3>Register</h3>
            <p>Create a new account</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;



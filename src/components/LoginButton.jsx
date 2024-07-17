import React from 'react';
import axios from 'axios';

const LoginButton = () => {
  const handleLogin = async () => {
    try {
      // Make a request to your Node.js backend to initiate NHS login authentication
      const response = await axios.get('http://localhost:3000/auth/nhs-login');
      // Redirect to NHS login page
      window.location = response.data.redirect;
    } catch (error) {
      console.error('Error while initiating NHS login:', error);
    }
  };

  return (
    <button onClick={handleLogin}>
      Login with NHS
    </button>
  );
};

export default LoginButton;

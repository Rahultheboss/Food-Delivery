import React, { useState } from 'react';
import './App.css'; // Import the generated CSS file
import axios from 'axios'


function login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/user/login', { email, password })
        .then(result => {
          if (result.data === 'Success') {
            console.log('login success')
          }
          else {
            console.log("Incorrect login credentials");
          }
        })
    }
    catch (error) {
      console.log('Error!', error)
    }
  }


  return (
    <section className="container forms">
      {/* Login Form */}
      <div className="form login">
        <div className="form-content">
          <header>Login</header>
          <form onSubmit={handleSubmit}>
            <div className="field input-field">
              <input type="email" placeholder="Email" className="input"
                onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="field input-field">
              <input type="password" placeholder="Password" className="password" onChange={(e) => setPassword(e.target.value)} />
              <i className='bx bx-hide eye-icon'></i>
            </div>

            <div className="form-link">
              <a href="#" className="forgot-pass">Forgot password?</a>
            </div>

            <div className="field button-field">
              <button>Login</button>
            </div>
          </form>

          <div className="form-link">
            <span>Don't have an account? <a href="#" className="link signup-link">Signup</a></span>
          </div>
        </div>

        <div className="line"></div>

        {/* Media Options for Login */}
        <div className="media-options">
          <a href="#" className="field facebook">
            <i className='bx bxl-facebook facebook-icon'></i>
            <span>Login with Facebook</span>
          </a>
        </div>

        <div className="media-options">
          <a href="#" className="field google">
            <img src="#" alt="" className="google-img" />
            <span>Login with Google</span>
          </a>
        </div>
      </div>

      {/* Signup Form */}
      <div className="form signup">
        {/* ... (similar structure as the login form) ... */}
      </div>
    </section>
  );
}

export default login;

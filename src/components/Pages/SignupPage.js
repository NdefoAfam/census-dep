import React from 'react';
import './LoginSignup.css'; // Assuming you have a common CSS file for both forms

const SignupPage = () => {
  return (
    <div className="form-container">
      <form>
        <h3>Sign Up</h3>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input type="text" id="fullName" name="fullName" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div className="form-group submit-btn">
          <input type="submit" value="Sign Up" />
        </div>
      </form>
    </div>
  );
};

export default SignupPage;

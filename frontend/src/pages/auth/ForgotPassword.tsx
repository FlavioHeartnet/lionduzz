import React from 'react';

const ForgotPassword: React.FC = () => {
  return (
    <div>
      <h1>Forgot Password</h1>
      <form>
        <input type="email" name="email" placeholder="Email" />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ForgotPassword;

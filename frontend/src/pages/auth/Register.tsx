import React from 'react';

const Register: React.FC = () => {
  return (
    <div>
      <h1>Register</h1>
      <form>
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;

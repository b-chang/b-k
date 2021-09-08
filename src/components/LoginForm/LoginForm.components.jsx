import React, { useState } from 'react';
import './LoginForm.styles.scss';

const LoginForm = () => {
  const [values, setValues] = useState({
    username: '',
    password: ''
  });

  const handleInputChange = (e) => {
    setValues({ ...values, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({
      username: '',
      password: ''
    });
  };

  return (
    <div>
      <h1>LoginForm</h1>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label htmlFor="username">
          Username
          <input type="text" value={values.username} onChange={handleInputChange} id="username" />
        </label>
        <label htmlFor="password">
          Password
          <input type="text" value={values.password} onChange={handleInputChange} id="password" />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
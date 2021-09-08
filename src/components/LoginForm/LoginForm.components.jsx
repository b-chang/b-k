import React, { useState } from 'react';
import './LoginForm.styles.scss';

const LoginForm = ({ getUser }) => {
  const [values, setValues] = useState({
    username: '',
    password: '',
    usernameError: '',
    passwordError: ''
  });

  const handleInputChange = (e) => {
    setValues({ ...values, [e.target.id]: e.target.value });
  };

  const validateInputs = () => {
    let usernameError = '';
    let passwordError = '';
    let isValid = true;

    if (!values.username) {
      usernameError = 'Enter your username.';
    }

    if (!values.password) {
      passwordError = 'Enter your password.';
    }

    if (usernameError || passwordError) {
      setValues({ ...values, usernameError, passwordError });
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateInputs()) {
      setValues({
        username: '',
        password: ''
      });
      getUser(values.username);
    }
  };

  return (
    <div className="loginContainer">
      <h1>LoginForm</h1>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label htmlFor="username">
          <span className="inputLabel">Username</span>
          <input type="text" value={values.username} onChange={handleInputChange} id="username" name="username" />
          {values.usernameError && <div className="error">{values.usernameError}</div>}
        </label>
        <label htmlFor="password">
          <span className="inputLabel">Password</span>
          <input type="text" value={values.password} onChange={handleInputChange} id="password" />
          {values.passwordError && <div className="error">{values.passwordError}</div>}
        </label>
        <button type="submit" className="submitBtn">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
import React, { useState } from 'react';
import './Home.styles.scss';
import Navbar from '../NavBar/NavBar.components';
import LoginForm from '../LoginForm/LoginForm.components';
import Feed from '../Feed/Feed.components';

const Home = () => {
  const [user, setUser] = useState('');

  const getUser = (userInfo) => {
    setUser(userInfo);
  };

  return (
    <div className="home">
      <Navbar />
      <LoginForm getUser={getUser} />
      <Feed user={user} />
    </div>
  );
};

export default Home;
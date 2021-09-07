import React from 'react';
import './Home.styles.scss';
import Navbar from '../NavBar/NavBar.components';
import Feed from '../Feed/Feed.components';

const Home = () => (
  <div className="home">
    <Navbar />
    <Feed />
  </div>
);

export default Home;
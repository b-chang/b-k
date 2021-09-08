import React, { useState } from 'react';
import './NavBar.styles.scss';
import search from '../../assets/images/search.svg';
import posts from '../../FakeData';

const NavBar = () => {
  const [user, setUser] = useState({ posts });
  console.log(user);

  return (
    <div className="navbar">
      <span className="logo">Bük</span>
      <button type="button" className="search"><img src={search} alt="search icon" className="searchIcon" /></button>
      <ul className="navActivities">
        <li>
          Following
        </li>
        <li>
          Readings
        </li>
        <li>
          Explore
        </li>
        <li>
          Challenges
        </li>
      </ul>

      <ul className="navProfile">
        <li>
          <img src="https://source.unsplash.com/nLvqquwiqWQ" alt="user-avatar" className="avatar" />
        </li>
        <li className="addPostBtn">
          <button type="button">+</button>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
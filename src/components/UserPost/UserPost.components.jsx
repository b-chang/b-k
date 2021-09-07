import React from 'react';
import './UserPost.styles.scss';
import badge from '../../assets/images/badge.svg';

const UserPost = () => (
  <div className="user-post">
    <div className="postHeader">
      <img src="https://source.unsplash.com/nLvqquwiqWQ" alt="user-avatar" className="avatar" />
      <div className="userInfo">
        <div className="userName">Batman</div>
        <div>
          {`Today at ${new Date().toLocaleTimeString([], { timeStyle: 'short' })}`}
        </div>
      </div>
      <button type="button" className="moreButton">...</button>
    </div>
    <div className="postContent">
      <div className="bookTitle">Dark Knight</div>
      <div className="achievements">
        Achievements
        <div><img src={badge} alt="achievment badge" className="badges" /></div>
      </div>
      <ul className="readingStats">
        <li className="stat">
          PAGES
          <br />
          <span>42</span>
        </li>
        <div className="lineBreak" />
        <li className="stat">
          PPM
          <br />
          <span>0.7</span>
        </li>
        <div className="lineBreak" />
        <li className="stat">
          TIME
          <br />
          <span>1H 00M</span>
        </li>
      </ul>
    </div>
    <div className="postFooter">Footer</div>
  </div>
);

export default UserPost;
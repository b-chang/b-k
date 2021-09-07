import React from 'react';
import './UserPost.styles.scss';
import badge from '../../assets/images/badge.svg';
import like from '../../assets/images/like.svg';
import comment from '../../assets/images/comment.svg';
import upload from '../../assets/images/upload.svg';

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
      <button type="button" className="button moreButton">...</button>
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
    <div className="kudos">24 gave KUDOS</div>
    <div className="postFooter">
      <button type="button" className="button"><img src={like} alt="like button" className="socialBtn" /></button>
      <div className="socialNum">24 KUDOS</div>
      <div className="lineBreak" />
      <button type="button" className="button">
        <img src={comment} alt="comment button" className="socialBtn" />
      </button>
      <div className="socialNum">5</div>
      <div className="lineBreak" />
      <button type="button" className="button"><img src={upload} alt="upload button" className="socialBtn" /></button>
    </div>
  </div>
);

export default UserPost;
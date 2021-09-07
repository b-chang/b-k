import React from 'react';
import './UserPost.styles.scss';

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
    <div className="postContent">Content</div>
    <div className="postFooter">Footer</div>
  </div>
);

export default UserPost;
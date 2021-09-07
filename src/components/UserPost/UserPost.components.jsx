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
    <div className="postContent">&quot;People need dramatic examples to shake them out of apathy and I can&apos;t do that as Bruce Wayne. As a man, I&apos;m flesh and blood, I can be ignored, I can be destroyed; but as a symbol... as a symbol I can be incorruptible, I can be everlasting.&quot;</div>
    <div className="postFooter">Footer</div>
  </div>
);

export default UserPost;
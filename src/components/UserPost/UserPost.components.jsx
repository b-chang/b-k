import React from 'react';
import './UserPost.styles.scss';
import badge from '../../assets/images/badge.svg';
import like from '../../assets/images/like.svg';
import comment from '../../assets/images/comment.svg';
import upload from '../../assets/images/upload.svg';

const UserPost = ({ post }) => {
  const formatTimeStamp = (time) => {
    const num = time;
    const hours = (num / 60);
    const rhours = Math.floor(hours);
    const minutes = (hours - rhours) * 60;
    const rminutes = Math.round(minutes);

    return time >= 60 ? `${rhours}h ${rminutes}m` : `${rminutes}m`;
  };

  const renderBadges = () => {
    const { achievements } = post;
    const badges = [];

    while (badges.length < achievements) {
      badges.push(<img src={badge} alt="achievment badge" className="badges" />);
    }

    return (
      badges.map((badge) => <li>{badge}</li>)
    );
  };

  return (
    <>
      {post ? (
        <div className="user-post">
          <div className="postHeader">
            <img src={post.avatar} alt="user-avatar" className="avatar" />
            <div className="userInfo">
              <div className="userName">{post.user}</div>
              <div>
                {`Today at ${post.date}`}
              </div>
            </div>
            <button type="button" className="button moreButton">...</button>
          </div>
          <div className="postContent">
            <div className="bookTitle">{post.book}</div>
            <div className="achievements">
              Achievements
              <ul>{renderBadges()}</ul>
            </div>
            <ul className="readingStats">
              <li className="stat">
                PAGES
                <br />
                <span className="readingNum">{post.pages}</span>
              </li>
              <div className="lineBreak" />
              <li className="stat">
                PPM
                <br />
                <span className="readingNum">{(post.pages / post.readingTime).toFixed(2)}</span>
              </li>
              <div className="lineBreak" />
              <li className="stat">
                TIME
                <br />
                <span className="readingNum">{formatTimeStamp(post.readingTime)}</span>
              </li>
            </ul>
          </div>
          <div className="kudos">
            {post.likes}
            {' '}
            gave KUDOS
          </div>
          <div className="postFooter">
            <button type="button" className="button"><img src={like} alt="like button" className="socialBtn" /></button>
            <div className="socialNum">{post.likes}</div>
            <div className="lineBreak" />
            <button type="button" className="button">
              <img src={comment} alt="comment button" className="socialBtn" />
            </button>
            <div className="socialNum">{post.comments}</div>
            <div className="lineBreak" />
            <button type="button" className="button"><img src={upload} alt="upload button" className="socialBtn" /></button>
          </div>
        </div>
      ) : ''}
    </>
  );
};

export default UserPost;
import React from 'react';
import './Feed.styles.scss';
import UserPost from '../UserPost/UserPost.components';
import posts from '../../FakeData';

const Feed = ({ user }) => {
  const renderPosts = posts.map((post) => (<UserPost post={post} key={post.id} />));

  return (
    <div className="feed">
      FEED
      {user && <div>{`Hello, ${user}`}</div>}
      {posts.length && renderPosts}
    </div>
  );
};

export default Feed;
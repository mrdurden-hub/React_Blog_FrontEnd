import React from 'react';
import P from 'prop-types';
import * as styled from './styled';
import Post from '../Post';

export default function PostCard({ posts }) {
  return (
    <styled.Content>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </styled.Content>
  );
}

PostCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  posts: P.array.isRequired,
};

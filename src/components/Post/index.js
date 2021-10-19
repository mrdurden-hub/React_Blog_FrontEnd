import React from 'react';
import P from 'prop-types';
import { Link } from 'react-router-dom';
import * as styled from './styled';
import { formatDate } from '../../utils/formate-date';

export default function Post({ post }) {
  return (
    <styled.Post>
      <h2>
        <Link to={`/post/${post.id}`}>{post.title}</Link>
      </h2>
      <p>
        <small>
          {`${formatDate(post.created_at)} | ${post.author.authors}`}
        </small>
      </p>
      <p>{post.description}</p>
    </styled.Post>
  );
}

Post.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  post: P.object.isRequired,
};

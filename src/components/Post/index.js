import React from 'react';
import P from 'prop-types';
import { Link } from 'react-router-dom';
import * as styled from './styled';
import { formatDate } from '../../utils/formate-date';

export default function Post({ post }) {
  return (
    <styled.Post>
      <div className="img">
        <img src={post.cover.url} alt={post.title} />
      </div>
      <div className="postInfo">
        <h3>
          <Link to={`/post/${post.id}`}>{post.title}</Link>
        </h3>
        <p className="post_date">
          <small>
            {`${formatDate(post.created_at)} | ${post.author.authors}`}
          </small>
        </p>
        <p>{post.description}</p>
      </div>

    </styled.Post>
  );
}

Post.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  post: P.object.isRequired,
};

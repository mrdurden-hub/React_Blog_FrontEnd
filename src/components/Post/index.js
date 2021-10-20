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
      <styled.postInfo>
        <h3>
          <Link to={`/post/${post.id}`}>{post.title}</Link>
        </h3>
        <p className="post_date">
          <small>
            {`${formatDate(post.created_at)} | ${post.author.authors}`}
          </small>
        </p>
        <p className="category">
          <small>
            {`Categoria: ${post.category.name}`}
          </small>
        </p>
        <p>{post.description}</p>
        <styled.readMoreBtn>
          <Link to={`/post/${post.id}`}>Ler mais</Link>
        </styled.readMoreBtn>
      </styled.postInfo>

    </styled.Post>
  );
}

Post.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  post: P.object.isRequired,
};

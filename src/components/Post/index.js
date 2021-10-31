import React from 'react';
import P from 'prop-types';
import { Link } from 'react-router-dom';
import * as styled from './styled';
import { formatDate } from '../../utils/formate-date';
import { Button } from '../Button';

export default function Post({ post }) {
  return (
    <styled.Post>
      <div className="img">
        <img src={post.cover.url} alt={post.title} />
      </div>

      <styled.TitlePost>
        <h3>
          <Link to={`/post/${post.id}`}>{post.title}</Link>
        </h3>
      </styled.TitlePost>

      <styled.PostInfo>
        <p>
          {`${formatDate(post.created_at)} | ${post.author.authors}`}
        </p>
        <div className="category">
          <p>
            {`Categoria: ${post.category.name}`}
          </p>
        </div>
      </styled.PostInfo>

      <styled.Description>
        <p>{post.description}</p>
      </styled.Description>

      <Button>
        <Link to={`/post/${post.id}`}>Ler mais</Link>
      </Button>

    </styled.Post>
  );
}

Post.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  post: P.object.isRequired,
};

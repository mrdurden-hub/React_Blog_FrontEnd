import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import remarkGfm from 'remark-gfm';
import axios from '../../utils/axios';
import * as styled from './styled';
import { formatDate } from '../../utils/formate-date';

export default function PostPage() {
  const [postPage, setPost] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`posts/${id}`).then((post) => {
      const apiPost = [post.data];
      setPost(apiPost);
    });
  }, [id]);

  return (
    <styled.Container>
      {postPage.map((post) => (
        <styled.Post key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          <p>
            <small>
              {`${formatDate(post.created_at)} | ${post.author.authors}`}
            </small>
          </p>
          <img src={post.cover.url} alt={post.title} />
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            skipHtml={false}
          >
            {post.content}
          </ReactMarkdown>
        </styled.Post>
      ))}
    </styled.Container>
  );
}

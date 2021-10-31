import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { DiscussionEmbed } from 'disqus-react';
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
        <div key={post.id}>
          <styled.Header>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <p className="postInfo">
              <small>
                {`Publicado em ${formatDate(post.created_at)} por ${post.author.authors}`}
              </small>
            </p>
            <img src={post.cover.url} alt={post.title} />
          </styled.Header>

          <styled.mainContent>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              skipHtml={false}
            >
              {post.content}
            </ReactMarkdown>
            <DiscussionEmbed title={post.title} slug={post.slug} />
          </styled.mainContent>

        </div>
      ))}
    </styled.Container>

  );
}

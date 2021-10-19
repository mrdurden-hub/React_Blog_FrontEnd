import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
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
                {`${formatDate(post.created_at)} | ${post.author.authors}`}
              </small>
            </p>
            <img src={post.cover.url} alt={post.title} />
          </styled.Header>

          <styled.Aside>
            <styled.AsideHeader>
              <p>Autor</p>
            </styled.AsideHeader>
            <styled.asideImg>
              <img src="https://res.cloudinary.com/dvtst96wr/image/upload/v1633427655/IMG_20190402_001929_entyc3.jpg" alt={post.title} />
            </styled.asideImg>
            <styled.AuthorInfo>
              <p>{post.author.authors}</p>
              <h4>Programador Javascript Full Stack</h4>
            </styled.AuthorInfo>
          </styled.Aside>

          <styled.mainContent>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              skipHtml={false}
            >
              {post.content}
            </ReactMarkdown>
          </styled.mainContent>

        </div>
      ))}
    </styled.Container>

  );
}

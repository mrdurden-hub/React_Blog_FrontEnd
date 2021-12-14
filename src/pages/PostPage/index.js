import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
// import { DiscussionEmbed } from 'disqus-react';
import axios from '../../utils/axios';
import * as styled from './styled';
import { Code } from '../../components/Code';
import { formatDate } from '../../utils/formate-date';
import { Container } from '../../styles/GlobalStyles';

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
    <Container>
      {postPage.map((post) => (
        <styled.Content key={post.id}>
          <styled.Header>
            <styled.Title>{post.title}</styled.Title>
            <styled.Description>{post.description}</styled.Description>
            <styled.PostInfo>
              <small>
                {`Publicado em ${formatDate(post.created_at)} por ${post.author.authors}`}
              </small>
            </styled.PostInfo>
            <img src={post.cover.url} alt={post.title} />
          </styled.Header>

          <styled.mainContent>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              children={post.content}
              components={{
                code({
                  node, inline, className, children, ...props
                }) {
                  const match = /language-(\w+)/.exec(className || '');
                  return !inline && match ? (
                    <SyntaxHighlighter
                      children={String(children).replace(/\n$/, '')}
                      style={dracula}
                      language={match[1]}
                      PreTag="div"
                      // eslint-disable-next-line react/jsx-props-no-spreading
                      {...props}
                    />
                  ) : (
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    <code className={className} {...props}>
                      <Code code={post.content} />
                    </code>
                  );
                },
              }}
            />
            {/* <DiscussionEmbed title={post.title} slug={post.slug} /> */}
          </styled.mainContent>

        </styled.Content>
      ))}
    </Container>

  );
}

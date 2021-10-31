import React, { useState, useEffect } from 'react';
import axios from '../../utils/axios';
import PostCard from '../../components/PostCard';
import * as styled from './styled';
import { Container } from '../../styles/GlobalStyles';

export default function Home() {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    axios.get('/posts').then((res) => {
      setPost(res.data);
    });
  }, []);

  return (
    <Container>
      <styled.Title>Artigos recentes</styled.Title>
      <PostCard posts={posts} />
    </Container>
  );
}

import React, { useState, useEffect } from 'react';
import axios from '../../utils/axios';
import PostCard from '../../components/PostCard';
import * as styled from './styled';
import { Container } from '../../styles/GlobalStyles';
import { Loading } from '../../components/Loading/Loading';

export default function Home() {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    axios.get('/posts').then((res) => {
      setPost(res.data);
    });
  }, []);

  if (posts.length === 0) {
    return (
      <Loading />
    );
  }

  return (
    <Container>
      <styled.Title>Artigos recentes</styled.Title>
      <PostCard posts={posts} />
    </Container>
  );
}

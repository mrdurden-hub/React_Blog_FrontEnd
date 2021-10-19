import React, { useState, useEffect } from 'react';
import axios from '../../utils/axios';
import PostCard from '../../components/PostCard';
import { Container } from '../../styles/GlobalStyles';

export default function Home() {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    axios.get('/posts').then((res) => {
      setPost(res.data);
      console.log(res);
      console.log(res.data);
    });
  }, []);

  return (
    <Container>
      <PostCard posts={posts} />
    </Container>
  );
}

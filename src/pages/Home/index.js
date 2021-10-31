import React, { useState, useEffect } from 'react';
import axios from '../../utils/axios';
import PostCard from '../../components/PostCard';
import * as styled from './styled';

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
    <styled.PostContainer>
      <styled.H2>Artigos recentes</styled.H2>
      <PostCard posts={posts} />
    </styled.PostContainer>
  );
}

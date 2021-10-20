import React, { useState, useEffect } from 'react';
import axios from '../../utils/axios';
import PostCard from '../../components/PostCard';
import { Container } from '../../styles/GlobalStyles';
import {
  H1, ContentCenter, PostContainer,
} from './styled';

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
      <ContentCenter>
        {/* <img src="https://www.kindpng.com/picc/m/376-3767112_programming-language-transparent-image-all-programming-language-logo.png" alt="" />
        <img src="https://blog.hartman-technology.com/wp-content/uploads/2017/12/languages.png" alt="" /> */}
      </ContentCenter>
      <PostContainer>
        <H1>Posts recentes</H1>
        <PostCard posts={posts} />
      </PostContainer>
    </Container>
  );
}

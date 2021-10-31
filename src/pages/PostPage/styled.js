import styled from 'styled-components';

export const Container = styled.div`
  /* margin-top: 30px;
  margin-left: 80px;
  margin-right: 80px; */
  /* line-height: 1.5em; */


  @media only screen and (max-width: 950px) {
    margin-left: 60px;
    margin-right: 60px;
    Aside {
      display: none;
    }
  }
  @media only screen and (max-width: 620px) {
    margin-left: 20px;
    margin-right: 20px;
  }

  @media only screen and (max-width: 400px) {
  } 
`;

export const Header = styled.header`
  max-width: 70%;
  margin-left: 0;
  margin: auto;

  img {
    max-width: 100%;
    margin-top: 7px;
    margin-bottom: 10px;
    border-radius: 7px;
  }

  .postInfo {
    margin-top: 7px;
    color: gray;
  }

  @media only screen and (max-width: 950px) {
    margin: 0 auto;
    max-width: 800px;
    img {
    max-width: 100%;
    }
  }
`;

export const mainContent = styled.div`
  margin-left: 0;
  max-width: 70%;
  margin: auto;
  line-height: 1.8;

  a {
    color: blue;
  }

  @media only screen and (max-width: 950px) {
    margin: 0 auto;
    max-width: 800px;
  }
  
`;

export const AsideHeader = styled.header``;

export const AuthorInfo = styled.div``;

export const asideImg = styled.div``;

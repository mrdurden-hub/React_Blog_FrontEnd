import styled from 'styled-components';

export const Header = styled.header`
  margin-left: 0;
  margin: auto;
  max-width:70%;

  .postInfo {
    margin-top: 7px;
    color: gray;
  }

  @media only screen and (max-width: 950px) {
    margin: 0 auto;
    max-width: 800px;
  }
`;

export const Content = styled.div`

  p {
    line-height: 2.5rem;
    padding: 10px;
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: 3.9rem;

  }
`;

export const mainContent = styled.div`
  margin-left: 0;
  max-width: 70%;
  margin: auto;

  a {
    color: blue;
  }

  @media only screen and (max-width: 950px) {
    margin: 0 auto;
    max-width: 800px;
  }
`;

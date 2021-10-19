import styled from 'styled-components';

export const H2 = styled.h2`
    margin-top: 15px;
    margin-bottom: 7px;
`;

export const ContentCenter = styled.div`
    background: white;
    max-height: 400px;
    text-align: center;
    img {
      max-width: 35%
    }

`;

export const PostContainer = styled.div`
  max-width: 1000px;
  padding: 10px 15px;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);

  @media only screen and (max-width: 820px) {
    max-width: 700px;
  }

  @media only screen and (max-width: 700px) {
    max-width: 600px;
  }

  @media only screen and (max-width: 620px) {
    max-width: 500px;

  }

  @media only screen and (max-width: 500px) {
    max-width: 400px;
    margin: 0 auto;
  }

  img {
    max-width: 100%;
  }
`;

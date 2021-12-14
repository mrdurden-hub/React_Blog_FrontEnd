import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   *{
    margin: 0;
    outline: none; 
    box-sizing: border-box;
   }

   html {
      font-size: 62.5%;
    }

   body {
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.fonts.family.secoundary};
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.colors.primaryColor};
  }

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.primaryColor};
    }
  
    code {
      color: red;
  }

`;

export const Container = styled.div`
  max-width: 1050px;
  margin: auto;

  @media only screen and (max-width: 1080px) {
    max-width: 900px;
  }

  @media only screen and (max-width: 910px) {
    max-width: 800px;
  }

  @media only screen and (max-width: 820px) {
    max-width: 700px;
  }

  @media only screen and (max-width: 700px) {
    max-width: 600px;
  }

  @media only screen and (max-width: 610px) {
    max-width: 470px;
  }

  @media only screen and (max-width: 480px) {
    max-width: 360px;
    margin: 0 auto;
  }

  @media only screen and (max-width: 380px) {
    max-width: 300px;
    margin: 0 auto;
  }

  img {
    max-width: 100%;
    margin-top: 7px;
    margin-bottom: 10px;
    border-radius: 7px;
  }
`;

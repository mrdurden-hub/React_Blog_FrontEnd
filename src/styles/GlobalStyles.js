import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   *{
    margin: 0;
    outline: none; 
    box-sizing: border-box;
   }

   body {
    font-family: 'Roboto', sans-serif;
    }

    a {
      text-decoration: none;
      color: black;
    }
`;

export const Container = styled.div`
  margin: auto;
`;

import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   *{
    margin: 0 auto;
    padding: 0;
    outline: none;
    box-sizing: border-box;
   }

   body {
    font-family: 'Roboto Mono', monospace;
    }

    a {
      text-decoration: none;
      color: black;
    }
`;

export const Container = styled.div`

`;

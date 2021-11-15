import styled, { css } from 'styled-components';

export const Header = styled.header`
  margin-left: 0;
  margin: auto;
  max-width:70%;

  @media only screen and (max-width: 950px) {
    margin: 0 auto;
    max-width: 800px;
  }
`;

export const PostInfo = styled.div`
  color: gray;
`;

export const Title = styled.div`
${({ theme }) => css`
  font-size: ${theme.fonts.sizes.xlarge};
`}
`;

export const Description = styled.div`
${({ theme }) => css`
  font-size: ${theme.fonts.sizes.medium};
  margin-top: 7px;
`}
`;

export const Content = styled.div`
  p {
    line-height: 2.5rem;
    padding: 10px;
    font-size: ${({ theme }) => theme.fonts.sizes.medium}; 
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: 3.5rem;
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

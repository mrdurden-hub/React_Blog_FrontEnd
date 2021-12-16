import styled from 'styled-components';

export const Content = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 30px;

  @media only screen and (max-width: 1190px) {
    gap:0;
  }

  @media only screen and (max-width: 1080px) {
    gap:20px;
  }

    @media only screen and (max-width: 955px) {
    display: block;
    max-width: 700px;
    margin: 0 auto;
  }

    @media only screen and (max-width: 500px) {
    display: block;
    max-width: 350px;
    margin: 0 auto;
  }
`;

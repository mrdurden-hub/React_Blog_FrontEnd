import styled from 'styled-components';

export const Content = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 30px;

    @media only screen and (max-width: 820px) {
    display: block;
    max-width: 700px;
  }
`;

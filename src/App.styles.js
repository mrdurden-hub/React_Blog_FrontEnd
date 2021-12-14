import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  right: 25%;
  margin-top: 13px;

  @media only screen and (max-width: 920px) {
    right: 20%;
  }

  @media only screen and (max-width: 715px) {
    right: 10%;
    margin-top: 17px;
  }

`;

import styled from 'styled-components';

export const Div = styled.div`
  padding: 15px 0px;
  display: flex;
  justify-content: space-around;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);

  a {
    padding: 7px;
    margin: 0 10px;
    text-decoration: none;
    font-weight: 700;
    color: black;
  }

  img {
    max-width: 90px;
  }
  .logo {
    display: flex;
    justify-content: space-around;
  }
  .social_media {
    li {
      list-style-type: none;
    }
  }
  @media only screen and (max-width: 700px) {
    /* display: block;
    text-align: center; */
    .social_media {
      display: none;
    }
  }
`;

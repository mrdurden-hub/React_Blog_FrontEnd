import styled from 'styled-components';

export const Navbar = styled.div`
  padding: 20px 0px;
  display: flex;
  justify-content: space-around;

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
  .menu {
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

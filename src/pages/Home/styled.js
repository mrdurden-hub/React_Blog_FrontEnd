import styled from 'styled-components';

export const H1 = styled.h1`
    margin-top: 15px;
    margin-bottom: 7px;
`;

export const ContentCenter = styled.div`
  padding: 10px 15px;
    background: white;
    max-height: 400px;
    text-align: center;
    img {
      max-width: 35%
    }

`;

export const Aside = styled.div`
  color: white;
  font-size: 20px;
  margin-right: 30px;
  margin-top: 25px;
  padding: 15px 25px;
  width: 20%;
  float: right;
  background-color: black;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
  text-align: center;

  input {
    margin-top: 7px;
    width: 100%;
    border: none;
    border-radius: 20px;
    padding: 10px 20px;
  }
`;

export const PostContainer = styled.div`
  max-width: 1050px;
  padding: 10px 15px;
  margin-left: 25px;
  /* border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4); */

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

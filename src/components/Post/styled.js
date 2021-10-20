import styled from 'styled-components';

export const Post = styled.div`
  padding: 10px 0px;
  margin-bottom: 10px;
  border-radius: 15px;
  display: flex;
  align-items: flex-start;

  .post_date{
    margin-bottom: 5px;
  }

  .category {
    color: blue;
  }

  .img {
    max-width: 300px;
    padding: 0px 10px;

    
    img {
      max-width: 100%;
      border-radius: 15px;
      opacity: 1;
      transition: 0.3s;
      :hover {
        opacity: 0.6
      }
    }
  }

  @media only screen and (max-width: 800px) {
  display: block;

  .img {
    max-width: 100%;
    padding: 0px 10px;
    
    img {
      max-width: 100%;
      border-radius: 15px;
    }
  }
}
`;

export const postInfo = styled.div`
    margin-top: 12px ;
`;

export const readMoreBtn = styled.div`
  margin-top: 7px;
  background: lightgray;
  padding: 5px 10px;
  max-width: 20%;
  border-radius: 20px;
  margin: 0;
  text-align: center;
  @media only screen and (max-width: 650px) {
    margin: 0 auto;
    max-width: 100%;

  }
`;

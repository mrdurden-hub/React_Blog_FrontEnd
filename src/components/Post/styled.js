import styled from 'styled-components';

export const Post = styled.div`
  padding: 10px 0px;
  margin-bottom: 10px;
  border-radius: 15px;
  display: flex;

  .postInfo {
    margin-top: 12px ;
  }

  .post_date{
    margin-bottom: 5px;
  }

  .img {
    max-width: 400px;
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

  @media only screen and (max-width: 650px) {
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

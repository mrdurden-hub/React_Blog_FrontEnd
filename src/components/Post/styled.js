import styled from 'styled-components';

export const Post = styled.div`
  padding: 10px 20px;
  margin-bottom: 10px;
  border-radius: 15px;
  /* box-shadow: 1px 1px 8px 1px #888888; */
  /* transition: transform 300ms ease-out; */

  :hover {
    border: 1px solid blue;
    /* transform: scale(1.03); */
  }

  .post_date{
    margin-bottom: 5px;
  }

  .category {
    color: blue;
  }

  .img {
    max-width: 100%;
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
`;

export const postInfo = styled.div`
    margin-top: 12px ;
`;

export const readMoreBtn = styled.div`
  margin-top: 7px;
  background: lightgray;
  padding: 5px 10px;
  max-width: 60%;
  border-radius: 20px;
  text-align: center;
  cursor: pointer;
  margin: 7px auto;

  :hover {
        opacity: 0.6
      }
`;

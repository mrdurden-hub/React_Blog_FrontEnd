import styled, { css } from 'styled-components';

export const Post = styled.div`
  padding: 10px 20px;
  margin-bottom: 10px;
  border-radius: 15px;
  height: 470px;
  width: 350px;
  box-shadow: 1px 1px 3px 1px #888888;
  transition: transform 425ms ease-in-out; 

  &:hover {
    border: 1px solid #0088cc;
    transform: scale(1.03);
  }

  .category {
    color: blue;
  }

  .img {
    max-width: 100%;
    
    img {
      max-width: 100%;
      max-height: 250px;
      border-radius: 15px;
      opacity: 1;
      transition: 0.3s;

      &:hover {
        opacity: 0.6
      }

      @media only screen and (max-width: 950px) {
        width: 100%;      
      }
    }
  }

  @media only screen and (max-width: 1190px) {
    width: 325px;
  }

  @media only screen and (max-width: 1080px) {
      width: 280px;
  }

  @media only screen and (max-width: 950px) {
      height: 465px;
      width: 480px;
  }

  @media only screen and (max-width: 955px) {
      display: block;
      margin: 0 auto;
      margin-bottom: 12px;
  }

  @media only screen and (max-width: 640px) {
      display: block;
      margin: 0 auto;
      height: 450px;
      width: 350px;
      margin-bottom: 12px;
  }
`;

export const Description = styled.div`
  ${({ theme }) => css`
      font-size: ${theme.fonts.sizes.small};
      margin-top: 7px;
      margin-bottom: 12px;
      overflow: hidden;
      text-overflow: ellipsis;
      max-height: 70px;
  `}
`;

export const TitlePost = styled.div`
  ${({ theme }) => css`
      font-size: ${theme.fonts.sizes.medium};
  `}
`;

export const PostInfo = styled.div`
  ${({ theme }) => css`
      font-size: ${theme.fonts.sizes.xsmall};
      line-height: ${theme.fonts.sizes.small};
      margin-top: 5px;
  `}
`;

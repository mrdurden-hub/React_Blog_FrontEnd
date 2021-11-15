import styled, { css } from 'styled-components';

export const Post = styled.div`
  padding: 10px 20px;
  margin-bottom: 10px;
  border-radius: 15px;
  max-height: 670px;
  box-shadow: 1px 1px 8px 1px #888888;
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
      border-radius: 15px;
      opacity: 1;
      transition: 0.3s;

      &:hover {
        opacity: 0.6
      }
    }
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

import styled, { css } from 'styled-components';

const showTheme = (visible) => {
  if (visible) {
    return css`
        display: flex;
        justify-content: center;
  `;
  }
  return css`
        display: none;
  `;
};

export const Navbar = styled.div`
  ${({ theme, visible }) => css`
  padding: 20px 0px;
  display: flex;
  justify-content: center;
  margin: 0 auto;

  a {
    padding: 7px;
    margin: 0 10px;
    text-decoration: none;
    font-weight: 700;
    color: ${theme.colors.primaryColor};
    position: relative;
  }

  a:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 0;
      height: 0.2rem;
      background: ${theme.colors.lightBlue};
      transition: all 300ms ease-in-out;
  }

  a:hover::after {
      left: 15%;
      width: 70%;
    }

    Button {
      display: none;
    }

  @media only screen and (max-width: 700px) {
    display: block;

      a:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 0;
      height: 0.2rem;
      background: ${theme.colors.lightBlue};
      transition: all 300ms ease-in-out;
  }

  a:hover::after {
      left: 42%;
      width: 15%;

    }

    
    .menuLinks {
      a {
        ${showTheme(visible)}
      }
    }
    Button {
      display: block;
    }
  }
  `}
`;

export const Button = styled.button`
 ${({ theme }) => css`
  border: none;
  background: none;

  > svg {
    color: ${theme.colors.primaryColor};
  }
  `}
`;

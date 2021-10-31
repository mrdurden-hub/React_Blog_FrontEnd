import styled, { css } from 'styled-components';

export const Button = styled.button`
    ${({ theme }) => css`
        background: ${theme.colors.lightBlue};
        font-size: ${theme.fonts.sizes.medium};
        border-radius: 15px;
        border: none;
        padding: 6px 24px;
        text-align: center;
        width: 100%;
        cursor: pointer;

        a {
            color: white;
        }
    `}
`;

import styled, { css } from 'styled-components';

export const Container = styled.div``;

export const NotFoundMessage = styled.div`
    ${({ theme }) => css`
        color: ${theme.colors.default};
        max-width: 350px;
        text-align: center;
        margin: 0 auto;
    `}
`;

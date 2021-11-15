import styled from 'styled-components';

export const Container = styled.div`
    max-width:1100px;
    margin: 0 auto;
`;

export const AuthorDescription = styled.div`
    max-width: 550px;
    margin: auto;
    margin-top: 10px;
`;

export const AuthorImage = styled.div`
    img {
        max-width: 350px;
        max-height: 390px;
        border-radius:20px;
        border-radius: 50%;
        border: 0.2rem solid white;
        margin-top: 20px;
        -webkit-box-shadow: -1px 5px 12px -1px #000000; 
        box-shadow: -1px 7px 12px -1px #000000;
    }
`;

export const Section = styled.section`
    display: block;
    text-align: center;
    background-color: gray;
    color: white;
    position: relative;
    padding: 25px 25px;
    width: 100%;
    border-radius: 10px;
    margin-bottom: auto;

    p {
    line-height: 2.5rem;
    padding: 10px;
    font-size: ${({ theme }) => theme.fonts.sizes.medium}; 
  }

    h1, h2, h3, h4, h5, h6 {
        line-height: 3.5rem;
    }

    @media only screen and (max-width: 750px) {
        display: block;
        width: 85%;
        margin: auto
    }
`;

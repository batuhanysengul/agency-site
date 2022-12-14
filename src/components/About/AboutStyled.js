import styled from "styled-components";

export const InfoContainer = styled.div`
    color: white;
    background: ${({lightBg}) => (lightBg ? '#cccccc' : '#060606')};

    @media screen and (max-width: 768px){
        padding: 100px 0;
    }
`

export const InfoWrapper = styled.div`
    display: grid;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
    z-index: 1;
    height: 100vh;
    width: 100%;
    max-width: 1100px;
`

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto,1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px){
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`

export const Col1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`

export const Col2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`

export const TopLine = styled.p`
    color: grey;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 500;
    color: ${({lightTxt}) => (lightTxt ? '#f7f8fa' : '#060606')};

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`

export const Subtitle = styled.div`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({darkTxt}) => (darkTxt ? '#060606' : '#f7f8fa')};
`

export const ImgWrap = styled.div`
    max-width: 550px;
    height: 100%;
`
export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;

`


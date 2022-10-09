import styled from "styled-components";

export const HeroContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 94vh;
    position: relative;
    z-index: 1;
`
export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 106%;
    overflow: hidden;
`
export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const HeroContent = styled.div`
    z-index: 5;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HeroH1 = styled.h1`
    font-weight: 500;
    font-size: 50px;
    color: white;	
    text-shadow: 5px 5px 0px rgba(0,0,0,0.5);
`

export const HeroP = styled.p`
    font-size: 25px;
    color: white;
    margin-top: 15px;
`
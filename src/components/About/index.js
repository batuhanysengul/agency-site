import React from "react";
import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Col1,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    Col2,
    ImgWrap,
    Img
} from './AboutStyled'

const About = ({lightTxt,id,img,darkTxt,description,heading,topLine,lightBg,imgStart}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Col1>
                <TextWrapper>
                    <TopLine>{topLine}</TopLine>
                    <Heading lightTxt={lightTxt}>{heading}</Heading>
                    <Subtitle darkTxt={darkTxt}>{description}</Subtitle>
                </TextWrapper>
            </Col1>
            <Col2>
                <ImgWrap>
                    <Img src={img} alt={id} />
                </ImgWrap>
            </Col2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default About;

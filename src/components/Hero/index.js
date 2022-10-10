import React from 'react'
import Video from '../../assets/abstract.mp4'

import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP
} from './HeroStyled'

const Hero = () => {
  return (
    <HeroContainer id='home'>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
            <HeroH1>AGENCY</HeroH1>
            <HeroP>Web Development, done right.</HeroP>
        </HeroContent>
    </HeroContainer>
  )
}

export default Hero
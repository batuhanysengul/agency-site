import React from 'react'
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItem,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './FooterStyled'

import {FaFacebook, FaTwitter, FaYoutube, FaInstagram} from 'react-icons/fa'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItem>
              <FooterLinkTitle>Lorem</FooterLinkTitle>
                <FooterLink to='/'>Contact</FooterLink>
                <FooterLink to='/'>Terms & Service</FooterLink>
                <FooterLink to='/'>Careers</FooterLink>
            </FooterLinkItem>
            <FooterLinkItem>
              <FooterLinkTitle>Ipsum</FooterLinkTitle>
                <FooterLink to='/'>Contact</FooterLink>
                <FooterLink to='/'>Terms & Service</FooterLink>
                <FooterLink to='/'>Careers</FooterLink>
            </FooterLinkItem>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItem>
              <FooterLinkTitle>Dolor</FooterLinkTitle>
                <FooterLink to='/'>Contact</FooterLink>
                <FooterLink to='/'>Terms & Service</FooterLink>
                <FooterLink to='/'>Careers</FooterLink>
            </FooterLinkItem>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/'>AGENCY</SocialLogo>
            <WebsiteRights>Agency © {new Date().getFullYear()} All rights reserved</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href='/' target='_blank'><FaFacebook/></SocialIconLink>
              <SocialIconLink href='/' target='_blank'><FaTwitter/></SocialIconLink>
              <SocialIconLink href='/' target='_blank'><FaYoutube/></SocialIconLink>
              <SocialIconLink href='/' target='_blank'><FaInstagram/></SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  ) 
}

export default Footer
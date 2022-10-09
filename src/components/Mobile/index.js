import React from 'react'
import {
    MobileContainer,
    Icon,
    CloseIcon,
    MobileMenu,
    MobileLink,
    MobileBtnWrap,
    MobileRoutes
} from './MobileStyled'


const Mobile = ({isOpen, toggle}) => {
  return (
    <MobileContainer isOpen={isOpen}>
        <Icon onClick={toggle} >
            <CloseIcon />
        </Icon>
            <MobileMenu>
                <MobileLink to='about'> 
                    About
                </MobileLink>
                <MobileLink to='team'>
                    Team
                </MobileLink>
                <MobileLink to='customers'>
                    Customers
                </MobileLink>
            </MobileMenu>
            <MobileBtnWrap>
                <MobileRoutes to='/signup'>Sign Up</MobileRoutes>
            </MobileBtnWrap>
    </MobileContainer>
  )
}

export default Mobile
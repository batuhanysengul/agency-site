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
                <MobileLink to='about' onClick={toggle}> 
                    About
                </MobileLink>
                <MobileLink to='team' onClick={toggle}>
                    Team
                </MobileLink>
                <MobileLink to='customers' onClick={toggle}>
                    Customers
                </MobileLink>
            </MobileMenu>
            <MobileBtnWrap>
                <MobileRoutes to='/signup' onClick={toggle}>Sign Up</MobileRoutes>
            </MobileBtnWrap>
    </MobileContainer>
  )
}

export default Mobile
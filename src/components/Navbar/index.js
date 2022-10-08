import React from "react";
import {FaBars} from 'react-icons/fa'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    Hamburger,
    NavItems,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavStyled.js'

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
            <NavLogo to='/'>AGENCY</NavLogo>
            <Hamburger>
                <FaBars />
            </Hamburger>
            <NavItems>
            <NavItem>
                <NavLinks to='/about'>About</NavLinks>
                <NavLinks to='/team'>Team</NavLinks>
                <NavLinks to='/services'>Services</NavLinks>
            </NavItem>
            <NavBtn>
                <NavBtnLink to='/signup'>Sign up</NavBtnLink>
            </NavBtn>
            </NavItems>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;

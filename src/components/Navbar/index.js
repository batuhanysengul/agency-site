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

const Navbar = ({toggle}) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
            <NavLogo to='/'>AGENCY</NavLogo>
            <Hamburger onClick={toggle}>
                <FaBars />
            </Hamburger>
            <NavItems>
            <NavItem>
                <NavLinks to='about'>About</NavLinks>
                <NavLinks to='team'>Team</NavLinks>
                <NavLinks to='customers'>Customers</NavLinks>
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

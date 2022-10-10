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
            <NavLogo to='home'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            >AGENCY</NavLogo>
            <Hamburger onClick={toggle}>
                <FaBars />
            </Hamburger>
            <NavItems>
            <NavItem>
                <NavLinks to='about'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'>About</NavLinks>
                <NavLinks to='team'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'>Team</NavLinks>
                <NavLinks to='customers'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'>Customers</NavLinks>
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

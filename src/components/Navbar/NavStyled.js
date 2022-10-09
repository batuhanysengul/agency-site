import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'

export const Nav = styled.nav`
    background: black;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease-in-out;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    max-width: 1100px;
    padding: 0 25px;
`

export const NavLogo = styled(RouterLink)`
    color: white;
    display: flex;
    justify-self: flex-start;
    align-items: center;
    cursor: pointer;
    font-size: 2rem;
    font-weight: 700;
    margin-left: 25px;
    text-decoration: none;
`

export const Hamburger = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 50%); //center
        font-size: 2rem;
        cursor: pointer;
        color: white;
    }
`

export const NavItems = styled.ul`
    display:flex;
    align-items: center;
    list-style: none;
    margin-right: -25px;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
    display: flex;
    align-items: center;
    font-weight: 500;
`

export const NavLinks = styled(ScrollLink)`
    color: white;
    display: flex;
    align-items: center;
    margin: 0 25px;
    
    &.active{
        border-bottom: 3px solid grey;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavBtnLink = styled(RouterLink)`
    border-radius: 10px;
    background: #242324;
    padding: 10px 25px;
    margin-left: 230px;
    color: white;
    font-size: 15px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    white-space: nowrap;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: white;
        color: black;
    }
`
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

export const MobileContainer = styled.aside`
  position: fixed;
  z-index: 500;
  width: 100%;
  height: 100%;
  background: #242324;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")}; //dropdown anim
`;
export const CloseIcon = styled(FaTimes)`
  color: white;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  font-size: 2rem;
  cursor: pointer;
`;

export const MobileMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 80px);
  text-align: center;
  margin-top: 250px;
`;

export const MobileLink = styled(ScrollLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.3s ease-in-out;
  text-decoration: none;
  color: white;
  cursor: pointer;

  &:hover {
    color: #4c4b4c;
    transition: 0.3s ease-in-out;
  }
`;

export const MobileBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const MobileRoutes = styled(RouterLink)`
  border-radius: 50px;
  background: #4c4b4c;
  color: white;
  white-space: nowrap;
  padding: 15px 65px;
  font-size: 15px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: 0.3s ease-in-out;
    background: white;
    color: black;
  }
`;

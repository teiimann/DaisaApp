
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { Bot } from 'lucide-react';
import AIAssistant from './AIAssistant';
import WhiteLogo from "../img/logowhite.png";

const GlobalStyle = createGlobalStyle`
  :root {
    --image-0: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAAAECAYAAAAwCUfLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAySURBVHgB5dJBDQAwCEPRzzINEzQVkzPnQMAFfUl7b1Lj+wEuAnYmx/pDwEKIVfeVxws5kgTiEPh5xgAAAABJRU5ErkJggg==);
    --custom-width: 100vw;
    --design-width: 1440px;
    --ratio: calc(var(--custom-width) / var(--design-width));
  }
`;

const Card2 = styled.div`
  margin: 25px auto;
  width: min(400px, 90vw);
  height: 100px;
  background-color: rgba(26, 26, 26, 0.95);
  backdrop-filter: blur(300.79px);
  box-shadow:
    -1.86px -1.73px 12px -8px rgba(0, 0, 0, 0.15),
    -11.15px -10.39px 48px -12px rgba(0, 0, 0, 0.15),
    inset 1.22px 1.13px 4.62px 0px rgba(255, 255, 255, 0.126),
    inset 2.15px 2px 9.24px 0px rgba(255, 255, 255, 0.126);
  border-radius: 40px;
  padding: 0 clamp(15px, 5vw, 30px);
  display: flex;
  align-items: center;
  position: fixed;
  top: 25px;
  left: 50%;
  transform: translateX(-50%);
  transition: all 0.2s;
  z-index: 1000;

  &:hover {
    transform: translateX(-50%) scale(0.98);
    border: solid 3px #007ffec2;
    box-shadow: 0px 0px 30px 1px rgba(0, 102, 255, 0.3);
    background: rgb(26, 26, 26);
  }

  @media (max-width: 768px) {
    width: min(350px, 85vw);
    height: 80px;
    margin: 15px auto;
    top: 15px;
  }

  @media (max-width: 480px) {
    width: min(300px, 80vw);
    height: 70px;
    padding: 0 15px;
  }
`;

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledLogo = styled.img`
  width: clamp(50px, 8vw, 70px);
  height: clamp(50px, 8vw, 70px);
  object-fit: contain;
  transition: all 0.3s ease;

  ${LogoContainer}:hover & {
    transform: scale(1.1);
    filter: brightness(10);
    transition: 10s;
  }

  @media (max-width: 480px) {
    width: 45px;
    height: 45px;
  }
`;

const NavLink = styled(Link)`
  position: relative;
  text-decoration: none;
  color: ${props => props.$isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.4)'};
  font-size: clamp(14px, 2.5vw, 17px);
  font-family: sans-serif;
  font-weight: 700;
  transition: color 0.3s ease;
  white-space: nowrap;

  &:hover {
    color: #ffffff;
  }

  &::before {
    content: "";
    position: absolute;
    bottom: -6px;
    left: 0;
    width: ${props => props.$isActive ? '100%' : '0%'};
    height: 1px;
    background-color: #007ffec2;
    transition: width 0.3s ease;
    display: block;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: ${props => props.$isActive ? '100%' : '0%'};
    height: 2px;
    background-color: #0080fe;
    transition: width 0.3s ease;
    display: block;
  }

  &:hover::before {
    width: 100%;
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const AIButton = styled.button`
  position: fixed;
  top: 50px;
  right: 25px;
  width: 80px;
  height: 80px;
  background-color: rgba(26, 26, 26, 0.95);
  backdrop-filter: blur(300.79px);
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 1000;
  box-shadow:
    -1.86px -1.73px 12px -8px rgba(0, 0, 0, 0.15),
    -11.15px -10.39px 48px -12px rgba(0, 0, 0, 0.15),
    inset 1.22px 1.13px 4.62px 0px rgba(255, 255, 255, 0.126),
    inset 2.15px 2px 9.24px 0px rgba(255, 255, 255, 0.126);

  &:hover {
    transform: scale(1.1);
    border: solid 2px #007ffec2;
    box-shadow: 0px 0px 20px 1px rgba(0, 102, 255, 0.3);
    background: rgb(26, 26, 26);
  }

  @media (max-width: 768px) {
    top: 35px;
    right: 15px;
    width: 50px;
    height: 50px;
  }

  @media (max-width: 480px) {
    top: 25px;
    right: 10px;
    width: 45px;
    height: 45px;
  }
`;

const AIIcon = styled(Bot)`
  color:rgba(255, 255, 255, 0.76);
  width: 30px;
  height: 30px;
  transition: all 0.3s ease;

  ${AIButton}:hover & {
    color: #0080fe;
    transform: rotate(10deg);
  }

  @media (max-width: 480px) {
    width: 20px;
    height: 20px;
  }
`;

const MainNav = () => {
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <GlobalStyle />
      <Card2>
        <NavbarContainer>
          <NavLink to="/services" $isActive={location.pathname === '/services'}>
            SERVICES
          </NavLink>
          <LogoContainer>
            <Link to="/">
              <StyledLogo src={WhiteLogo} alt="Logo" />
            </Link>
          </LogoContainer>
          <NavLink to="/booking" $isActive={location.pathname === '/booking'}>
            BOOKING
          </NavLink>
        </NavbarContainer>
      </Card2>

      <AIButton onClick={() => setIsAssistantOpen(true)}>
        <AIIcon />
      </AIButton>

      <AIAssistant 
        isOpen={isAssistantOpen} 
        onClose={() => setIsAssistantOpen(false)} 
      />
    </>
  );
};

export default MainNav;
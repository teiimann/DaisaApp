import React from "react";
import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
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
  margin: 25px 36.5%;
  width: 400px;
  height: 100px;
  background-color:rgba(26, 26, 26, 0.95);
  backdrop-filter: blur(300.79px);
  box-shadow:
    -1.86px -1.73px 12px -8px rgba(0, 0, 0, 0.15),
    -11.15px -10.39px 48px -12px rgba(0, 0, 0, 0.15),
    inset 1.22px 1.13px 4.62px 0px rgba(255, 255, 255, 0.126),
    inset 2.15px 2px 9.24px 0px rgba(255, 255, 255, 0.126);
  border-radius: 40px;
  padding: 0 30px;
  display: flex;
  align-items: center;
  position: fixed;
  transition: all 0.2s;
  z-index: 1000;  

  &:hover {
    transform: scale(0.98);
    border: solid 3px #007ffec2;
    box-shadow: 0px 0px 30px 1px rgba(0, 102, 255, 0.3);
background:rgb(26, 26, 26);
  }

  
}
`;

const Navbar = styled.nav`
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
  width: 70px;
  height: 70px;
  object-fit: contain;
  transition: all 0.3s ease;

  ${LogoContainer}:hover & {
    transform: scale(1.1);
    filter: brightness(10);
    transition: 10s;

  }
`;

const NavLink = styled(Link)`
  position: relative;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.4);
  font-size: 17px;
  font-family: sans-serif;
  font-weight: 700;
  transition: color 0.3s ease;

  &:hover {
    color: #ffffff;
  }

  &::before {
  content: "";
  position: absolute;
  bottom: -6px;  /* Изменено для отличия от ::after */
  left: 0;
  width: 0%;
  height: 1px;  /* Тоньше */
  background-color: #007ffec2;  /* Меньше насыщенный оттенок */
  transition: width 0.3s ease;
  display: block;
}

&::after {
  content: "";
  position: absolute;
  bottom: -4px;  /* Для создания эффекта разницы */
  left: 0;
  width: 0%;
  height: 2px;  /* Толще */
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
`;

const MainNav = () => {
  return (
    <>
      <GlobalStyle />
      <Card2>
        <Navbar>
          <NavLink to="/services">SERVICES</NavLink>
          <LogoContainer>
            <Link to="/">
            <StyledLogo src={WhiteLogo} alt="Logo" />
            </Link>
          </LogoContainer>
          <NavLink to="/booking">BOOKING</NavLink>
        </Navbar>
      </Card2>
    </>
  );
};

export default MainNav;

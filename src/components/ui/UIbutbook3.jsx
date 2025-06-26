import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MoveRight } from 'lucide-react'; 

const Button = ({ text, to }) => {
  return (
    <StyledWrapper>
      <Link to={to} className="boton-elegante">{text}
      <MoveRight className="ml-2 h-5 w-5" /></Link>

    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .boton-elegante {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    max-width: 200px;
    height: 65px;
    padding: 10px 20px;
    border: 2px solid #2c2c2c;
    background-color: #1a1a1a;
    color: #ffffff;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 15px;
    transition: all 0.4s ease;
    outline: none;
    position: relative;
    overflow: hidden;
    font-weight: bold;
    text-decoration: none;
  }

  .boton-elegante::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.25) 0%,
      rgba(255, 255, 255, 0) 70%
    );
    transform: scale(0);
    transition: transform 0.5s ease;
  }

  .boton-elegante:hover::after {
    transform: scale(4);
  }

  .boton-elegante:hover {
    border-color: #666666;
    background: #292929;
  }
`;

export default Button;

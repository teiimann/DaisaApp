import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const UIbutbook = ({ text, to }) => {
  return (
    <StyledWrapper>
      <Link to={to} className="learn-more">
        <span className="circle" aria-hidden="true">
          <span className="icon arrow" />
        </span>
        <span className="button-text">{text}</span>
      </Link>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  a.learn-more {
    position: relative;
    display: inline-block;
    cursor: pointer;
    outline: none;
    border: 0;
    vertical-align: middle;
    text-decoration: none;
    background: transparent;
    padding: 0;
    font-size: inherit;
    font-family: inherit;
    width: 12rem;
    height: auto;
  }

  a.learn-more .circle {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: relative;
    display: block;
    margin: 0;
    width: 3rem;
    height: 3rem;
    background: rgb(61, 106, 255);
    border-radius: 1.625rem;
  }

  a.learn-more .circle .icon {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    background: #fff;
  }

  a.learn-more .circle .icon.arrow {
    left: 0.625rem;
    width: 1.125rem;
    height: 0.125rem;
    background: none;
  }

  a.learn-more .circle .icon.arrow::before {
    position: absolute;
    content: "";
    top: -0.29rem;
    right: 0.0625rem;
    width: 0.625rem;
    height: 0.625rem;
    border-top: 0.125rem solid #fff;
    border-right: 0.125rem solid #fff;
    transform: rotate(45deg);
  }

  a.learn-more .button-text {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 0;
    left: 10px;
    right: 0;
    bottom: 0;
    padding: 0.75rem 0;
    margin: 0 0 0 1.85rem;
    color: rgb(146, 146, 146);
    font-weight: 100;
    line-height: 1.6;
    text-align: center;
    text-transform: uppercase;
  }

  a.learn-more:hover .circle {
    width: 100%;
  }

  a.learn-more:hover .circle .icon.arrow {
    background: #fff;
    transform: translate(1rem, 0);
  }

  a.learn-more:hover .button-text {
    color: #fff;
  }
`;

export default UIbutbook;

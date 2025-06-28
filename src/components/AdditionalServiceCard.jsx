// AdditionalServiceCard.jsx
import React from 'react';
import styled from 'styled-components';
import { cn } from '@/lib/utils'; // можешь убрать, если не используешь

function AdditionalServiceCard({ icon, title, description, className, style }) {
  return (
    <CardWrapper className={cn ? cn(className) : className} style={style}>
      <Card>
        <IconWrapper>{icon}</IconWrapper>

        <Content>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Content>

        <GoCorner>
          <GoArrow>→</GoArrow>
        </GoCorner>
      </Card>
    </CardWrapper>
  );
}

export default AdditionalServiceCard;


/* ---------- styled-components ---------- */

const ACCENT = '#3C81F6';      // psyco-green-DEFAULT
const BG     = '#0f1012';      // psyco-black-light

const CardWrapper = styled.div``;

const Card = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  width: 69%;
  height: 190px;
  padding: 32px 24px;
  background-color: ${BG};
  border: 1px solid ${ACCENT}33; /* ~20% прозрачность */
  border-radius: 8px;
  text-decoration: none;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  z-index: 0;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px ${ACCENT}44;
  }

  &::before {
    content: '';
    position: absolute;
    top: -16px;
    right: -16px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: ${ACCENT};
    transform: scale(1);
    transition: transform 0.25s ease-out;
    z-index: -1;
  }

  &:hover::before {
    transform: scale(21);
  }
`;

const IconWrapper = styled.div`
  color: white;
  margin-bottom: 16px;

  svg {
    width: 32px;
    height: 32px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Title = styled.h3`
  margin: 0 0 0.5rem;
  font-size: 1.125rem;
  font-weight: 600;
  color: #fff;
  transition: color 0.3s ease;
`;

const Description = styled.p`
  font-size: 0.875rem;
  line-height: 1.4;
  color: #cdd6d4;
  margin-top: auto;
  transition: color 0.3s ease;
`;

const GoCorner = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 32px;
  height: 32px;
  background: ${ACCENT};
  border-radius: 0 8px 0 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GoArrow = styled.div`
  margin: -4px -4px 0 0;
  color: #fff;
  font-family: 'Courier New', monospace;
`;

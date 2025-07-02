import React, { useState } from "react";
import styled from "styled-components";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Model from "./Model";

const models = 
["/3d/futuristic_building.glb",
  "/3d/warehouse_building.glb",
  "/3d/solar_energy_for_a_logistics_center.glb",
 ];

export default function ModelCarousel() {
  const [current, setCurrent] = useState(0);
  const slides = models.length;

  const next = () => setCurrent((i) => (i + 1) % slides);
  const prev = () => setCurrent((i) => (i - 1 + slides) % slides);

  const currentModel = models[current];

  return (
    <Section>
      <div className="container">
        <Header>
          <h2>
            Professional <span>Visual</span> Solutions
          </h2>
          <p>Explore our 3D preview — rotate with your mouse or touch.</p>
        </Header>

        <Carousel>
        <Model url={currentModel} />

          <NavButton $left onClick={prev}>
            <ChevronLeft size={24} />
          </NavButton>
          <NavButton onClick={next}>
            <ChevronRight size={24} />
          </NavButton>
        </Carousel>

        <Dots>
          {Array.from({ length: slides }).map((_, i) => (
            <Dot key={i} $active={i === current} onClick={() => setCurrent(i)} />
          ))}
        </Dots>
      </div>
    </Section>
  );
}



/* ---------------- styled-components ---------------- */

const ACCENT = "#3C81F6";
const BG = "#0f1012";

const Section = styled.section`
  padding: 6rem 1.5rem;
  background: ${BG};

  .container {
    max-width: 90rem;
    margin: 0 auto;
  }
`;


const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  h2 {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 700;
    color: #fff;
    margin-bottom: 1rem;

    span {
      color: ${ACCENT};
    }
  }

  p {
    max-width: 48rem;
    margin: 0 auto;
    font-size: 1.125rem;
    color: #cbd5e1;
  }
`;

const Carousel = styled.div`
  position: relative;
  max-width: 80rem;
  height: 34rem; /* Увеличено с 24rem до 38rem */
  margin: 0 auto;
  border-radius: 1rem;
  overflow: hidden;
  background: linear-gradient(135deg, ${ACCENT}1a, #004d491a);
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  ${(p) => (p.$left ? "left: 1rem;" : "right: 1rem;")}
  transform: translateY(-50%);
  width: 3rem;
  height: 3rem;
  border: none;
  border-radius: 9999px;
  background: #0008;
  color: #fff;
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: background 0.3s, transform 0.3s;

  &:hover {
    background: ${ACCENT}cc;
    transform: scale(1.1);
  }
`;

const Dots = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`;

const Dot = styled.button`
  width: ${(p) => (p.$active ? "0.9rem" : "0.75rem")};
  height: ${(p) => (p.$active ? "0.9rem" : "0.75rem")};
  border-radius: 50%;
  border: none;
  background: ${(p) => (p.$active ? ACCENT : "#4b5563")};
  cursor: pointer;
  transition: background 0.3s, transform 0.3s;

  &:hover {
    background: #9ca3af;
  }
`;

import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: #f5f5f5;
  position: relative;
  overflow: hidden;
`;

const Info = styled.div`
  width: 50%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  text-align: center;
  padding: 2rem;
  z-index: 1;

  @media (max-width: 768px) {
    width: 100%;
    height: 50vh;
  }
`;

const Box = styled.div`
  width: 50%;
  height: 300px;
  background-color: ${({ bgColor }) => bgColor};
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  transform: ${({ isClicked, direction }) => (isClicked ? `translateX(${direction})` : 'none')};
  z-index: ${({ isClicked }) => (isClicked ? '3' : '2')};
  font-size: 24px;
  font-weight: bold;

  @media (max-width: 768px) {
    width: 100%;
    height: 50vh;
    transform: ${({ isClicked, direction }) => (isClicked ? `translateY(${direction})` : 'none')};
  }
`;

const AnimatedBoxes = () => {
    const [leftBoxClicked, setLeftBoxClicked] = useState(false);
    const [rightBoxClicked, setRightBoxClicked] = useState(false);

    return (
        <Container>
            <Info style={{ left: '0' }}>
                Tiene como objetivo facilitar el monitoreo de los hábitos saludables de los usuarios para mejorar su bienestar general. Para lograrlo, la aplicación recopila y analiza datos relacionados con su actividad física, alimentación y hábitos diarios, y los utiliza para fomentar un estilo de vida saludable y prevenir enfermedades futuras asociadas con malos hábitos de salud. En definitiva, se trata de una herramienta que ayuda a los usuarios a tomar decisiones informadas sobre su salud y a adoptar hábitos más saludables a largo plazo.
            </Info>
            <Info style={{ right: '0' }}>
                Morhealth surge de su objetivo principal que es fomentar la idea de que siempre se puede tener más salud. El nombre sugiere que la salud no es un estado estático, sino que es algo que se puede mejorar continuamente.
            </Info>
            <Box
                bgColor="#223159"
                direction="100%"
                isClicked={leftBoxClicked}
                onClick={() => setLeftBoxClicked(!leftBoxClicked)}
                style={{ left: '0' }}
            >
                ¿Qué es morhealth?
            </Box>
            <Box
                bgColor="#216B91"
                direction="-100%"
                isClicked={rightBoxClicked}
                onClick={() => setRightBoxClicked(!rightBoxClicked)}
                style={{ right: '0' }}
            >
                ¿Por qué morhealth?
            </Box>
        </Container>
    );
};

export default AnimatedBoxes;
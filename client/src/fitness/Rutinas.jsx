import React from 'react';
import styled from 'styled-components';

const Rutinas = () => {
    return (
        <GridContainer>

            <GridItem>IMAGEN</GridItem>

            <GridItem>Básico</GridItem>

            <GridItem>Intermedio</GridItem>

            <GridItem>Avanzado</GridItem>

        </GridContainer>
    )
}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(1, 1fr);
  gap: 1rem;
  width: 100%;
  height: 100vh;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
  }
  
`;

const GridItem = styled.div`
  background-color: #60a5fa;
  color: #ffffff;
  border-radius: 1rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: bold;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
`;



export default Rutinas

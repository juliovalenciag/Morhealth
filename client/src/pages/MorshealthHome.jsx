import React from 'react';
import styled from 'styled-components';

const MorshealthHome = () => {
  return (
    <GridContainer>
      <GridItem>HOLA</GridItem>
      <GridItem>HOLA</GridItem>
      <GridItem>HOLA</GridItem>
      <GridItem>HOLA</GridItem>
    </GridContainer>
  );
}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 1rem;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 1fr);
  }
`;

const GridItem = styled.div`
  background-color: #3C737B;
  color: #ffffff;
  border-radius: 1rem;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: bold;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  height: 100%;
`;

export default MorshealthHome

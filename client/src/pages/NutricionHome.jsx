import React from 'react';
import styled from 'styled-components';

const NutricionHome = () => {
  return (
    <GridContainer>
      <FullHeightGridItem>
        RECETAS
      </FullHeightGridItem>
      <GridItem>Dieta de hoy</GridItem>
      <GridItem>Blog</GridItem>
      
      <SubFullWidthGridItem>DIETAS</SubFullWidthGridItem>
      <Sub2FullWidthGridItem>Popular</Sub2FullWidthGridItem>
      
    </GridContainer>
  )
}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 1rem;
  width: 100%;
  height: 100vh;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(9, 1fr);
  }
`;

const GridItem = styled.div`
  background-color: #3C737B;
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

const FullHeightGridItem = styled(GridItem)`
  grid-row: span 3;

  @media (max-width: 1024px) {
    grid-row: span 2;
  }

  @media (max-width: 640px) {
    grid-row: span 1;
  }
`;

const SubFullWidthGridItem = styled(GridItem)`
  grid-column: span 2;

  @media (max-width: 1024px) {
    grid-column: span 1;
  }

  @media (max-width: 640px) {
    grid-column: span 1;
  }
`;

const Sub2FullWidthGridItem = styled(GridItem)`
  grid-column: span 2;

  @media (max-width: 1024px) {
    grid-column: span 1;
  }

  @media (max-width: 640px) {
    grid-column: span 1;
  }
`;

const FullWidthGridItem = styled(GridItem)`
  grid-column: span 3;

  @media (max-width: 1024px) {
    grid-column: span 2;
  }

  @media (max-width: 640px) {
    grid-column: span 1;
  }
`;




export default NutricionHome

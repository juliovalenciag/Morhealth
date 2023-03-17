import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';





const FitnessHome = () => {
  return (
    <GridContainer>
      <FullHeightGridItem>
        <ImageWrapper>
          <img src="https://images.unsplash.com/photo-1609377375724-8fadc82cd50e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" width='50px' alt="Descripción de la imagen" />
        </ImageWrapper>
      </FullHeightGridItem>
      <Link to='rutinas'>
        <GridItem>

        </GridItem>
      </Link>
      <GridItem>Blog</GridItem>

      <SubFullWidthGridItem>EJERCICIOS</SubFullWidthGridItem>


    </GridContainer>
  )
}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1rem;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding: 1.5rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 1fr);
  }
`;


const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 2rem;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
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
  height: 100%;

  @media (max-width: 1024px) {
    &:nth-child(3) {
      grid-row: span 2;
    }
  }

  @media (max-width: 640px) {
    &:nth-child(3) {
      grid-row: span 1;
    }
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const FullHeightGridItem = styled(GridItem)`
  grid-row: span 2;

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


export default FitnessHome
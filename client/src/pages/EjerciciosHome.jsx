import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from '../styles/variables';
import Progress from './CustomerReview/Progress';

const EjerciciosHome = () => {
    return (
        <GridContainer>
            <FullHeightGridItem>
                <Progress/>
            </FullHeightGridItem>

            <SubFullWidthGridItem>
                <Linkk to='ejercicio'>
                    <ContentWrapper>
                        <h2>Ejercicios</h2>
                    </ContentWrapper>
                    <ImageWrapper>
                        <GridImage src='https://images.unsplash.com/photo-1554284126-aa88f22d8b74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1594&q=80' alt='Planes Alimenticios' />
                    </ImageWrapper>
                </Linkk>
            </SubFullWidthGridItem>

            <SubFullWidthGridItem>
                <Linkk to='rutinas'>
                    <ContentWrapper>
                        <h2>Rutinas</h2>
                    </ContentWrapper>
                    <ImageWrapper>
                        <GridImage src='https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80' alt='Planes Alimenticios' />
                    </ImageWrapper>
                    </Linkk>
            </SubFullWidthGridItem>


            <SubFullWidthGridItem>
                <Linkk to='/morhealth/blog/?cat=fitness'>
                    <ContentWrapper>
                        <h2>Blog de ejercicios</h2>
                    </ContentWrapper>
                    <ImageWrapper>
                        <GridImage src='https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80' alt='Planes Alimenticios' />
                    </ImageWrapper>
                </Linkk>
            </SubFullWidthGridItem>
        </GridContainer>
    );
};

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding: 2rem;
  
  a{
    text-decoration: none;
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 1rem;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 1fr);
    gap: .5rem;
  }
`;

const GridItem = styled.div`
  background-color: transparent;
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
  position: relative;

  &:hover {
    transform: translateY(-.5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.3);
  }

  h2{
    text-decoration: none;
  }
  a{
    text-decoration: none;
  }

  @media (max-width: 1024px) {
    padding: 1rem;
  }
  
  @media (max-width: 640px) {
    padding: .5rem;
    border-radius: 0;
  }
`;

const FullHeightGridItem = styled(GridItem)`
  grid-row: span 3;
  border: none;
  box-shadow: none;
  padding: 0;

  @media (max-width: 1024px) {
    grid-row: span 2;
  }

  @media (max-width: 640px) {
    grid-row: span 1;
  }
`;

const SubFullWidthGridItem = styled(GridItem)`
  grid-column: span 2;
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;

  @media (max-width: 1024px) {
    grid-column: span 1;
  }

  @media (max-width: 640px) {
    grid-column: span 1;
  }
`;


const ContentWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;

`;

const ImageWrapper = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  object-fit: cover;
`;

const GridImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  filter: brightness(0.6);
`;

const Linkk = styled(Link)`
    text-decoration: none;

    h2{
        text-decoration: none;
        color: white;
    }
`;


export default EjerciciosHome;
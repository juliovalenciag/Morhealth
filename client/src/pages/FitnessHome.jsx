import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Stack, Typography } from '@mui/material';
import Icon from './../assets/img/gym.png';
import back from './../fitness/img/back.png'
import cardio from './../fitness/img/cardio.png'
import chest from './../fitness/img/chest.png'
import lowerArms from './../fitness/img/lowerArms.png'
import lowerLegs from './../fitness/img/lowerLegs.png'
import neck from './../fitness/img/neck.png'
import shoulders from './../fitness/img/shoulders.png'
import upperArms from './../fitness/img/upperArms.png'
import upperLegs from './../fitness/img/upperLegs.png'
import waist from './../fitness/img/waist.png'





const FitnessHome = () => {

  const bodyPartImages = {
    back,
    cardio,
    chest,
    'lower arms': lowerArms,
    'lower legs': lowerLegs,
    neck,
    shoulders,
    'upper arms': upperArms,
    'upper legs': upperLegs,
    waist,
  };


  const bodyParts = [
    'back',
    'cardio',
    'chest',
    'lower arms',
    'lower legs',
    'neck',
    'shoulders',
    'upper arms',
    'upper legs',
    'waist',
  ];

  return (
    <GridContainer>
      <FullHeightGridItem>
        
        <GridItemImage />
        
      </FullHeightGridItem>
      <Link to='rutinas'>
        <GridItem>
          Rutinitas
        </GridItem>
      </Link>
      <Link to='/morshealth/ejercicios/ejercicio'>
        <GridItem>
          Blog
        </GridItem>
      </Link>

      <SubFullWidthGridItem>


        <h1>Partes del cuerpo:</h1>

        <BodyGridContainer>
          {bodyParts.map((part, index) => (
            <BodyGridItem key={index}>
              <Link to={`/morshealth/ejercicios/${part}`}>
                <p>{part}</p>
                <img src={bodyPartImages[part]} alt={part} />
              </Link>
            </BodyGridItem>
          ))}
        </BodyGridContainer>

      </SubFullWidthGridItem>


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


`;

const GridItemImage = styled(GridItem)`
  background-image: url("https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: bold;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  width: 100%;  // Asegúrate de que ocupe todo el ancho del GridItem
  height: 100%; // Asegúrate de que ocupe toda la altura del GridItem
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
  padding: 2rem; 
  background-color: #1d363a;

  h1{
    align-text: left;
    font-size: 2rem;
    top: 0;
    left: 0;
  }

@media (max-width: 1024px) {
  grid-column: span 1;
}

@media (max-width: 640px) {
  grid-column: span 1;
}
`;

const BodyGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const BodyGridItem = styled.div`
  background-color: #498C95;
  color: #ffffff;
  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: bold;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  height: 100%;

  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    margin: 0 auto;

    @media (min-width: 640px) {
      width: 80px;
      height: 80px;
    }

    @media (min-width: 1024px) {
      width: 100px;
      height: 100px;
    }
  }
`;



export default FitnessHome
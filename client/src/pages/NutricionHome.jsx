import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';

// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';
import "swiper/css";
import "swiper/css/free-mode";

const NutricionHome = () => {

  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular()
  }, []);

  const getPopular = async () => {


    const check = localStorage.getItem('popular');

    if (check) {
      setPopular(JSON.parse(check));
    } else {

      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=4b6414652eca4d17a1808f6504cc229d&number=8`);
      const data = await api.json();
      console.log(data);

      localStorage.setItem("popular", JSON.stringify(data.recipes));
      setPopular(data.recipes);
    }
  };

  return (
    <GridContainer>
      <FullHeightGridItem>
        <GridItemImage />
      </FullHeightGridItem>
      <Link to='/morshealth/ejercicios/ejercicio'>
        <GridItem>
          Dieta de hoy
        </GridItem>
      </Link>
      <GridItem>Blog</GridItem>

      <SubFullWidthGridItem>


      </SubFullWidthGridItem>


      <SubFullWidthGridItem>


        <Splide
          options={{
            type: 'loop',
            perPage: 1,
            arrows: true,
            pagination: true,
            rewind: true,
            drag: true,
            gap: '1rem',
            padding: { left: 0, right: 0, top: 10, bottom: 20 },
            autoWidth: true,
            autoHeight: true,
            focus: 'center',
            breakpoints: {
              640: {
                perPage: 1,
                gap: 0,
              },
              1000: {
                perPage: 2,
              },
              1900: {
                perPage: 4,
              },
            },
          }}
        >
          {popular.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <Link to={"/morshealth/nutricion/recipe/" + recipe.id}>
                    <img src={recipe.image} alt={recipe.title} />
                  </Link>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>






      </SubFullWidthGridItem>


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

const GridItemImage = styled(GridItem)`
  background-image: url("https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80");
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

const Wrapper = styled.div`
    padding: 0;
    z-index: 5;
    display: flex;
    height: 20rem;
    width: fit-content;
    justify-content: center;
    align-content: center;
    h2{
        
        display:flex;
        justify-content: center;
        align-items: center;
        color: #031728;
    }
    p{
        margin-bottom: 1rem;
    }
    
`;

const Card = styled.div`
  height: 15rem;
  width: 10rem;
  margin: 0.5rem;
  border-radius: 0.5rem;

  img {
    border-radius: 0.5rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Gradient = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`;



export default NutricionHome

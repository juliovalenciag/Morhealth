import React, { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { Link } from 'react-router-dom';

function Popular() {
    const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;
    const [popular, setPopular] = useState([]);

    useEffect(() => {
        getPopular();
    }, []);

    const getPopular = async () => {
        const check = localStorage.getItem('popular');

        if (check) {
            setPopular(JSON.parse(check));
        } else {
            const api = await fetch(
                `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=9`
            );
            const data = await api.json();
            console.log(data);

            localStorage.setItem('popular', JSON.stringify(data.recipes));
            setPopular(data.recipes);
        }
    };

    return (
        <Wrapper>
            <h2>
                Platillos{' '}
                <span>
                    populares
                </span>
            </h2>

            <Splide
                options={{
                    perPage: 4,
                    arrows: true,
                    pagination: false,
                    drag: 'free',
                    gap: '1rem',
                    breakpoints: {
                        960: {
                            perPage: 3,
                        },
                        768: {
                            perPage: 2,
                        },
                        576: {
                            perPage: 1,
                        },
                    },
                }}
            >
                {popular.map((recipe) => {
                    return (
                        <SplideSlide key={recipe.id}>
                            <Card>
                                <Link to={'/morhealth/nutricion/recetas/receta/' + recipe.id}>
                                    <p>{recipe.title}</p>
                                    <img src={recipe.image} alt={recipe.title} />
                                    <Gradient />
                                </Link>
                            </Card>
                        </SplideSlide>
                    );
                })}
            </Splide>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  margin: 0rem;
  padding: .5rem;
  h2 {
    margin-bottom: 0rem;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0rem;
  }
  p {
    margin-bottom: 0rem;
    text-align: center;
  }
  span {
    background: #216b91;
    color: #fff;
    display: inline-block;
    padding: 0.5rem 3rem;
    clip-path: polygon(
      100% 0,
      93% 50%,
      100% 99%,
      0% 100%,
      7% 50%,
      0% 0%
    );
  }
`;

const Card = styled.div`
  min-height: 20rem;
  border-radius: 1rem;
  overflow: hidden;
  position: relative;
  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 0;
    background: rgba(3, 23, 40, 0.75);
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default Popular;


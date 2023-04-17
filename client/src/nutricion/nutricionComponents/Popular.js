import React, { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { Link } from 'react-router-dom';
import { colors } from '../../styles/variables';

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
            <Title>Platillos populares:</Title>

            <Splide
                options={{
                    perPage: 4,
                    arrows: true,
                    pagination: false,
                    drag: 'free',
                    gap: '1rem',
                    height: '300px',
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
                                <Link to={'/nutricion/recipe/' + recipe.id}>
                                    <img src={recipe.image} alt={recipe.title} />
                                    <TitleLink>{recipe.title}</TitleLink>
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
  padding: 1rem;
`;

const Title = styled.h3`
  margin-bottom: 1rem;
  text-align: left;
  font-size: 1.5rem;
`;

const Card = styled.div`
  background-color: #F0F2F3;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;


  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 0.5rem;
    margin-bottom: 0.5rem;
  }

  a {
    text-decoration: none;
    color: #031728;
  }

  h4 {
    margin: 0;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 1.2rem;
  }

  button {
    margin-top: 0.5rem;
    border: none;
    background-color: #0077b6;
    color: #fff;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: #023e8a;
    }
  }

  @media (max-width: 768px) {
    img {
      height: 120px;
    }
  }
`;

const TitleLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: #031728;
  margin: 1rem 0;

  &:hover {
    cursor: pointer;
  }
`;

export default Popular;


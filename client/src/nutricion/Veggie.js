import React, { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from 'react-router-dom';

function Veggie() {

    const [veggie, setVeggie] = useState([]);

    useEffect(() => {
        getVeggie()
    }, []);

    const getVeggie = async () => {

        const check = localStorage.getItem('veggie');

        if (check) {
            setVeggie(JSON.parse(check));
        } else {

            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=4b6414652eca4d17a1808f6504cc229d&number=9&tags=vegetarian`);
            const data = await api.json();

            localStorage.setItem("veggie", JSON.stringify(data.recipes));
            setVeggie(data.recipes);
            console.log(data.recipes);
        }
    };
    return (
        <div>
            <Wrapper>
                <h2 style={{ padding: '2rem 0' }}>Platillos <span style={{ background: '#216B91', color: '#fff', display: 'inline-block', padding: '.5rem 3rem', clipPath: ' polygon(100% 0, 93% 50%, 100% 99%, 0% 100%, 7% 50%, 0% 0%)' }}> vegetarianos</span></h2>
                <p>Desliza para ver más</p>

                <Splide options={{
                    perPage: 3,
                    arrows: false,
                    pagination: false,
                    drag: 'free',
                    gap: '5rem',
                }}>
                    {veggie.map((recipe) => {
                        return (
                            <SplideSlide key={recipe.id}>
                                <Card>
                                    <Link to={"/morshealth/nutricion/recipe/" + recipe.id}>
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
        </div>
    );
}

const Wrapper = styled.div`
    margin: 1.5rem 0rem;
    padding: 1rem;
    h2{
        margin-bottom: 2rem;
        text-align: center;
        display:flex;
        justify-content: center;
        align-items: center;
        margin-top: 0rem;
        color: #031728;
    }
    p{
        margin-bottom: 1rem;
    }
`;

const Card = styled.div`
    min-height: 25rem;
    border-radius: 2rem;
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
    p{
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
    }
`;

const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`;


export default Veggie
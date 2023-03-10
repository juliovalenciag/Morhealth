import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {Link, useParams } from 'react-router-dom';
import Recipe from './Recipe';


function Cuisine() {

    const [cuisine, setCuisine] = useState([]);
    let params = useParams();

    const getCuisine = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=4b6414652eca4d17a1808f6504cc229d&cuisine=${name}`);
        const recipes = await data.json();
        setCuisine(recipes.results);
        console.log(recipes);
    };

    useEffect(() => {
        getCuisine(params.type);
        console.log(params.type);
    },[params.type]);


    return (
        <div>
            <h1 style={{color: '#031728' }}>Platillos más famosos: </h1>
        <Grid>
        
        {cuisine.map((item) => {
            return(
                <Card key={item.id}>
                    <Platillo>{item.name}</Platillo>
                    <Link to={"/morshealth/nutricion/recipe/" + item.id}>
                    <img src={item.image} alt=""/>
                    <h4>{item.title}</h4>
                    </Link>
                </Card>
            )
        })}
    </Grid>
    </div>
  );
}

const Platillo = styled.h1`
    color: #031728;
    display: flex;
    justify-content: center;
`;
const Grid = styled.div`
    margin-top: 5rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 2fr));
    grid-grap: 50px;
    padding: 2rem;
    grid-row-gap: 50px;
    grid-column-gap: 50px;
    justify-content: space-between;
`;

const Card = styled.div`
    img{
        width: 100%;
        border-radius: 2rem;
    }
    a{
        text-decoration: none;
    }
    h4{
        text-align: center;
        padding: 1rem;
        color:#031728;
    }
`;

export default Cuisine;
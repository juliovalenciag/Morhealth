import React from 'react';
import {useEffect, useState} from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

function Searched() {
    const [searchedRecipes, setSearchedRecipes] = useState([]);
    let params = useParams();

    const getSearched = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=4b6414652eca4d17a1808f6504cc229d&query=${name}`);
        const recipes = await data.json();
        setSearchedRecipes(recipes.results);
        console.log(recipes);
    };

    useEffect(() => {
        getSearched(params.search);
    },[params.search]);

  return (
    <Grid>
        {searchedRecipes.map((item) => {
            return(
                <Card key={item.id}>
                     <Link to={"/morshealth/nutricion/recipe/" + item.id}>
                    <img src={item.image} alt='' />
                    <h4>{item.title}</h4>
                    </Link>
                </Card>
            )
        })}
    </Grid>
  );
}

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
        color: #031728;
    }
`;

export default Searched
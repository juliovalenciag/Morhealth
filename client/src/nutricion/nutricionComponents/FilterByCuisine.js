import React, { useState, useEffect } from 'react';
import { FaCaretDown } from 'react-icons/fa';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';

const cuisines = [
  'African',
  'American',
  'British',
  'Cajun',
  'Caribbean',
  'Chinese',
  'Eastern European',
  'European',
  'French',
  'German',
  'Greek',
  'Indian',
  'Irish',
  'Italian',
  'Japanese',
  'Jewish',
  'Korean',
  'Latin American',
  'Mediterranean',
  'Mexican',
  'Middle Eastern',
  'Nordic',
  'Southern',
  'Spanish',
  'Thai',
  'Vietnamese',
];

function FilterByCuisine({ clearSearch, setCuisineFilterResults, setSearchResults }) {

  const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;

  const [selectedCuisine, setSelectedCuisine] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchRecipes = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/complexSearch?cuisine=${selectedCuisine}&apiKey=${apiKey}`
        );
        setRecipes(response.data.results);
        setCuisineFilterResults(response.data.results);
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    };

    if (selectedCuisine) {
      fetchRecipes();
    }
  }, [selectedCuisine, setCuisineFilterResults, setSearchResults]);

  const handleChange = (event) => {
    if (event.target.value === "clear") {
      setSelectedCuisine("");
      setSearchResults([]);
      setCuisineFilterResults([]);
    } else {
      clearSearch();
      setSelectedCuisine(event.target.value);
    }
  };

  return (
    <Container>
      <SelectContainer>
        <StyledSelect value={selectedCuisine} onChange={handleChange}>
          <option value="clear">Limpiar selección</option>
          <option value="">Filtrar por cocina</option>
          {cuisines.map((cuisine) => (
            <option key={cuisine} value={cuisine}>
              {cuisine}
            </option>
          ))}
        </StyledSelect>
        <StyledCaret />
      </SelectContainer>

      {/*
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        <SearchResultsContainer>
          {recipes.length > 0 && (
            <RecipeList>
              {recipes.map((recipe) => (
                <SearchResultCard key={recipe.id} to={`/recipe/${recipe.id}`}>
                  <img src={recipe.image} alt={recipe.title} />
                  <h3>{recipe.title}</h3>
                </SearchResultCard>
              ))}
            </RecipeList>
          )}
          {recipes.length === 0 && selectedCuisine && (
            <p>No se encontraron resultados para la cocina seleccionada</p>
          )}
        </SearchResultsContainer>
      )}

          */}

    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SelectContainer = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 2rem;
`;

const StyledSelect = styled.select`
  padding: 0.5rem 2rem 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 2rem;
  border: 2px solid #031728;
  appearance: none;
  cursor: pointer;
  background-color: transparent;
`;

const StyledCaret = styled(FaCaretDown)`
  position: absolute;
  top: 50%;
  right: 0.8rem;
  transform: translateY(-50%);
  pointer-events: none;
`;

const RecipeList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 2rem;
  margin: 2rem 0;
`;

const Recipe = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #031728;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: translateY(-5px);
  }
`;

const RecipeImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 1rem;
`;

const RecipeTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;
`;

const SearchResultsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin: 2rem 0;
`;

const SearchResultCard = styled.div`
  background-color: #F0F2F3;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 0.5rem;
  }

  h3 {
    margin: 1rem 0;
    color: #031728;
  }

  @media (max-width: 768px) {
    img {
      height: 150px;
    }
  }
`;

export default FilterByCuisine;

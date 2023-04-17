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
          <option value="">Cualquier cocina</option>
          <option value="clear">Limpiar selección</option>
          {cuisines.map((cuisine) => (
            <option key={cuisine} value={cuisine}>
              {cuisine}
            </option>
          ))}
        </StyledSelect>
        <StyledCaret />
      </SelectContainer>
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
`;

const StyledSelect = styled.select`
  padding: 0.5rem 2rem 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 500;
  height: 3rem;
  background-color: rgba(255, 255, 255, 0.6);
  border: 2px solid rgba(63, 63, 63, 0.5);
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  appearance: none;
  cursor: pointer;
  margin-right: 1rem;
`;

const StyledCaret = styled(FaCaretDown)`
  position: absolute;
  top: 50%;
  right: 1.5rem;
  transform: translateY(-50%);
  pointer-events: none;
`;

export default FilterByCuisine;

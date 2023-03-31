import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Popular from './Popular';
import Veggie from './Veggie';
import { searchRecipes } from './../utils/spoonacularApi';
import { Link } from 'react-router-dom';
import FilterByCuisine from './nutricionComponents/FilterByCuisine';

function Recetas() {
  const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;

  const [input, setInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [cuisineFilterResults, setCuisineFilterResults] = useState([]);
  const [query, setQuery] = useState('');
  const [type, setType] = useState('');
  const [recipes, setRecipes] = useState([]);


  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    setCuisineFilterResults([]);
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${input}&number=10`
      );
      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }
      const data = await response.json();
      setSearchResults(data.results);
      setCuisineFilterResults([]);
      //setInput('')
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchRecipesByType = async (type) => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&type=${type}&number=10`
      );
      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }
      const data = await response.json();
      setSearchResults(data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const clearInput = () => {
    setInput('');
  };

  const clearSearch = () => {
    setInput('');
  };

  useEffect(() => {
    if (input === '') {
      setSearchResults([]);
    }
  }, [input]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const results = await searchRecipes(query, type);
    setRecipes(results);
  };

  return (
    <>
    <FormStyle onSubmit={submitHandler}>
      <SearchBar>
        <FaSearch className="search-icon" />
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Buscar un platillo..."
          value={input}
        />
        {input && (
          <FaTimes
            className="clear"
            onClick={clearInput}
          />
        )}
      </SearchBar>
      <FilterSelect
        value={type}
        onChange={(event) => {
          setType(event.target.value);
          if (event.target.value !== "") {
            fetchRecipesByType(event.target.value);
          } else {
            setSearchResults([]);
          }
        }}
      >
        <option value="">Todos</option>
        <option value="main course">Plato principal</option>
        <option value="side dish">Acompañamiento</option>
        <option value="dessert">Postre</option>
        <option value="appetizer">Aperitivo</option>
        <option value="salad">Ensalada</option>
        <option value="bread">Pan</option>
        <option value="breakfast">Desayuno</option>
        <option value="soup">Sopa</option>
        <option value="beverage">Bebida</option>
        <option value="sauce">Salsa</option>
        <option value="drink">Bebida alcohólica</option>
      </FilterSelect>
    </FormStyle>

    <FilterByCuisine
      clearSearch={clearSearch}
      setCuisineFilterResults={setCuisineFilterResults}
      setSearchResults={setSearchResults}
    />

    <SearchResultsContainer>
      {(searchResults.length > 0
        ? searchResults
        : cuisineFilterResults
      ).map((result) => (
        <SearchResultCard key={result.id}>
          <img src={result.image} alt={result.title} />
          <h3>{result.title}</h3>
        </SearchResultCard>
      ))}
    </SearchResultsContainer>

    <Popular />

    <SectionTitle>Platillos Vegetarianos</SectionTitle>
    <Veggie />

  </>

  );
};



const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0rem;
  text-align: center;
`;


const FormStyle = styled.form`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
`;

const SearchBar = styled.div`
  display: flex;
  width: 100%;
  max-width: 800px;
  position: relative;
  justify-content: center;
  align-items: center;
  background-color: #031728;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  margin-right: 1rem;

  .search-icon, .clear {
    position: absolute;
    color: #D9D9D9;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .search-icon {
    left: 1rem;

    &:hover {
      color: #fff;
    }
  }

  .clear {
    right: 1rem;

    &:hover {
      color: #fff;
    }
  }

  input {
    border: none;
    background: transparent;
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border-radius: 1rem;
    outline: none;
    width: 100%;
    transition: all 0.3s ease;

    &::placeholder {
      color: #D9D9D9;
    }

    &:focus::placeholder {
      color: #B1B1B1;
    }
  }

  @media (max-width: 768px) {
    .search-icon {
      left: 1rem;
    }
    .clear {
      right: 1rem;
    }
    input {
      padding: 1rem 2.5rem;
    }
  }
`;

const FilterSelect = styled.select`
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  background-color: #031728;
  color: white;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #235C7F;
  }
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
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-0.5rem);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }

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

export default Recetas;


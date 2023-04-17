import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { searchRecipes } from './../utils/spoonacularApi';
import { Link } from 'react-router-dom';
import { colors } from '../styles/variables';
import FilterByCuisine from './nutricionComponents/FilterByCuisine';


import RecipeTypeCard from './nutricionComponents/RecipeTypeCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaUtensils, FaCookieBite, FaBreadSlice } from 'react-icons/fa';
import { MdFreeBreakfast, MdLocalDrink, MdClear } from 'react-icons/md';
import { TbSalad, TbSoup } from 'react-icons/tb';
import { GiSaucepan } from 'react-icons/gi';
import { RiCake3Fill } from 'react-icons/ri';

import Popular from './nutricionComponents/Popular';


function Recetas() {

  const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;

  const [input, setInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [cuisineFilterResults, setCuisineFilterResults] = useState([]);
  const [query, setQuery] = useState('');
  const [type, setType] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [nutritionData, setNutritionData] = useState({});




  const navigate = useNavigate();

  const fetchNutritionData = async (id) => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/${id}/nutritionWidget.json?apiKey=${apiKey}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }
      const data = await response.json();
      setNutritionData((prevState) => ({
        ...prevState,
        [id]: {
          fat: data.fat,
          protein: data.protein,
          carbs: data.carbs,
        },
      }));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    (searchResults.length > 0
      ? searchResults
      : cuisineFilterResults
    ).forEach((result) => fetchNutritionData(result.id));
  }, [searchResults, cuisineFilterResults]);

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

  const handleClearFilters = () => {
    setCuisineFilterResults([]);
    setType('');
    setSearchResults([]);
  };


  const recipeTypes = [
    { icon: <FaUtensils />, title: 'Principal', value: 'main course' },
    { icon: <MdLocalDrink />, title: 'Bebidas', value: 'beverage' },
    { icon: <MdFreeBreakfast />, title: 'Desayuno', value: 'breakfast' },
    { icon: <TbSalad />, title: 'Ensalada', value: 'salad' },
    { icon: <FaBreadSlice />, title: 'Pan', value: 'bread' },
    { icon: <RiCake3Fill />, title: 'Postre', value: 'dessert' },
    { icon: <TbSoup />, title: 'Sopas', value: 'soup' },
    { icon: <GiSaucepan />, title: 'Salsas', value: 'sauce' },
    { icon: <FaCookieBite />, title: 'Snack', value: 'snack' }
  ];

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
    ],
  };

  const handleTypeClick = (typeValue) => {
    setType(typeValue);
    if (typeValue !== "") {
      fetchRecipesByType(typeValue);
    } else {
      setSearchResults([]);
    }
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

        <Clear onClick={handleClearFilters}>
          <p>Limpiar </p>
          
        </Clear>

        <FilterByCuisine
          clearSearch={clearSearch}
          setCuisineFilterResults={setCuisineFilterResults}
          setSearchResults={setSearchResults}
        />


      </FormStyle>


      <RecipeTypesWrapper>
        {recipeTypes.map((type, index) => (
          <RecipeTypeCard
            key={index}
            icon={type.icon}
            title={type.title}
            onClick={() => handleTypeClick(type.value)}
          />
        ))}
      </RecipeTypesWrapper>
      <SliderContainer>
        <Slider {...settings}>
          {recipeTypes.map((recipeType, index) => (
            <RecipeTypeCard
              key={index}
              icon={recipeType.icon}
              title={recipeType.title}
              value={recipeType.value}
              onClick={() => handleTypeClick(recipeType.value)}
            />
          ))}
        </Slider>
      </SliderContainer>

      <SearchResultsContainer>
        {(searchResults.length > 0
          ? searchResults
          : cuisineFilterResults
        ).map((result) => (
          <SearchResultCard key={result.id}>
            <img src={result.image} alt={result.title} />
            <h3>{result.title}</h3>
            {nutritionData[result.id] && (
              <NutritionInfo>
                <p>Grasas: {nutritionData[result.id].fat}</p>
                <p>Proteínas: {nutritionData[result.id].protein}</p>
                <p>Carbohidratos: {nutritionData[result.id].carbs}</p>
              </NutritionInfo>
            )}
          </SearchResultCard>
        ))}
      </SearchResultsContainer>

      <Popular />

    </>
  );
};

const FormStyle = styled.form`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
`;

const Clear = styled.button`
  display: flex;
  background-color: rgba(255, 255, 255, 0.6);
  border: 2px solid rgba(63, 63, 63, 0.5);
  position: relative;
  height: 3rem;
  justify-content: center; 
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  margin-right: 1rem;

  p{
    font-size: 1rem;
    font-weight: 500;
  }
`;



const SearchBar = styled.div`
  display: flex;
  width: 100%;
  max-width: 800px;
  position: relative;
  height: 3rem;
  justify-content: center; 
  align-items: center;
  background-color: rgba(255, 255, 255, 0.6);
  border: 2px solid rgba(63, 63, 63, 0.5);
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  margin-right: 1rem;

  .search-icon, .clear {
    position: absolute;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .search-icon {
    left: 1rem;

    &:hover {
      color: ${colors.principal};
    }
  }

  .clear {
    right: 1rem;

    &:hover {
      color: ${colors.principal};
    }
  }

  input {
    border: none;
    background: transparent;
    font-size: 1rem;
    padding: 1rem 3rem;
    border-radius: 1rem;
    outline: none;
    width: 100%;
    transition: all 0.3s ease;

    &::placeholder {
      color: ${colors.darkest};
    }

    &:focus::placeholder {
      color: ${colors.darkest};
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

const RecipeTypesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
  margin: 2rem 0;
  padding: 1rem;

  @media (max-width: 768px) {
    display: none; 
  }
`;

const SliderContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: none; 
  height: fit-content;

  @media (max-width: 768px) {
    display: block; 
    height: fit-content;
  }
`;




export const SearchResultsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin: 2rem 0;
`;

export const SearchResultCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
    text-align: center;
  }

  @media (max-width: 768px) {
    img {
      height: 150px;
    }
  }
`;

const FilterWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const NutritionInfo = styled.div`
    font-size: 0.9rem;
    color: #031728;
    margin-top: 0.5rem;

    p {
        margin: 0;
    }
`;

export default Recetas;


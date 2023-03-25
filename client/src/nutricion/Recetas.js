import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Popular from './Popular';
import Veggie from './Veggie';
import CuisineFilter from './nutricionComponents/CuisineFilter';
import FilterByCuisine from './nutricionComponents/FilterByCuisine';

function Recetas() {
    const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;

    const [input, setInput] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [cuisineFilterResults, setCuisineFilterResults] = useState([]);


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

    return (
        <>
            <FormStyle onSubmit={submitHandler}>
                <SearchBar>
                    <FaSearch
                        style={{
                            position: "absolute",
                            left: "1rem",
                            color: "#D9D9D9",
                            display: input ? "none" : "block",
                        }}
                    />
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
                            style={{
                                position: "absolute",
                                right: "1rem",
                                color: "#D9D9D9",
                                cursor: "pointer",
                            }}
                        />
                    )}
                </SearchBar>
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



        {/*<SectionTitle>Platillos Populares</SectionTitle>*/}
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

  svg {
    position: absolute;
    left: 1rem;
    color: #D9D9D9;
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
  }

  @media (max-width: 768px) {
    svg {
      left: 1rem;
    }
    input {
      padding: 2rem 2.5rem;
    }
  }
`;

const FilterSection = styled.section`
  background-color: #f0f2f3;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  width: 100%;
  max-width: 1200px;
`;

const PopularSection = styled.section`
  background-color: #f0f2f3;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  width: 100%;
  max-width: 1200px;
`;

const VeggieSection = styled.section`
  background-color: #f0f2f3;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 1200px;
`;


const ClearButton = styled.button`
  background: transparent;
  border: none;
  position: absolute;
  right: 1rem;
  color: #D9D9D9;
  cursor: pointer;

  &:hover {
    color: #fff;
  }

  @media (max-width: 768px) {
    right: 0.5rem;
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


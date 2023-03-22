import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { fetchData } from '../../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 37px;
  padding: 20px;
`;

const Title = styled(Typography)`
  font-weight: 700;
  font-size: 44px;
  text-align: center;

  @media (max-width: 767px) {
    font-size: 30px;
  }
`;

const SearchBox = styled.div`
  position: relative;
  margin-bottom: 72px;
`;

const Input = styled(TextField)`
  height: 76px;
  width: 1170px;
  background-color: #fff;
  border-radius: 0px;
  border: none;
  border-radius: 0.5px;

  @media (max-width: 767px) {
    width: 350px;
  }

  input {
    font-weight: 700;
  }
`;

const SearchButton = styled(Button)`
  background-color: #031728;
  color: #fff;
  text-transform: none;
  width: 173px;
  height: 56px;
  position: absolute;
  right: 0px;
  font-size: 20px;

  @media (max-width: 767px) {
    width: 80px;
    font-size: 14px;
  }
`;

const BodyPartsBox = styled.div`
  position: relative;
  width: 100%;
  padding: 20px;
`;

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
    const [search, setSearch] = useState('');
    const [bodyParts, setBodyParts] = useState([]);

    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList');
            setBodyParts(['all', ...bodyPartsData]);
        };
        fetchExercisesData();
    }, []);

    const handleSearch = async () => {
        if (search) {
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises');
            const searchedExercises = exercisesData.filter(
                (exercise) => exercise.name.toLowerCase().includes(search)
                    || exercise.target.toLowerCase().includes(search)
                    || exercise.equipment.toLowerCase().includes(search)
                    || exercise.bodyPart.toLowerCase().includes(search),
            );
            window.scrollTo({ top: 800, left: 100, behavior: 'smooth' });
            setSearch('');
            setExercises(searchedExercises);
        }
    };

    return (
        <Wrapper>
            <Title fontWeight={700} mb="49px">
                La fuerza no viene de una capacidad física. <br /> Viene de una voluntad indomable
            </Title>
            <SearchBox>
                <Input
                    value={search}
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                    placeholder="Buscar ejercicios"
                    type="text"
                />
                <SearchButton className="search-btn" onClick={handleSearch} >
                    Buscar
                </SearchButton>
            </SearchBox>
            <BodyPartsBox>
                <HorizontalScrollbar data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart} />
            </BodyPartsBox>
        </Wrapper>
    );

    }
export default SearchExercises

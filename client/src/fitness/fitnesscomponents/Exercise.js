import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { exerciseOptions, fetchData } from '../../utils/fetchData';
import ExerciseCard from './ExerciseCard';
import Loader from './Loader';
import { Pagination } from '@mui/material';

const StyledBox = styled.div`
  margin-top: 50px;
  padding: 20px;

  @media (min-width: 1024px) {
    margin-top: 109px;
  }
`;

const StyledTypography = styled.span`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 46px;

  @media (min-width: 1024px) {
    font-size: 44px;
  }
`;

const StyledStack = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 1024px) {
    gap: 107px;
  }
`;

const StyledPaginationStack = styled.div`
  margin-top: 70px;
  display: flex;
  align-items: center;

  @media (min-width: 1024px) {
    margin-top: 114px;
  }
`;

const Exercises = ({ bodyPart }) => {
    const [exercises, setExercises] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [exercisesPerPage] = useState(6);

    useEffect(() => {
        const fetchExercisesData = async () => {
            let exercisesData = [];

            if (bodyPart === 'all') {
                exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
            } else {
                exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
            }

            setExercises(exercisesData);
        };

        fetchExercisesData();
    }, [bodyPart]);


    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    const currentExercises = exercises && exercises.length ? exercises.slice(indexOfFirstExercise, indexOfLastExercise) : [];

    const paginate = (event, value) => {
        setCurrentPage(value);
        window.scrollTo({ top: 1800, behavior: 'smooth' });
    };

    return (
        <StyledBox id="exercises">
            <StyledTypography>Tus resultados:</StyledTypography>
            <StyledStack>
                {currentExercises.map((exercise, idx) => (
                    <ExerciseCard key={idx} exercise={exercise} />
                ))}
            </StyledStack>
            <StyledPaginationStack>
                {exercises.length > 9 && (
                    <Pagination
                        count={Math.ceil(exercises.length / exercisesPerPage)}
                        page={currentPage}
                        onChange={paginate}
                        color="primary"
                        size="large"
                    />
                )}
            </StyledPaginationStack>
        </StyledBox>
    );
};

export default Exercises;

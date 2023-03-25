import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { fetchExercises } from '../services/exerciseService';

const ExercisesListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ExerciseCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  padding: 20px;
  margin: 10px 0;
  background-color: #f8f8f8;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const ExerciseName = styled.h3`
  margin: 0;
  font-size: 24px;
`;

const ExerciseLink = styled(Link)`
  text-decoration: none;
  font-size: 14px;
  color: #3498db;
  &:hover {
    text-decoration: underline;
  }
`;

const ExercisesList = () => {
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        const fetchExercisesData = async () => {
            const exercisesData = await fetchExercises();
            setExercises(exercisesData);
        };

        fetchExercisesData();
    }, []);

    return (
        <ExercisesListContainer>
            {exercises.map((exercise) => (
                <ExerciseCard key={exercise.id}>
                    <ExerciseName>{exercise.name}</ExerciseName>
                    <ExerciseLink to={`/morshealth/fitness/exercise/${exercise.id}`}>Detalles</ExerciseLink>
                </ExerciseCard>
            ))}
        </ExercisesListContainer>
    );
};

export default ExercisesList;

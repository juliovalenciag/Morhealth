import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { fetchExerciseDetails } from '../services/exerciseService';

const ExerciseDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: 0 auto;
`;

const ExerciseName = styled.h2`
  font-size: 32px;
  margin-bottom: 20px;
`;

const ExerciseDescription = styled.div`
  font-size: 18px;
  line-height: 1.6;
`;

const ExerciseDetails = () => {
    const { id } = useParams();
    const [exercise, setExercise] = useState(null);

    useEffect(() => {
        const fetchExerciseData = async () => {
            const exerciseData = await fetchExerciseDetails(id);
            setExercise(exerciseData);
        };

        fetchExerciseData();
    }, [id]);

    if (!exercise) {
        return <p>Cargando detalles del ejercicio...</p>;
    }

    return (
        <ExerciseDetailsContainer>
            <ExerciseName>{exercise.name}</ExerciseName>
            <ExerciseDescription
                dangerouslySetInnerHTML={{ __html: exercise.description }}
            />
        </ExerciseDetailsContainer>
    );
};

export default ExerciseDetails;

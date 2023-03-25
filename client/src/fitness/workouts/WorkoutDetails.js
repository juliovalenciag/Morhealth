import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import workoutService from '../services/workoutService';

const WorkoutDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WorkoutName = styled.h2`
  margin: 10px;
`;

const WorkoutDetails = () => {
  const { id } = useParams();
  const [workout, setWorkout] = useState(null);

  useEffect(() => {
    const fetchWorkoutData = async () => {
      const workoutData = await workoutService.getById(id);
      setWorkout(workoutData);
    };

    fetchWorkoutData();
  }, [id]);

  if (!workout) {
    return <p>Cargando detalles del workout...</p>;
  }

  return (
    <WorkoutDetailsContainer>
      <WorkoutName>{workout.name}</WorkoutName>
      <p>{workout.description}</p>
    </WorkoutDetailsContainer>
  );
};

export default WorkoutDetails;

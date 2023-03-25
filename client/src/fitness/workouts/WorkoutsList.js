import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import workoutService from '../services/workoutService';

const WorkoutsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WorkoutItem = styled.div`
  background-color: #f5f5f5;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  width: 60%;
`;

const WorkoutsList = () => {
    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        const fetchWorkouts = async () => {
            const data = await workoutService.getAll();
            console.log(data); // Agrega esta línea
            setWorkouts(data);
        };

        fetchWorkouts();
    }, []);

    console.log(workouts);
    return (
        <WorkoutsListContainer>
            <h2>Workouts</h2>
            {workouts.map((workout) => (
                <Link to={`/morshealth/fitness/workouts/${workout.id}`} key={workout.id}>
                    <WorkoutItem>{workout.name}</WorkoutItem>
                </Link>
            ))}
        </WorkoutsListContainer>
    );
};

export default WorkoutsList;

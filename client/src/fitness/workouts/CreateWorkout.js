import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import workoutService from '../services/workoutService';

const CreateWorkoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  margin: 5px;
  padding: 5px;
  width: 60%;
`;

const Button = styled.button`
  margin: 10px;
  padding: 5px;
  width: 60%;
  background-color: #007bff;
  border: none;
  color: white;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: #0056b3;
  }
`;

const CreateWorkout = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const history = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const newWorkout = {
            name,
            description,
        };

        try {
            const createdWorkout = await workoutService.create(newWorkout);
            history.push(`morshealth/fitness/workouts/${createdWorkout.id}`);
        } catch (error) {
            console.error('Error al crear el workout:', error);
        }
    };

    return (
        <CreateWorkoutContainer>
            <h2>Crear Workout</h2>
            <form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nombre del Workout"
                    required
                />
                <Input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Descripción del Workout"
                    required
                />
                <Button type="submit">Crear Workout</Button>
            </form>
        </CreateWorkoutContainer>
    );
};

export default CreateWorkout;

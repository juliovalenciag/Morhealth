import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import nutritionService from '../services/nutririonService';

const CreateNutritionPlanContainer = styled.div`
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

const CreateNutritionPlan = () => {
    const [description, setDescription] = useState('');
    const history = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const newNutritionPlan = {
            description,
        };

        try {
            const createdNutritionPlan = await nutritionService.create(newNutritionPlan);
            history.push(`/nutrition-plans/${createdNutritionPlan.id}`);
        } catch (error) {
            console.error('Error al crear el plan de nutrición:', error);
        }
    };

    return (
        <CreateNutritionPlanContainer>
            <h2>Crear Plan de Nutrición</h2>
            <form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Descripción del Plan de Nutrición"
                    required
                />
                <Button type="submit">Crear Plan de Nutrición</Button>
            </form>
        </CreateNutritionPlanContainer>
    );
};

export default CreateNutritionPlan;

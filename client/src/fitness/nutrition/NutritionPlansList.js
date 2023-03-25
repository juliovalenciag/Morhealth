import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import nutritionService from '../services/nutririonService';

const NutritionPlansListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NutritionPlanItem = styled.div`
  margin: 10px;
  padding: 10px;
  width: 60%;
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 5px;
`;

const NutritionPlansList = () => {
    const [nutritionPlans, setNutritionPlans] = useState([]);

    useEffect(() => {
        const fetchNutritionPlans = async () => {
            try {
                const fetchedNutritionPlans = await nutritionService.getAll();
                setNutritionPlans(fetchedNutritionPlans);
            } catch (error) {
                console.error('Error al obtener los planes de nutrición:', error);
            }
        };

        fetchNutritionPlans();
    }, []);

    return (
        <NutritionPlansListContainer>
            <h2>Planes de Nutrición</h2>
            {nutritionPlans.map((nutritionPlan) => (
                <NutritionPlanItem key={nutritionPlan.id}>
                    <Link to={`/morshealth/fitness/nutrition-plans/${nutritionPlan.id}`}>
                        {nutritionPlan.description}
                    </Link>
                </NutritionPlanItem>
            ))}
        </NutritionPlansListContainer>
    );
};

export default NutritionPlansList;

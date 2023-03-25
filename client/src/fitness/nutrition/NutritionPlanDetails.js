import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import nutritionService from '../services/nutririonService';

const NutritionPlanDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NutritionPlanDetails = () => {
    const { id } = useParams();
    const [nutritionPlan, setNutritionPlan] = useState(null);

    useEffect(() => {
        const fetchNutritionPlan = async () => {
            try {
                const fetchedNutritionPlan = await nutritionService
                    .getById(id);
                setNutritionPlan(fetchedNutritionPlan);
            } catch (error) {
                console.error('Error al obtener el plan de nutrición:', error);
            }
        };

        fetchNutritionPlan();
    }, [id]);

    return (
        <NutritionPlanDetailsContainer>
            {nutritionPlan ? (
                <>
                    <h2>Detalles del Plan de Nutrición</h2>
                    <p>Descripción: {nutritionPlan.description}</p>
                    <p>Fecha de Creación: {nutritionPlan.creation_date}</p>
                    {/* Aquí puedes agregar más detalles sobre el plan de nutrición */}
                </>
            ) : (
                <p>Cargando detalles del plan de nutrición...</p>
            )}
        </NutritionPlanDetailsContainer>
    );
};

export default NutritionPlanDetails;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RecipeVideos from './nutricionComponents/RecipeVideos';
import styled from 'styled-components';

const RecipeDetail = (props) => {
    const [recipeDetails, setRecipeDetails] = useState(null);
    const [video, setVideo] = useState(null);
    const { id } = useParams();
    const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;
    const youtubeApiKey = process.env.REACT_APP_YOUTUBE_API_KEY;

    const [recipeNutrition, setRecipeNutrition] = useState(null);

    const fetchRecipeDetails = async () => {
        try {
            const response = await fetch(
                `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`
            );
            if (!response.ok) {
                throw new Error(`HTTP error ${response.status}`);
            }
            const data = await response.json();
            setRecipeDetails(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const fetchRecipeNutrition = async () => {
        try {
            const response = await fetch(
                `https://api.spoonacular.com/recipes/${id}/nutritionWidget.json?apiKey=${apiKey}`
            );
            if (!response.ok) {
                throw new Error(`HTTP error ${response.status}`);
            }
            const data = await response.json();
            setRecipeNutrition(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchRecipeDetails();
    }, []);

    useEffect(() => {
        if (recipeDetails) {
            fetchRecipeNutrition();
        }
    }, [recipeDetails]);

    return (
        <RecipeContainer>
            {recipeDetails && (
                <>
                    <RecipeTitle>{recipeDetails.title}</RecipeTitle>
                    <RecipeImage src={recipeDetails.image} alt={recipeDetails.title} />
                    <RecipeSummary dangerouslySetInnerHTML={{ __html: recipeDetails.summary }} />
                    <RecipeSectionTitle>Ingredientes:</RecipeSectionTitle>
                    <IngredientsList>
                        {recipeDetails.extendedIngredients.map((ingredient) => (
                            <Ingredient key={ingredient.id}>{ingredient.original}</Ingredient>
                        ))}
                    </IngredientsList>
                    <RecipeSectionTitle>Instrucciones:</RecipeSectionTitle>
                    <InstructionsContainer
                        dangerouslySetInnerHTML={{ __html: recipeDetails.instructions }}
                    />
                    {recipeNutrition ? (
                        <NutritionSection>
                            <NutritionItem>
                                Calorías: {recipeNutrition.calories}
                                
                            </NutritionItem>
                            <NutritionItem>
                                Carbohidratos: {recipeNutrition.carbs}
                            </NutritionItem>
                            <NutritionItem>
                                Grasas: {recipeNutrition.fat}
                            </NutritionItem>
                        </NutritionSection>
                    ) : (
                        <p>Loading nutrition info...</p>
                    )}
                </>
            )}
            <RecipeVideos/>
        </RecipeContainer>
    );
};

const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const RecipeTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  margin: 0 0 20px 0;
`;

const RecipeImage = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
`;

const RecipeSummary = styled.div`
  font-size: 1.2rem;
  text-align: justify;
  margin: 20px 0;
`;

const RecipeSectionTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  margin: 20px 0;
`;

const IngredientsList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  font-size: 1.2rem;
  text-align: left;
`;

const Ingredient = styled.li`
  position: relative;
  padding-left: 20px;
  &:before {
    content: '•';
    position: absolute;
    left: 0;
    top: 0;
    color: #216B91;
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

const InstructionsContainer = styled.div`
  font-size: 1.2rem;
  text-align: justify;
  margin-bottom: 20px;
`;

const NutritionSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 20px;
`;

const NutritionItem = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
`;

export default RecipeDetail;
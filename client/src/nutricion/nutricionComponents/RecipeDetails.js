import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getRecipeDetails } from './../../utils/spoonacularApi';

const RecipeDetails = () => {
    const { id } = useParams();
    const [recipeDetails, setRecipeDetails] = useState(null);

    useEffect(() => {
        const fetchRecipeDetails = async () => {
            const details = await getRecipeDetails(id);
            setRecipeDetails(details);
        };

        fetchRecipeDetails();
    }, [id]);

    if (!recipeDetails) {
        return <div>Loading...</div>;
    }

    const nutrition = recipeDetails.nutrition;
    const caloricBreakdown = nutrition ? nutrition.caloricBreakdown : null;

    return (
        <div>
            <h1>{recipeDetails.title}</h1>
            <img src={recipeDetails.image} alt={recipeDetails.title} />
            <p dangerouslySetInnerHTML={{ __html: recipeDetails.summary }} />
            <h3>Ingredientes</h3>
            <ul>
                {recipeDetails.extendedIngredients.map((ingredient) => (
                    <li key={ingredient.id}>
                        {ingredient.amount} {ingredient.unit} {ingredient.name}
                    </li>
                ))}
            </ul>
            <h3>Instrucciones</h3>
            <ol>
                {recipeDetails.analyzedInstructions[0]?.steps.map((step) => (
                    <li key={step.number}>{step.step}</li>
                ))}
            </ol>
            {caloricBreakdown && (
                <div>
                    <h3>Información nutricional</h3>
                    <ul>
                        <li>Calorías: {caloricBreakdown.percentCarbs.toFixed(2)}%</li>
                        <li>Carbohidratos: {caloricBreakdown.percentFat.toFixed(2)}%</li>
                        <li>Proteínas: {caloricBreakdown.percentProtein.toFixed(2)}%</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default RecipeDetails;

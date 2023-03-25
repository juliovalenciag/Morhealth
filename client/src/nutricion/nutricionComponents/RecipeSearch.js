import React, { useState } from 'react';
import { searchRecipes } from './../../utils/spoonacularApi';
import { Link } from 'react-router-dom';

const RecipeSearch = () => {
    const [query, setQuery] = useState('');
    const [type, setType] = useState('');
    const [recipes, setRecipes] = useState([]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const results = await searchRecipes(query, type);
        setRecipes(results);
    };

    return (
        <div>
            <h1>Buscador de recetas</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Buscar recetas..."
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                />
                <select value={type} onChange={(event) => setType(event.target.value)}>
                    <option value="">Todos</option>
                    <option value="main course">Plato principal</option>
                    <option value="side dish">Acompañamiento</option>
                    <option value="dessert">Postre</option>
                    <option value="appetizer">Aperitivo</option>
                    <option value="salad">Ensalada</option>
                    <option value="bread">Pan</option>
                    <option value="breakfast">Desayuno</option>
                    <option value="soup">Sopa</option>
                    <option value="beverage">Bebida</option>
                    <option value="sauce">Salsa</option>
                    <option value="drink">Bebida alcohólica</option>
                </select>
                <button type="submit">Buscar</button>
            </form>
            <div>
                <h2>Resultados de búsqueda</h2>
                <ul>
                    {recipes.map((recipe) => (
                        <li key={recipe.id}>
                            <Link to={`/morshealth/nutricion/recetilla/${recipe.id}`}>{recipe.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default RecipeSearch;
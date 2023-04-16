import axios from 'axios';

const API_KEY = '3624aae34a4f4fbda5efdecc93a7142a';
const API_BASE_URL = 'https://api.spoonacular.com';

const apiClient = axios.create({
    baseURL: API_BASE_URL,
});

export async function searchRecipes(query, type) {
    const response = await apiClient.get('/recipes/complexSearch', {
        params: {
            apiKey: API_KEY,
            query,
            type,
        },
    });
    return response.data.results;
}

export async function getRecipeDetails(id) {
    const response = await apiClient.get(`/recipes/${id}/information`, {
        params: {
            apiKey: API_KEY,
        },
    });
    return response.data;
}

import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;
const baseUrl = 'https://wger.de/api/v2/nutritionplan';

const apiClient = axios.create({
  baseURL: baseUrl,
  headers: {
    'Authorization': `Token ${apiKey}`
  }
});

const getAll = async () => {
  const response = await apiClient.get('/'); 
  return response.data.results;
};

const create = async (newNutritionPlan) => {
  const response = await apiClient.post('/', newNutritionPlan); 
  return response.data;
};

const update = async (id, updatedNutritionPlan) => {
  const response = await apiClient.put(`/${id}`, updatedNutritionPlan); 
  return response.data;
};

const remove = async (id) => {
  await apiClient.delete(`/${id}`); 
};

export default { getAll, create, update, remove };
import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;
const baseUrl = 'https://wger.de/api/v2/exercise';

const apiClient = axios.create({
  baseURL: baseUrl,
  headers: {
    'Authorization': `Token ${apiKey}`
  }
});

export const fetchExercises = async () => {
  try {
    const response = await apiClient.get('/');
    return response.data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchExerciseDetails = async (id) => {
  try {
    const response = await apiClient.get(`/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getAll = async () => {
  const response = await apiClient.get('/');
  console.log('Ejercicios recibidos:', response.data.results);
  return response.data.results;
};
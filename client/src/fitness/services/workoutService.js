import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;
const baseUrl = "https://wger.de/api/v2/workout";

const apiClient = axios.create({
  baseURL: baseUrl,
  headers: {
    Authorization: `Token ${apiKey}`,
  },
});

export async function fetchWorkouts() {
  const response = await apiClient.get("/"); // Utiliza apiClient en lugar de axios
  return response.data.results;
}

export async function fetchWorkoutDetails(id) {
  const response = await apiClient.get(`/${id}`); // Utiliza apiClient en lugar de axios
  return response.data;
}

export async function createWorkout(workoutData) {
  const response = await apiClient.post("/", workoutData); // Utiliza apiClient en lugar de axios
  return response.data;
}

const getAll = async () => {
  const response = await apiClient.get("/"); // Utiliza apiClient en lugar de axios
  return response.data.results;
};

const getById = async (id) => {
  const response = await apiClient.get(`/${id}`); // Utiliza apiClient en lugar de axios
  return response.data;
};

const create = async (newWorkout) => {
  const response = await apiClient.post("/", newWorkout); // Utiliza apiClient en lugar de axios
  return response.data;
};

export default { getAll, getById, create };

import axios from 'axios';

const api = axios.create({
  baseURL: 'https://wger.de/api/v2',
  headers: {
    'Authorization': 'Token dc753b9c73ca066e9ede7a50b79029189470d250', 
  },

    params: {
        language: 'es'
    }

});

export default api;
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
});

// Fetch all shops
export const fetchShops = async () => {
  try {
    const response = await api.get('/shops');
    return response.data;
  } catch (error) {
    console.error('Error fetching shops:', error);
    return [];
  }
};

export default api;

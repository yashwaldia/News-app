// services/newsApi.js
import axios from 'axios';

const API_KEY = '7df7b908ba9a41da8076f289efbf2d3a'; // Replace with your News API key
const BASE_URL = 'https://newsapi.org/v2';

const newsApi = axios.create({
  baseURL: BASE_URL,
  params: {
    apiKey: API_KEY,
  },
});

export default newsApi;

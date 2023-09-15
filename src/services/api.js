import axios from "axios";

export const api = axios.create({
  // baseURL: 'https://roacktmovies-api.onrender.com'
  baseURL:"http://localhost:3000"
  
});
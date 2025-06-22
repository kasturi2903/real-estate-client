import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://real-estate-api-uz5g.onrender.com/api",
  withCredentials: true,
});

export default apiRequest;
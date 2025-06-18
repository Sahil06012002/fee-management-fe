import axios from "axios"

const API_BASE_URL = "http://localhost:8000/"

const defaultApiOptions = {
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
};
const apiCient = axios.create(defaultApiOptions)


export default apiCient;

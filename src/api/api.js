import axios from "axios";

const BASE_URL = "https://workintech-fe-ecommerce.onrender.com";

export const createApi = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: BASE_URL,
    headers: token ? { Authorization: token } : {},
  });
};

let API = createApi();

const newAPI = () => {
  API = createApi();
};

newAPI();

export { API, newAPI };

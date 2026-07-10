import axios from "axios";

const API = axios.create({
  baseURL: "https://my-portfolio-coral-ten-88.vercel.app/api",
});

export default API;
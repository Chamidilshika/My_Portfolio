import axios from "axios";

const API = axios.create({
  baseURL: "https://my-portfolio-six-kappa-20.vercel.app/api",
});

export default API;
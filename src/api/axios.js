import axios from "axios";
import { BACKEND_URL } from "../config/env";

axios.defaults.baseURL = BACKEND_URL;

export default axios;

// export const authApi = axios.create({
//   baseURL: "http://localhost:8888",
// });

// const addToken = (token) => ({
//   headers: {
//     Authorization: `Bearer ${token}`,
//   },
// });

// export const registerTable = (input) => authApi.post("/auth/register", input);

// export const login = (input) => authApi.post("/auth/login", input);

// export const getMe = async () => {
//   const token = localStorage.getItem("token");
//   if (!token) {
//     throw new Error("No token found");
//   }

//   const response = await authApi.get("/users/getMe", addToken(token));
//   return response.data;
// };

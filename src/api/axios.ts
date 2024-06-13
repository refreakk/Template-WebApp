import axios from "axios";

export const axiosApi = axios.create({
    baseURL: process.env.API_URL
});

axiosApi.interceptors.request.use(
    (config) => {
        config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`
        return config
    }
);
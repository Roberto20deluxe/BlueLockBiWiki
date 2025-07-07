import axios from "axios";
import { useAuth } from "./useAuth";

const api = axios.create({
    baseURL: "http://localhost:3001"
});

api.interceptors.request.use(
    (config) => {
        const accessToken = useAuth.getAccessToken();
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;
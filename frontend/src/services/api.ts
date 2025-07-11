import axios from "axios";
import { useAuth } from "./useAuth";

const api = axios.create({
    baseURL: "http://localhost:3001",
    withCredentials: true // Para enviar cookies automaticamente
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

api.interceptors.response.use(
    (response) => {
        const newAccessToken = response.headers['x-new-access-token'];
        if (newAccessToken) {
            useAuth.setAccessToken(newAccessToken);
        }
        return response;
    },
    async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const refreshResponse = await axios.get("http://localhost:3001/token/verify", {
                    withCredentials: true
                });

                const newAccessToken = refreshResponse.data.accessToken;
                useAuth.setAccessToken(newAccessToken);

                originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
                return api(originalRequest);
            } catch (refreshError) {
                useAuth.logout();
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);

export default api;
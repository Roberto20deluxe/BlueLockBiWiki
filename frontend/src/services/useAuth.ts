const ACCESS_TOKEN_KEY = 'accessToken';

const setAccessToken = (accessToken: string): void => {
    localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
};

const getAccessToken = (): string | null => {
    return localStorage.getItem(ACCESS_TOKEN_KEY);
};

const removeAccessToken = (): void => {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
};

const logout = (): void => {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    window.location.href = '/login';
};

export const useAuth = {
    setAccessToken,
    getAccessToken,
    removeAccessToken,
    logout,
};
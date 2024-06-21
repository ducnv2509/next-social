import axios from 'axios';
import loginApi from './login-api';

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(async (config) => {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  if (user) {
    const accessToken = user.accessToken;
    const refreshTokenValue = user.refreshToken;

    const isTokenExpired = (token: string) => {
      const decoded = JSON.parse(atob(token.split('.')[1]));
      return decoded.exp * 1000 < Date.now();
    };

    if (isTokenExpired(accessToken)) {
      try {
        const newAccessToken = await loginApi.refreshToken(refreshTokenValue);
        localStorage.setItem('user', JSON.stringify(user));
        config.headers['token'] = `${newAccessToken.accessToken}`;
      } catch (error) {
        localStorage.removeItem('user');
        window.location.href = '/login';
        return Promise.reject(error);
      }
    } else {
      config.headers['token'] = `${accessToken}`;
    }
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default axiosInstance;

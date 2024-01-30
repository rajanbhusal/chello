// refreshToken.js

import axios from 'axios';

const refreshToken = async () => {
    const refreshToken = localStorage.getItem('refresh_token');

    try {
        const response = await axios.post(
            "http://127.0.0.1:8000/token/refresh/",
            { refresh: refreshToken }
        );

        const newAccessToken = response.data.access;

        return newAccessToken;
    } catch (error) {
        console.error('Token refresh failed', error);
        // Handle refresh failure (e.g., redirect to login)
        throw error;
    }
};

export default refreshToken;

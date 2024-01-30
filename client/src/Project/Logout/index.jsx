import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import refreshToken from "../../shared/utils/token";

export const Logout = () => {
  const navigate = useNavigate();
  const apiURL = "http://127.0.0.1:8000/logout/";
  const refreshTokenData = {
    refresh_token: localStorage.getItem("refresh_token"),
  };

  useEffect(() => {
    const handleLogout = async () => {
      try {
        const { data } = await axios.post(
          apiURL,
          refreshTokenData,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
            withCredentials: true,
          }
        );

        localStorage.clear();
        axios.defaults.headers.common["Authorization"] = null;
        window.location.href = "/";
      } catch (e) {
        if (e.response && e.response.status === 401) {
          try {
            // Refresh the access token
            const newAccessToken = await refreshToken();

            // Retry the original request after refreshing the token
            const response = await axios.post(
              apiURL,
              refreshTokenData,
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${newAccessToken}`,
                },
                withCredentials: true,
              }
            );

            localStorage.clear();
            axios.defaults.headers.common["Authorization"] = null;
            window.location.href = "/";
          } catch (refreshError) {
            // Handle refresh error (e.g., redirect to login)
            console.error("Failed to refresh token", refreshError);
          }
        } else {
          // Handle other types of errors
          console.error("Logout failed", e);
        }
      }
    };

    // Call the handleLogout function
    handleLogout();
  }, []); // Make sure to pass an empty dependency array to run the effect only once

  return <button>Return Home</button>;
};

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import useAuth from './useAuth';

const useAxiosSecure = (baseURL) => {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  const axiosSecure = axios.create({
    baseURL: baseURL,
  });

  // Interceptor to handle 401 and 403 responses
  axiosSecure.interceptors.response.use(
    (response) => response,
    async (error) => {
      const { status } = error.response;
      console.log(status)
      if (status === 401 || status === 403) {
        // Handle unauthorized or forbidden requests as needed
        // For example, you can log out the user and redirect to the login page
        await handleUnauthorized();
      }
      return Promise.reject(error);
    }
  );

  // Handle unauthorized or forbidden requests
  const handleUnauthorized = async () => {
    // Perform any necessary actions when an unauthorized request is encountered
    // For example, you can log out the user and redirect to the login page
    await logOut();
    navigate('/login');
  };

  useEffect(() => {
    return () => {
      // Clean up the interceptors when the component unmounts
      // axiosSecure.interceptors.request.eject();
      axiosSecure.interceptors.response.eject();
    };
  }, [navigate, axiosSecure]);

  return [axiosSecure];
};

export default useAxiosSecure;

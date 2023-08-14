import axios from 'axios';
import Cookies from 'js-cookie';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';

// Set Authorization header if token cookie is available
const token = Cookies.get('accessToken');
if (token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

// Handle API request and response
const handleRequest = async (requestFunction) => {
  try {
    const response = await requestFunction();
    return response.data;
  } catch (error) {
    // Enhance error handling to provide more context
    throw error;
  }
};

// GET request
export const getApi = async (url) => {
  return handleRequest(() => axios.get(url));
};

// POST request
export const postApi = async (url, data) => {
  return handleRequest(() => axios.post(url, data));
};

// PUT request
export const putApi = async (url, data) => {
  return handleRequest(() => axios.put(url, data));
};

// DELETE request
export const deleteApi = async (url) => {
  return handleRequest(() => axios.delete(url));
};

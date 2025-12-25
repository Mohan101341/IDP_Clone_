import axios from 'axios';
import axiosRetry from 'axios-retry';
import { BASE_URL } from './config';

// Create a new axios instance
const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 10000, // 10 seconds timeout
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// --- Retry Logic ---
// Configure axios-retry to automatically retry failed requests (e.g., network errors).
// This is crucial for mobile apps where network can be unreliable.
axiosRetry(apiClient, {
  retries: 3, // Number of retries
  retryDelay: (retryCount) => {
    console.log(`Retry attempt: ${retryCount}`);
    return retryCount * 1000; // Exponential back-off (1s, 2s, 3s)
  },
  retryCondition: (error) => {
    // Retry on network errors or 5xx server errors
    return axios.isAxiosError(error) && !error.response || (error.response?.status >= 500);
  },
});

// --- Interceptors ---
// Request Interceptor: Runs before each request is sent.
// Use this to automatically attach an authentication token to headers.
apiClient.interceptors.request.use(
  async (config) => {
    // const token = await AsyncStorage.getItem('userToken'); // Example of getting a token
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor: Runs after a response is received.
// Use this to handle global responses, like token refreshing or logging out the user on 401 errors.
apiClient.interceptors.response.use(
  (response) => {
    // The main purpose of this interceptor is to return response.data directly,
    // so you don't have to type `response.data` in every single API call.
    return response.data;
  },
  (error) => {
    // Handle errors globally.
    // For example, if you get a 401 Unauthorized, you might want to redirect to a login screen.
    if (error.response && error.response.status === 401) {
      console.error('Unauthorized Access - Redirecting to login...');
      // NavigationService.navigate('Login'); // Example of redirecting
    }

    // It's important to reject the promise so that the `.catch()` block in your
    // service/component can handle the error for UI feedback.
    return Promise.reject(error);
  }
);

export default apiClient;

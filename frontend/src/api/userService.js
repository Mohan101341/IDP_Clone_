import apiClient from './apiClient';
import { ENDPOINTS } from './config';

/**
 * Handles the login API call.
 * @param {string} email The user's email.
 * @param {string} password The user's password.
 * @returns {Promise<object>} The user data from the backend.
 */
export const login = (email, password) => {
  return apiClient.post(ENDPOINTS.LOGIN, { email, password });
};

/**
 * Handles the signup API call.
 * @param {object} userData The user's registration data.
 * @param {string} userData.fullName
 * @param {string} userData.email
 * @param {string} userData.password
 * @returns {Promise<object>} The success message from the backend.
 */
export const signup = (userData) => {
  return apiClient.post(ENDPOINTS.SIGNUP, userData);
};

/**
 * An example of a GET request.
 * This function is not used in your current backend but serves as a template.
 * @returns {Promise<object>}
 */
export const getUserProfile = () => {
    // Assuming you have a '/users/me' endpoint that requires authentication
    // The request interceptor in apiClient.js would automatically add the auth token.
    // return apiClient.get(ENDPOINTS.GET_USER_PROFILE);
};

// You can create different service files for different parts of your API,
// e.g., `productService.js`, `orderService.js`, etc.

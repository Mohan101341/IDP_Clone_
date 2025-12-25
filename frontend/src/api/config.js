// src/api/config.js

// Use .env value or fallback to local backend
export const BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

// All API endpoints in one place
export const ENDPOINTS = {
  LOGIN: "/login",
  SIGNUP: "/signup",
  CONTACT: "/contact",
  // Add more as needed
};

import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Add token automatically
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

// ===============================
// AUTH
// ===============================

export const registerUser = (data) => api.post("/auth/register", data);

export const loginUser = (data) => api.post("/auth/login", data);

// ===============================
// RESUME
// ===============================

export const createResume = (data) => api.post("/resumes", data);

export const getResumes = () => api.get("/resumes");

export const getResume = (id) => api.get(`/resumes/${id}`);

export const updateResume = (id, data) => api.put(`/resumes/${id}`, data);

export const deleteResume = (id) => api.delete(`/resumes/${id}`);

// ===============================
// AI
// ===============================

export const generateSummary = (data) => api.post("/ai/generate-summary", data);

export default api;

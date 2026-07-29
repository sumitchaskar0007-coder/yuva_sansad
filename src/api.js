import axios from "axios";

// ================= BASE URL =================
const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

// ================= AXIOS INSTANCE =================
const api = axios.create({
  baseURL: API_URL,
  withCredentials: false,
});

// ================= REQUEST INTERCEPTOR =================
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// ================= RESPONSE INTERCEPTOR =================
api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      localStorage.clear();
      window.location.href = "/admin/login";
    }

    return Promise.reject(err);
  }
);

// ================= AUTH =================
export const authAPI = {
  login: (email, password) =>
    api.post("/auth/login", { email, password }),

  verifyToken: () => api.get("/auth/verify"),
};

// ================= GALLERY =================
export const galleryAPI = {
  getAll: () => api.get("/gallery"),
  getById: (id) => api.get(`/gallery/${id}`),

  create: (data) =>
    api.post("/gallery", data, {
      headers: { "Content-Type": "multipart/form-data" },
    }),

  update: (id, data) =>
    api.put(`/gallery/${id}`, data, {
      headers: { "Content-Type": "multipart/form-data" },
    }),

  delete: (id) => api.delete(`/gallery/${id}`),
};

// ================= PROGRAM =================
export const programAPI = {
  getAll: () => api.get("/programs"),
  getById: (id) => api.get(`/programs/${id}`),

  create: (data) =>
    api.post("/programs", data, {
      headers: { "Content-Type": "multipart/form-data" },
    }),

  update: (id, data) =>
    api.put(`/programs/${id}`, data, {
      headers: { "Content-Type": "multipart/form-data" },
    }),

  delete: (id) => api.delete(`/programs/${id}`),
};

// ================= BLOG =================
export const blogAPI = {
  getAll: (params) => api.get("/blogs", { params }),
  getCategories: () => api.get("/blogs/categories"),
  getTags: () => api.get("/blogs/tags"),
  getById: (id) => api.get(`/blogs/${id}`),

  getAllAdmin: () => api.get("/blogs/admin/all"),

  create: (data) =>
    api.post("/blogs", data, {
      headers: { "Content-Type": "multipart/form-data" },
    }),

  update: (id, data) =>
    api.put(`/blogs/${id}`, data, {
      headers: { "Content-Type": "multipart/form-data" },
    }),

  delete: (id) => api.delete(`/blogs/${id}`),
};

export default api;

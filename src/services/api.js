// src/services/api.js

import axios from "axios";

// Set your backend base URL
export const API = axios.create({
  baseURL: "http://localhost:5000/api/customer/v1", // your backend base path
  headers: {
    "Content-Type": "application/json",
  },
});

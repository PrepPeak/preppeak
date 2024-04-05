import axios from "axios";

const BASE_URL = "http://35.158.245.214:8000";
export const request = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

import axios from "axios";

const BASE_URL = "https://api.preppeak.net";
export const request = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

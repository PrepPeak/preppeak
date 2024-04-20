import axios, { AxiosRequestConfig } from "axios";

const BASE_URL = "https://api.preppeak.net";
export const request = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

function useToken(config: AxiosRequestConfig, authMethod: string): any {
  const token =
    localStorage.getItem("token") || localStorage.getItem("showcase-token");
  if (token) {
    if (config && config.headers) {
      config.headers[authMethod] = `Bearer ${token}`;
    }
  }

  return config;
}

request.interceptors.request.use((config: any) =>
  useToken(config, "Authorization"),
);

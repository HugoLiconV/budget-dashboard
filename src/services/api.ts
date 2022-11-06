import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import config from "config";

export async function get<T>(
  url: string,
  options?: AxiosRequestConfig
): Promise<AxiosResponse<T>> {
  const baseUrl = config.apiUrl;
  return axios.get<T>(`${baseUrl}${url}`, options);
}

export async function post(url: string, data: unknown, options?: RequestInit) {
  const baseUrl = config.apiUrl;
  const raw = JSON.stringify(data);

  const response = await fetch(`${baseUrl}${url}`, {
    method: "POST",
    ...options,
    body: raw,
  });

  const content = await response.json();
  const successfulCodes = [200, 201];

  if (!successfulCodes.includes(response.status)) {
    return Promise.reject(content.error);
  }
  return content;
}

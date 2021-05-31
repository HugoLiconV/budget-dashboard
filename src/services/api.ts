import config from "config";

export function get(url: string, options?: RequestInit) {
  const baseUrl = config.apiUrl;
  return fetch(`${baseUrl}${url}`, options).then((r) => {
    if (!r.ok) {
      throw new Error(r.statusText);
    }
    return r.json();
  });
}

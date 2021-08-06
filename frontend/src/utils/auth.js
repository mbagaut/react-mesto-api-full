export const BASE_URL = "https://api.mesto.maratb.nomoredomains.monster";

const handleResponse = (response) => {
  return response.ok
    ? response.json()
    : Promise.reject(response);
};

export const register = (password, email) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "credentials": "include",
    },
    body: JSON.stringify({ password, email }),
  }).then((res) => res.json());
};

export const authorize = (password, email) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "credentials": "include",
    },
    body: JSON.stringify({ password, email }),
  }).then((res) => res.json());
};


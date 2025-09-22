import { baseUrl, handleServerResponse } from "./api";

export const signup = ({ email, password }) => {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(handleServerResponse);
};
// }).then((res) => {
//   if (res.ok) {
//     return res.json().then((data) => {
//       return data;
//     });
//   }
//   return Promise.reject(`Error: ${res.status}`);
//   });
// };

export const signin = ({ email, password }) => {
  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(handleServerResponse);
};

export const existingToken = (token) => {
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(handleServerResponse);
};

export const register = (name, password, email) => {
  return fetch(`${baseUrl}/users/register`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, password, email }),
  })
    .then(handleServerResponse);
};

// Add logic for editProfile

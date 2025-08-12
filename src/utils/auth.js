export const signup = ({ email, password }) => {
  return fetch(`${baseURL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then((res) => {
    if (res.ok) {
      return res.json().then((data) => {
        return data;
      });
    }
    return Promise.reject(`Error: ${res.status}`);
  });
};

export const signin = ({email, password}) => {
    return fetch(`${baseURL}/singup`, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify({email, password})
    })
};

export const existingToken = (token) => {
    return fetch(`${baseURL}/users/me`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
        }.then((res) => {
            return res.ok ? res.json() : Promise.reject(`Error: 
                ${res.status}`); 
        })
    });
};
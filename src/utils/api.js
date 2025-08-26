export const baseUrl = "http://localhost:3001";

const token = localStorage.getItem("jwt");

function handleServerResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
}

function getItems() {
  return fetch(`${baseUrl}/items`, {
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(handleServerResponse)
    // .then((data) => {
    //   console.log("Data Received:", data);
    //   return data;
    // });
}

function addItems({ name = "", imageUrl = "", weather = "" }, token) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, imageUrl, weather }),
  }).then(handleServerResponse);
}

function deleteItems(id, token) {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(handleServerResponse);
}

//Login and Logout calls
const loginUser = async(email, password) => {
  const res = await fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  })
  
  if (!res.ok) {
    throw new Error("Login failed");
  }

  return res.json( {token, user }); 
};


const logoutUser = async () => {
  // If backend has logout endpoint:
  // await fetch(`${BASE_URL}/logout`, { method: "POST" });

  // Usually just remove token on frontend
  localStorage.removeItem("token");
};// Add cardLike and remove card like here

export { getItems, addItems, deleteItems, handleServerResponse, loginUser, logoutUser };
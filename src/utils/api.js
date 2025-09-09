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
const loginUser = async (email, password) => {
  const res = await fetch("http://localhost:3001/signin", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }), // MUST match backend
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || "Login failed");
  }

  return await res.json(); // contains { token }
};

const logoutUser = () => {
  // Just remove the token from localStorage
  localStorage.removeItem("token");
  return Promise.resolve(); // keep API consistent (returns a promise)
};


//register calls
const registerUser = async (name, email, password, avatar) => {
  const res = await fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password, avatar}),
  });
  if (!res.ok) throw new Error("Registration failed");
  return res.json();
};

//edit profile
function updateUserProfile(name, avatar){
  return fetch(`${BASE_URL}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    body: JSON.stringify({ name, avatar }),
  }).then((res) => {
    if (!res.ok) {
      return Promise.reject(`Error: ${res.status}`);
    }
    return res.json();
  });
}


export { getItems, addItems, deleteItems, handleServerResponse, loginUser, registerUser, updateUserProfile, logoutUser };
const baseUrl = "http://localhost:3001";

const handleResponse = (res) => {
  return res.ok ? res.json() : Promise.reject("Error: ${res.status}");
};

function getItems() {
  return fetch(`${baseUrl}/items`, {
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(handleResponse)
    .then((data) => {
      console.log("Data Received:", data);
      return data;
    });
}

function addItems({ name = "", imageUrl = "", weather = "" }) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, imageUrl, weather }),
  }).then(handleResponse);
}

function deleteItems({ name = "", imageUrl = "", weather = "" }) {
  return fetch(`${baseUrl}/items`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, imageUrl, weather }),
  }).then(handleResponse);
}

export { getItems, addItems, deleteItems };

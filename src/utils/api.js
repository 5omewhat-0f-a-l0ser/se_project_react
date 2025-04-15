const baseUrl = "http://localhost:3001";

const handleResponse = (res) => {
    return res.ok ? res.json() : Promise.reject('Error: ${res.status}');
}

function getItems() {
    return fetch(`${baseUrl}/items`, {
        headers: {
            "Content-Type": "application/json",
        },
    }).then(handleResponse);
}

function addItems({ name='', url='', weather='' }) {
    return fetch(`${baseUrl}/items`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, url, weather }),
    }).then(handleResponse);
}


export { getItems, addItems };
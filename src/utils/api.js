class Api {
    
    constructor( {baseUrl, headers} ) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    getItemList() {
        return fetch(`${this._baseUrl}/items`, {
            method: 'GET',
            headers: this._headers
          })
        .then(this.handleResponse);
    }

    addItems({ name='', imageUrl='', weather='' }) {
        return fetch(`${this._baseUrl}/items`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({ name, imageUrl, weather }),
        }).then(this.handleResponse);
    }

    deleteCard() {
        return fetch(`${this._baseUrl}/items/ :id`, {
            method: 'DELETE',
            headers:this._headers,
            }).then(this.handleResponse);
    }

    handleResponse = (res) => {
        return res.ok ? res.json() : Promise.reject('Error: ${res.status}');
    }
}

export default Api;
const API_ROOT = 'http://localhost:3003';

const headers = {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
};

/**
 * Requests a URL, returning a promise
 * @param  {string} localUrl       The URL we want to request
 * @param  {string} method       The request's method
 * @param  {object} [data] The data we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export default function request(localUrl, method, data) {

    let url = API_ROOT + localUrl;
    let options = Object.assign({},
        headers,
        {
            method: method
        });

    if (data) {
        options = Object.assign({},
            options,
            {
                body: JSON.stringify(data)
            });
    }
    return fetch(url, options)
        .then(response => response.json());
}
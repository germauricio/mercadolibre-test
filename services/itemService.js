import axios from '../lib/axios.js';

export const getItems = (query) => 

    new Promise((resolve, reject) => {
    axios.post(`/api/items/${query}`)
        .then((res) => {
            resolve(res.data.results);
        })
        .catch(err => {
            if (err.response && err.response.data && err.response.data.message) {
                reject(new Error(err.response.data.message));
            } else {
                reject(new Error('Error inesperado'));
            }
        });
});



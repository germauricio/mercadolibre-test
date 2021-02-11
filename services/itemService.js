import axios from '../lib/axios.js';

export const getItems = (query) => 
    new Promise((resolve, reject) => {
    axios.get(`/api/items?q=${query}`)
        .then((res) => {
            resolve(res.data.items);
        })
        .catch(err => {
            if (err.response && err.response.data && err.response.data.message) {
                reject(new Error(err.response.data.message));
            } else {
                reject(new Error('Error inesperado'));
            }
        });
});

export const getItem = (productId) => 
    new Promise((resolve, reject) => {
    axios.get(`/api/items/${productId}`)
        .then((res) => {
            resolve(res.data.item);
        })
        .catch(err => {
            if (err.response && err.response.data && err.response.data.message) {
                reject(new Error(err.response.data.message));
            } else {
                reject(new Error('Error inesperado'));
            }
        });
});




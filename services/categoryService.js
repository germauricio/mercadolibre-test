import axios from '../lib/axios.js';

export const getCategories = (categories) =>
    new Promise((resolve, reject) => {
        const category = mode(categories);
        axios.get(`/api/categories/${category}`)
        .then((res) => {
            resolve(res.data);
        })
        .catch((err) => {
            if (err.response && err.response.data && err.response.data.message) {
                reject(new Error(err.response.data.message));
            } else {
                reject(new Error('Error inesperado'));
            }
        });
    });

export const getItemCategory = (itemId) =>
    new Promise((resolve, reject) => {
        axios.get(`/api/categories/item/${itemId}`)
        .then((res) => {
            resolve(res.data);
        })
        .catch((err) => {
            if (err.response && err.response.data && err.response.data.message) {
                reject(new Error(err.response.data.message));
            } else {
                reject(new Error('Error inesperado'));
            }
        });
    });

function mode(array)
{
    if(array.length == 0)
        return null;
    var modeMap = {};
    var maxEl = array[0], maxCount = 1;
    for(var i = 0; i < array.length; i++)
    {
        var el = array[i];
        if(modeMap[el] == null)
            modeMap[el] = 1;
        else
            modeMap[el]++;  
        if(modeMap[el] > maxCount)
        {
            maxEl = el;
            maxCount = modeMap[el];
        }
    }
    return maxEl;
}
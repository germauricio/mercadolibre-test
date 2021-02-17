/* eslint-disable require-jsdoc */
import axios from '../lib/axios.js';

export const getCategories = (categories) =>
  new Promise((resolve, reject) => {
    const category = mostOcurrenciesElement(categories);
    axios.get(`/api/categories/${category}`)
        .then((res) => {
          resolve(res.data.parentCategories);
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
          resolve(res.data.category_id);
        })
        .catch((err) => {
          if (err.response && err.response.data && err.response.data.message) {
            reject(new Error(err.response.data.message));
          } else {
            reject(new Error('Error inesperado'));
          }
        });
  });

function mostOcurrenciesElement(array) {
  if (array.length == 0) {
    return null;
  }
  const modeMap = {};
  let maxEl = array[0]; let maxCount = 1;
  for (let i = 0; i < array.length; i++) {
    const el = array[i];
    if (modeMap[el] == null) {
      modeMap[el] = 1;
    } else {
      modeMap[el]++;
    }
    if (modeMap[el] > maxCount) {
      maxEl = el;
      maxCount = modeMap[el];
    }
  }
  return maxEl;
}

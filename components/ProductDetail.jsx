import React from 'react';

const ProductDetail = ({ item }) => {
    return (
        <div>
            <img height='100px' src={item.picture}></img>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
        </div>
    )
}

export default ProductDetail;
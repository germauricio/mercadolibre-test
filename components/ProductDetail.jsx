import React from 'react';

const ProductDetail = ({ item }) => {
    return (
        <div>
            <img height='100px' src={item.picture}></img>
            <h1>{item.title}</h1>
            <h2>$ {item.price.decimals}</h2>
            <p style={{whiteSpace: 'pre-line'}}>{item.description}</p>
        </div>
        
    )
}

export default ProductDetail;
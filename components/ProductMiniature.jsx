import React from 'react';

const ProductMiniature = ({ item }) => {
    return (
        <div>
            <img height='190px' src={item.thumbnail}></img>
        </div>
    )
}

export default ProductMiniature;
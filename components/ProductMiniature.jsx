import React from 'react';
import {useRouter} from 'next/router';

const ProductMiniature = ({ item }) => {
    const router = useRouter();
    const handleOnClick = () => {
        event.preventDefault();
        router.push(`/items/${item.id}`);
    }

    return (
        <div onClick={handleOnClick}>
            <img height='100px' src={item.thumbnail}></img>
            <p>$ {item.price}</p>
            <p>{item.title}</p>
        </div>
    )
}

export default ProductMiniature;
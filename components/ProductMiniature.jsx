import React from 'react';
import {useRouter} from 'next/router';

const ProductMiniature = ({ item }) => {
    const router = useRouter();
    const handleOnClick = () => {
        event.preventDefault();
        router.push(`/items/${item.id}`);
    }

    return (
        <div className='product' onClick={handleOnClick}>
            <img className='productImage' height='auto' width='100px' src={item.picture}></img>
            <div className='productDesc'>
                <p>{item.title}</p>
                <span className='amount'>$ {item.price.amount}</span>
            </div>
        </div>
    )
}

export default ProductMiniature;
import React from 'react';
import {useRouter} from 'next/router';
import styles from '../styles/ProductMiniature.module.css';

const ProductMiniature = ({ item }) => {
    const router = useRouter();
    const handleOnClick = () => {
        event.preventDefault();
        router.push(`/items/${item.id}`);
    }

    return (
        <div className={styles.product} onClick={handleOnClick}>
            <img className={styles.productImage} height='auto' width='100px' src={item.picture}></img>
            <div className={styles.productDesc}>
                <p>{item.title}</p>
                <span className={styles.amount}>$ {item.price.amount}</span>
            </div>
        </div>
    )
}

export default ProductMiniature;
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
            <img className={styles.productImage} width='100px' src={item.picture}></img>
            <div className={styles.productDesc}>
                <p>{item.title}</p>
                <h4>$ {item.price.decimals}</h4>
            </div>
        </div>
    )
}

export default ProductMiniature;
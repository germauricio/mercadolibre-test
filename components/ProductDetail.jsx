import React from 'react';
import styles from '../styles/ProductDetail.module.css';

const ProductDetail = ({ item }) => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.leftColumn}>
                    <img src={item.picture}></img>
                </div>
                <div className={styles.rightColumn}>
                    <p>{item.condition == 'new' ? 'Nuevo':'Usado'} - {item.sold_quantity} vendidos </p>
                    <h1>{item.title}</h1>
                    <div className={styles.price}>
                        <span className="priceAmount">$ {item.price.amount}</span>
                        {item.price.decimals !== 0 && (
                            <span className={styles.priceDecimals}>{item.price.decimals}</span>
                        )}
                    </div>
                    <div className={styles.button}>
                        <button><strong>Comprar ahora</strong></button>
                    </div>
                </div>
            </div>
            <div>
                <div className={styles.description}>
                    <h3>Descripción del producto</h3>
                    <p>{item.description}</p>
                </div>
            </div>
        </>
    )
}

export default ProductDetail;
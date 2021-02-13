import React from 'react';

const ProductDetail = ({ item }) => {
    return (
        <>
            <div className='productContainer'>
                <div className='leftColumn'>
                    <img src={item.picture}></img>
                </div>
                <div className='rightColumn'>
                    <p>{item.condition == 'new' ? 'Nuevo':'Usado'} - {item.sold_quantity} vendidos </p>
                    <h1>{item.title}</h1>
                    <div className='price'>
                        <span className="priceAmount">$ {item.price.amount}</span>
                        {item.price.decimals !== 0 && (
                            <span className='priceDecimals'>{item.price.decimals}</span>
                        )}
                    </div>
                    <div className='buyButton'>
                        <button><strong>Comprar ahora</strong></button>
                    </div>
                </div>
            </div>
            <div>
                <div className='description'>
                    <h3>Descripción del producto</h3>
                    <p>{item.description}</p>
                </div>
            </div>
        </>
    )
}

export default ProductDetail;
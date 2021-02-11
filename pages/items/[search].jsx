import React, {useState, useEffect, useContext} from 'react';
import {useRouter} from 'next/router'

const ProductDetail = () => {
    const router = useRouter()

    useEffect(() => {
        (async () => {
            if(router.query.productId){
            }
        })()
    }, [router.query.productId]);

    return (
        <div>{router.query.productId}</div>
    )
}

export default ProductDetail;
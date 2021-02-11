import React, {useState, useEffect, useContext} from 'react';
import {useRouter} from 'next/router';
import {getItem} from '../../services/itemService';

const ProductDetail = () => {
    const router = useRouter()
    const [item, setItem] = useState('');
    
    useEffect(() => {
        (async () => {
            if(router.query.productId){
                getItem(router.query.productId)
                    .then((res) => {
                        setItem(res);
                    });
            }
        })()
    }, [router.query.productId]);

    return (
        <div>{router.query.productId}</div>
    )
}

export default ProductDetail;
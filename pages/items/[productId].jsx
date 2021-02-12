import React, {useState, useEffect, useContext} from 'react';
import ProductDetail from '../../components/ProductDetail';
import {useRouter} from 'next/router';
import {getItem} from '../../services/itemService';
import SearchBox from '../../components/SearchBox';

const ProductView = () => {
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
        <div>
            <SearchBox/>
            {item ? (
                <ProductDetail item={item}/>
            ) : (
                <div className="container">
                    <img src="/loading.gif" height="200px" className="loading" alt="loading"/>
                </div>
            )}
        </div>
    )
}

export default ProductView;
import React, {useState, useEffect} from 'react';
import ProductDetail from '../../components/ProductDetail';
import {useRouter} from 'next/router';
import {getItem} from '../../services/itemService';
import SearchBox from '../../components/SearchBox';

const ProductView = () => {
    const router = useRouter()
    const [item, setItem] = useState('');
    const [isLoading, setLoading] = useState(false);
    
    useEffect(() => {
        setLoading(true);
        (async () => {
            if(router.query.productId){
                getItem(router.query.productId)
                    .then((res) => {
                        setItem(res);
                        setLoading(false);
                    });
            }
        })()
    }, [router.query.productId]);

    return (
        <div>
            <SearchBox/>
            {isLoading || item == '' ? (
            <div className="container">
                <img src="/loading.gif" height="200px" className="loading" alt="loading"/>
            </div>
            ) : (
                item ? (
                    <ProductDetail item={item}/>
                ) : (
                    <div className="container">
                        <p>No encontramos resultados para tu busqueda</p>
                    </div>
                )
            )
        }
        </div>
    )
}

export default ProductView;
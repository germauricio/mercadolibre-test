import React, {useState, useEffect} from 'react';
import {useRouter} from 'next/router'
import { getItems } from '../../services/itemService';
import ProductMiniature from '../../components/ProductMiniature';
import SearchBox from '../../components/SearchBox';

const SearchResult = () => {
    const router = useRouter()
    const [items, setItems] = useState('');
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            if(router.query.search){
                setLoading(true);
                getItems(router.query.search)
                    .then((res) => {
                        setItems(res);
                        setLoading(false);
                    });
            }
        })()
    }, [router.query.search]);

    return (
        <div>
        <SearchBox value={router.query.search}/>
        {isLoading ? (
            <div className="container">
                <img src="/loading.gif" height="200px" className="loading" alt="loading"/>
            </div>
            ) : (
                items.length ? (
                    items.map( (item) => {
                        return(
                            <ProductMiniature item={item}/>
                        )
                    }) 
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

export default SearchResult;
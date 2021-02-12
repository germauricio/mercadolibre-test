import React, {useState, useEffect} from 'react';
import {useRouter} from 'next/router'
import { getItems } from '../../services/itemService';
import ProductMiniature from '../../components/ProductMiniature';
import SearchBox from '../../components/SearchBox';

const SearchResult = () => {
    const router = useRouter()
    const [items, setItems] = useState(null);

    useEffect(() => {
        (async () => {
            if(router.query.search){
                getItems(router.query.search)
                    .then((res) => {
                        setItems(res);
                    });
            }
        })()
    }, [router.query.search]);

    return (
        <div>
        <SearchBox value={router.query.search}/>
        {items ? (
            items.map( (item) => {
                return(
                    <ProductMiniature item={item}/>
                    )
                })
        ) : (
            <div className="container">
                <img src="/loading.gif" height="200px" className="loading" alt="loading"/>
            </div>
        )}
        </div>
        )
}

export default SearchResult;
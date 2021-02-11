import React, {useState, useEffect} from 'react';
import {useRouter} from 'next/router'
import { getItems } from '../../services/itemService';
import ProductMiniature from '../../components/ProductMiniature';
import SearchBox from '../../components/SearchBox';

const SearchResult = () => {
    const router = useRouter()
    const [items, setItems] = useState([]);

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
        items && (
            items.map( (item) => {
                return(
                    <div>
                        <SearchBox/>
                        <ProductMiniature item={item}></ProductMiniature>
                    </div>
                )
            })
        )
    )
}

export default SearchResult;
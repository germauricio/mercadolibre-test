import React, {useState, useEffect, useContext} from 'react';
import {useRouter} from 'next/router'
import { getItems } from "../../services/itemService";

const SearchResult = () => {
    const router = useRouter()
    const [items, setItems] = useState([]);
    useEffect(() => {
        (async () => {
            console.log(router.query)
            if(router.query.search){
                getItems(router.query.search)
                    .then((res) => {
                    setItems(res)
                    console.log(res)
                    });
            }
        })()
    }, [router.query.search]);

    return (
        <div>{router.query.productId}</div>
    )
}

export default SearchResult;
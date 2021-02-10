import React, {useState, useEffect, useContext} from 'react';
import {useRouter} from 'next/router'

const SearchResult = () => {
    const router = useRouter()

    useEffect(() => {
        (async () => {
            if(router.query){
                console.log(router.query)
            }
        })()
    }, [router.query.productId]);

    return (
        <div>{router.query.productId}</div>
    )
}

export default SearchResult;
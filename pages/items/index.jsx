import React, {useState, useEffect} from 'react';
import {useRouter} from 'next/router'
import { getItems } from '../../services/itemService';
import { getCategories } from '../../services/categoryService';
import ProductMiniature from '../../components/ProductMiniature';
import SearchBox from '../../components/SearchBox';
import BreadCrumb from '../../components/BreadCrumb';

const SearchResult = () => {
    const router = useRouter()
    const [items, setItems] = useState('');
    const [isLoading, setLoading] = useState(false);
    const [categories, setCategories] = useState('');

    useEffect(() => {
        setLoading(true);
        (async () => {
            if(router.query.search){
                const items = await getItems(router.query.search);
                setItems(items.items);
                if(items){
                    const categoryWithChildren = await getCategories(items.categories);
                    setCategories(categoryWithChildren);
                }
                setLoading(false);
            }
        })()
    }, [router.query.search]);

    return (
        <div>
            <SearchBox value={router.query.search}/>
            { categories && !isLoading && (
                <BreadCrumb categories={categories}/>
            )}
            {isLoading || items === '' ? (
                <div className="container">
                    <img src="/loading.gif" height="200px" className="loading" alt="loading"/>
                </div>
                ) : (
                    items.length && items != null ? (
                        items.map( (item) => {
                            return(
                                <ProductMiniature item={item}/>
                                )
                            }) 
                    ) : (
                        <div className="notFoundContainer">
                            <p>No encontramos resultados para tu busqueda</p>
                        </div>
                    )
                )
            }
        </div>
    )
}

export default SearchResult;
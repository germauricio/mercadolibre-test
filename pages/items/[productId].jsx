import React, {useState, useEffect} from 'react';
import ProductDetail from '../../components/ProductDetail';
import { useRouter } from 'next/router';
import { getItem } from '../../services/itemService';
import SearchBox from '../../components/SearchBox';
import { getCategories, getItemCategory } from "../../services/categoryService";
import BreadCrumb from '../../components/BreadCrumb';

const ProductView = () => {
    const router = useRouter()
    const [item, setItem] = useState('');
    const [categories, setCategories] = useState('');
    const [isLoading, setLoading] = useState(false);
    
    useEffect(() => {
        setLoading(true);
        (async () => {
            if(router.query.productId){
                const item = await getItem(router.query.productId)
                setItem(item);
                const itemCategory = await getItemCategory(item.id);
                const categories = await getCategories([itemCategory]);
                setCategories(categories);
                setLoading(false);
            }
        })()
    }, [router.query.productId]);

    return (
        <div>
            <SearchBox/>
            { categories && !isLoading && (
                <BreadCrumb categories={categories}/>
            )}
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
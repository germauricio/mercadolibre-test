import React from 'react';
import { useRouter } from 'next/router';

const BreadCrumb = ({categories}) => {
    const router = useRouter();

    const handleClick = (category) => {
        router.push(`/items?search=${category}`);
    }

    return (
        <div className="breadCrumb">
            { categories && (
                categories.parentCategories.map( (category, i) => {
                    if(categories.parentCategories[i + 1]) {
                        return <span onClick={() => handleClick(category.name)}>{category.name}  {'>'}  </span>
                    }
                    return <span onClick={() => handleClick(category.name)}>{category.name}</span>
                })
            )}
        </div>
    );
}

export default BreadCrumb;
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
                categories.map( (category, i) => {
                    if(categories[i + 1]) {
                        return <span 
                                onClick={() => handleClick(category.name)}
                                data-testid='category'
                                key={category.name}
                                >
                                    {category.name}  {'>'}  
                                </span>
                    }
                    return <span
                            key={category.name}
                            onClick={() => handleClick(category.name)}>
                                {category.name}
                            </span>
                })
            )}
        </div>
    );
}

export default BreadCrumb;
import React, {useState} from 'react';
import {useRouter} from 'next/router';

const SearchBox = ({value}) => {
    const router = useRouter();
    const [search, setSearch] = useState(value);


    const handleSubmit = async (event) => {
        event.preventDefault();
        if(search){
            router.push('/items?search=' + search);
        }
    }

    const handleClick = async () => {
        router.push('/');
    }

    return (
        <div className='searchBox'>
            <form className='form' onSubmit={handleSubmit}>
                <a onClick={handleClick}><img className='navLogo' height="30px" src="/logo.png"/></a>
                <div className='stretch'>
                    <input 
                    className='navInput' 
                    value={search || ''} 
                    onChange = {(event) => setSearch(event.target.value)} 
                    type="text"
                    data-testid="searchInput"
                    placeholder="Buscar productos, marcas y más..."
                    />
                    <button 
                    className='navButton'
                    type="submit"
                    data-testid="searchButton">
                        <img className="pb-1" height="15px" src="/search.png"></img>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default SearchBox;
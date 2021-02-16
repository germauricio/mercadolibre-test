import React, {useState, useEffect} from 'react';
import {useRouter} from 'next/router';

const SearchBox = ({value}) => {
    const router = useRouter();
    const [search, setSearch] = useState(value);

    useEffect(() => {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.async = true;
        script.src = "//cdn.mouseflow.com/projects/f4db0a84-36b1-41db-9be8-65cae3133c25.js";
        document.body.appendChild(script);
    }, [])

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
                    placeholder="Buscar..."
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
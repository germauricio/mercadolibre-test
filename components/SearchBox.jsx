import React, {useState} from 'react';
import {useRouter} from 'next/router';
import styles from '../styles/SearchBox.module.css';

const SearchBox = ({value}) => {
    const router = useRouter();
    const [search, setSearch] = useState(value);


    const handleSubmit = async (event) => {
        event.preventDefault();
        router.push('/items?search=' + search);
    }

    const handleClick = async () => {
        router.push('/');
    }

    return (
        <div className={styles.searchBox}>
            <form onSubmit={handleSubmit}>
                <a onClick={handleClick}><img className={styles.navLogo} height="30px" src="/logo.png"/></a>
                <input className={styles.navInput} value={search} onChange = {(event) => setSearch(event.target.value)} type="text"></input>
                <button className={styles.navButton} type="submit"><img className="pb-1" height="15px" src="/search.png"></img></button>
            </form>
        </div>
    );
}

export default SearchBox;
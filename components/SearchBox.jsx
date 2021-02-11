import React, {useState} from 'react';
import {useRouter} from 'next/router';
import styles from '../styles/Home.module.css';

const SearchBox = () => {
    const [search, setSearch] = useState('');

    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();
        router.push('/items?search=' + search);
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <input onChange = {(event) => setSearch(event.target.value)} type="text"></input>
                <button type="submit"></button>
            </form>
        </div>
    );
}

export default SearchBox;
import React, {useState} from 'react';
import {useRouter} from 'next/router';
import styles from '../styles/Home.module.css';

const SearchBox = ({value}) => {
    const router = useRouter();
    const [search, setSearch] = useState(value);


    const handleSubmit = async (event) => {
        event.preventDefault();
        router.push('/items?search=' + search);
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <input value={search} onChange = {(event) => setSearch(event.target.value)} type="text"></input>
                <button type="submit">Buscar</button>
            </form>
        </div>
    );
}

export default SearchBox;
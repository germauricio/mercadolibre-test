import styles from '../styles/Home.module.css'
import React, {useState, useEffect, useContext} from 'react';
import {useRouter} from 'next/router'
import { getItems } from '../services/itemService'

export default function SearchBox() {

  const [search, setSearch] = useState('');

  const handleSubmit = async (event) => {
      event.preventDefault();
      console.log(search)
      const items = await getItems(search);
      console.log(items)
  }
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <input onChange = {(event) => setSearch(event.target.value)} type="text"></input>
        <button type="submit"></button>
      </form>
    </div>
  )
}

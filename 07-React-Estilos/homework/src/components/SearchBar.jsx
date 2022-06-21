import React from 'react';
import s from './SearchBar.module.css'
export default function SearchBar({onSearch}) {
  // acá va tu código
  // console.log(document.getElementsByTagName("input"))
  return <div className={s.BarMain}>
    <input className={s.inputTx} type="text" placeholder='Ciudad...'></input><button className={s.btn} onClick={onSearch}>Buscar</button>
  </div>
};
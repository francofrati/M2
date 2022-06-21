import React, { useState } from "react";
import s from './SearchBar.module.css'

export default function SearchBar({onSearch}) {
  const [city,setCity] = useState();
 
  return (
    <form className={s.form} onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      
      setCity('')
    }}>
      <input 
        className={s.Tx}
        id="StateDeTx"
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={()=>setCity(document.getElementById('StateDeTx').value)}
      />
      <input className={s.btn}type="submit" value="Agregar" />
    </form>
  );
}

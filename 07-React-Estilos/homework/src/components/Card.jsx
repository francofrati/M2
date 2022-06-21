import React from 'react';
import s from './Card.module.css'

export default function Card({name,max,min,img,onClose}) {
  // acá va tu código
  return <div className={s.main}>
    <div className={s.imgDiv}>
        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="" />
    </div>
    <div className={s.infoDiv}>  
        <div className={s.botonBox}><button className={s.boton} onClick={onClose}></button></div>
        <div className={s.nameDiv}>{name.toUpperCase()}</div>          
        <div className={s.maxMin1}><label className={s.maxTx}>Maxíma:</label><label className={s.maxT}>{max + '°F'}</label></div>
        <div className={s.maxMin2}><label className={s.minTx}>Miníma:</label><label className={s.minT}>{min + '°F'}</label></div>   
    </div>
  </div>
};
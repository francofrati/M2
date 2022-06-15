import React from 'react';
import s from './Card.module.css'

export default function Card({name,max,min,img,onClose}) {
  // acá va tu código
  return <div className={s.cardContainer}>
    <div className={s.botonNombre}>
      <button onClick={onClose}><span>X</span></button>
      <div>
        <span>{name}</span>
      </div>     
    </div>  
    <div className={s.maxMinImg}>                         
      <div className={s.minMaxDiv}>
        <div className={s.max}>
            <span className={s.maxMinText}>Max</span>
            <span className={s.maxMinText}>{max + '°F'}</span>
        </div>
        <div className={s.min}>
            <span className={s.maxMinText}>Min</span>
            <span className={s.maxMinText}>{min + '°F'}</span>
        </div>
      </div>
      <div className={s.imgDiv}>
        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="" />
      </div>
    </div>
  </div>
};
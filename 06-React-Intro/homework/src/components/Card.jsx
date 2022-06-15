import React from 'react';


export default function Card({name,max,min,onClose,img}) {
  // acá va tu código
  return <div>
    <div>
      <button onClick={onClose}>x</button>
      <div><span>{name}</span></div>     
    </div>                           
    <div><span>Max</span><span>{max}</span></div>
    <div><span>Min</span><span>{min}</span><img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="" /></div>    
  </div>
};
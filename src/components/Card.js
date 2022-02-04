import React from 'react';
import './Card.css';

function Card({title, year, imgRef}) {
  return (
  <div className='movie'>
      <img  src={imgRef} alt='Nothing'/>
      <h3>{title} | {year}</h3>
  </div>
  );
}

export default Card;

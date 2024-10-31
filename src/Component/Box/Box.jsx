// Box.js
import React from 'react';
import './Box.css';

export default function Box({ shoe, addToCart }) {
  return (
    <div className="box">
      <img src={shoe.image} alt={shoe.name} className="boxImg" />
      <p className="boxTxt">
        <span>{shoe.name}</span> - ${shoe.price}
      </p>
      <button id='btn' onClick={() => addToCart(shoe)}>Add To Cart</button>
    </div>
  );
}

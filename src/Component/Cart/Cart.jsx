// Cart.js
import React from 'react';
import './Cart.css';

export default function Cart({ shoe, updateQuantity }) {
  return (
    <div className='hlo'>
      <div className="container">
        <img src={shoe.image} alt={shoe.name} className="imgcontainer" />
        <p className="containertext">
          <span>{shoe.name}</span> - ${shoe.price}
        </p>
        <div className="quantity-buttons">
          <button className='lo' onClick={() => updateQuantity(shoe.id, -1)}>-</button>
          {shoe.quantity}
          <button className='lo' onClick={() => updateQuantity(shoe.id, 1)}>+</button>
        </div>
      </div>
    </div>
  );
}

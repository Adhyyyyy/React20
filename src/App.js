
import React, { useState } from 'react';
import './App.css';
import Box from './Component/Box/Box';
import Cart from './Component/Cart/Cart';
import Navbar from './Component/Navbar/Navbar';

const shoes = [
  { id: 1, name: "Air Max 90", price: 120, image: "/download (1).jpeg" },
  { id: 2, name: "Classic Leather", price: 85, image: "/download (1).jpeg" },
  { id: 3, name: "Ultraboost", price: 180, image: "/download (1).jpeg" },
  { id: 4, name: "Chuck Taylor All Star", price: 55, image: "/download (1).jpeg" },
  { id: 5, name: "Old Skool", price: 60, image: "/download (1).jpeg" },
  { id: 6, name: "ZoomX Vaporfly", price: 250, image: "/download (1).jpeg" },
  { id: 7, name: "Gel-Kayano 27", price: 140, image: "/download (1).jpeg" },
  { id: 8, name: "Metcon 6", price: 130, image: "/download (1).jpeg" },
  { id: 9, name: "React Infinity Run", price: 160, image: "/download (1).jpeg" },
  { id: 10, name: "Nano X", price: 130, image: "/download (1).jpeg" }
];

function App() {
    const [cart, setCart] = useState([]);
  
    const addToCart = (shoe) => {
      setCart((prevCart) => {
        const existingItem = prevCart.find((item) => item.id === shoe.id);
        if (existingItem) {
          return prevCart.map((item) =>
            item.id === shoe.id ? { ...item, quantity: item.quantity + 1 } : item
          );
        } else {
          return [...prevCart, { ...shoe, quantity: 1 }];
        }
      });
    };
  
    const updateQuantity = (shoeId, delta) => {
      setCart((prevCart) =>
        prevCart
          .map((item) =>
            item.id === shoeId ? { ...item, quantity: item.quantity + delta } : item
          )
          .filter((item) => item.quantity > 0)
      );
    };
  
    // Calculate total price
    const getTotalPrice = () => {
      return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };
  
    return (
      <>
        <Navbar />
        <div className="page">
          <div className="boxes">
            {shoes.map((shoe) => (
              <Box key={shoe.id} shoe={shoe} addToCart={addToCart} />
            ))}
          </div>
          <div className="hi">
            <h2>Cart</h2>
            <ul className='containers'>
              {cart.map((shoe) => (
                <Cart key={shoe.id} shoe={shoe} updateQuantity={updateQuantity} />
              ))}
               <div className="total"> <span>Total:</span>  <span>${getTotalPrice().toFixed(2)}</span> </div>
            </ul>
           
          </div>
        </div>
      </>
    );
  }
  
  export default App;
  
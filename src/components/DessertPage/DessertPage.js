import React, { useState } from 'react';
import Card from '../Card/Card';
import Cart from '../Cart/Cart';
import ConfirmationPopup from '../ConfirmationPopup/ConfirmationPopup';
import data from '../data/data.json';
import './DessertPage.css';

const DessertPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const handleAddToCart = (item) => {
    const existingItemIndex = cartItems.findIndex(cartItem => cartItem.name === item.name);
    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (itemName) => {
    const updatedCartItems = cartItems
      .map(item => item.name === itemName ? { ...item, quantity: item.quantity - 1 } : item)
      .filter(item => item.quantity > 0);

    setCartItems(updatedCartItems);
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const onCheckout = () => {
    setShowPopup(true);
  };

  const handleStartNewOrder = () => {
    setCartItems([]);
    setShowPopup(false);
  };

  return (
    <div className="dessert-page">
      <div className="header">
        <h1>Desserts</h1>
      </div>
      <div className="main-content">
        <div className="card-container">
          {data.map((item, index) => (
            <Card
              key={index}
              image={item.image}
              category={item.category}
              name={item.name}
              price={item.price}
              quantity={cartItems.find(cartItem => cartItem.name === item.name)?.quantity || 0}
              onAddToCart={(item) => handleAddToCart(item)}
              onRemoveFromCart={() => handleRemoveFromCart(item.name)}
            />
          ))}
        </div>
        <Cart
          cartItems={cartItems}
          total={total}
          onCheckout={onCheckout}
          onRemoveFromCart={handleRemoveFromCart}
        />
      </div>
      {showPopup && <ConfirmationPopup cartItems={cartItems} onClose={handleStartNewOrder} />}
    </div>
  );
};

export default DessertPage;

import React from 'react';
import './Card.css';

const Card = ({ image, category, name, price, quantity, onAddToCart, onRemoveFromCart }) => {
  const borderColor = quantity > 0 ? 'hsl(14, 86%, 42%)' : 'transparent'; // Set border color based on quantity

  return (
    <div className="card">
      <div className="card-image" style={{ borderColor }}>
        <img src={image.desktop} alt={name} className="image" />
        {quantity === 0 ? (
          <button className="add-to-cart-button" onClick={() => onAddToCart({
            name,
            price,
            thumbnail: image.thumbnail // Pass the thumbnail image
          })}>
            <img src='/assets/images/icon-add-to-cart.svg' alt='Add to cart' className="cart-icon" />
            Add to Cart
          </button>
        ) : (
          <div className="quantity-control">
            <img
              src="/assets/images/icon-decrement-quantity.svg"
              alt="Decrement"
              onClick={onRemoveFromCart}
              className="decrement-icon"
            />
            <span className="quantity">{quantity}</span>
            <img
              src="/assets/images/icon-increment-quantity.svg"
              alt="Increment"
              onClick={() => onAddToCart({
                name,
                price,
                thumbnail: image.thumbnail // Pass the thumbnail image
              })}
              className="increment-icon"
            />
          </div>
        )}
      </div>
      <div className="card-info">
        <span className="category">{category}</span>
        <h3 className="name">{name}</h3>
        <span className="price">${price.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default Card;

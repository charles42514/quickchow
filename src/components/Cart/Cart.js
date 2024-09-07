import React from 'react';
import './Cart.css';

const Cart = ({ cartItems, total, onCheckout, onRemoveFromCart }) => {
    const handleRemoveClick = (itemName) => {
        onRemoveFromCart(itemName);
    };

    return (
        <div className="cart-container">
            <h2 className="cart-header">Your Cart ({cartItems.length})</h2>
            {cartItems.length > 0 ? (
                <>
                    <div className="cart-items">
                        {cartItems.map((item, index) => (
                            <div key={index} className="cart-item">
                                <div className="item-details">
                                    <span className="item-name">{item.name}</span>
                                    {/* Other info now directly below the item name */}
                                    <div className="item-info">
                                        <span className="item-quantity">{item.quantity}x</span>
                                        <span className="item-price">@${item.price.toFixed(2)}</span>
                                        <span className="item-total">${(item.quantity * item.price).toFixed(2)}</span>
                                    </div>
                                </div>
                                <button
                                    className="remove-button"
                                    onClick={() => handleRemoveClick(item.name)}
                                >
                                    <img
                                        src="/assets/images/icon-remove-item.svg"
                                        alt="Remove item"
                                        className="remove-icon"
                                    />
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="cart-total">
                        <span style={{ fontWeight: 'normal' }}>Order Total</span>
                        <span>${total.toFixed(2)}</span>
                    </div>
                    <div className="carbon-neutral">
                        <img src='/assets/images/favicon-32x32.png' alt='Favicon' className="favicon-icon" />
                        <span>This is a <strong>carbon-neutral</strong> delivery</span>
                    </div>
                    <button className="checkout-button" onClick={onCheckout}>
                        Confirm Order
                    </button>
                </>
            ) : (
                <div className="empty-cart">
                    <img
                        src="/assets/images/illustration-empty-cart.svg"
                        alt="Your added items will appear here"
                        className="empty-cart-image"
                    />
                    <p className="empty-cart-text">Your added items will appear here</p>
                </div>
            )}
        </div>
    );
};

export default Cart;

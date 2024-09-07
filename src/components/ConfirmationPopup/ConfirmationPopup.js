import React from 'react';
import './ConfirmationPopup.css';

const ConfirmationPopup = ({ cartItems, onClose }) => (
    <div className="confirmation-popup">
        <div className="popup-content">
            <img
                src={process.env.PUBLIC_URL + '/assets/images/—Pngtree—check mark icon in flat_6082970.png'}
                alt="check mark"
                className="check-icon"
            />
            <h2 className="main-header">Order Confirmed</h2>
            <p className="sub-header">We hope you enjoy your food!</p>
            <div className='order-summary-total' >
            <div className="order-summary">
                {cartItems.map(item => (
                    <div key={item.name} className="order-item">
                        <div className='item-details-total' >
                            <img src={item.thumbnail} alt={item.name} className="item-image" />
                            <div className="item-details">
                                <span className="item-name">{item.name}</span>
                                <div className="item-quantity-price" >
                                    <span style={{ fontWeight: 'bold', color: 'red' }} >{item.quantity}x</span>
                                    <span>@${item.price}</span>
                                </div>
                            </div>
                        </div>
                        <p className="item-total"> ${item.price * item.quantity}</p>
                    </div>
                ))}
            </div>
            <div className="order-total">
                <span style={{fontWeight: 'normal'}} >Order Total</span>
                <span>${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}</span>
            </div>
            </div>
            <button className="start-new-order" onClick={onClose}>
                Start New Order
            </button>
        </div>
    </div>
);

export default ConfirmationPopup;

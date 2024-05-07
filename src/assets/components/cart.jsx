import React from 'react';

const Cart = ({ cartItems, removeFromCart, proceedToCheckout }) => {
  return (
    <div className="cart">
      <h2>Cart</h2>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.productPicture} alt={item.productName} />
            <div className="item-details">
              <h3>{item.productName}</h3>
              <p>{item.category}</p>
              <p>{item.description}</p>
              <p>Price: <strong>Ksh {item.price}</strong></p>
              <button onClick={() => removeFromCart(item)}>Remove from Cart</button>
            </div>
          </div>
        ))}
      </div>
      <button onClick={proceedToCheckout}>Proceed to Checkout</button>
    </div>
  );
};

export default Cart;
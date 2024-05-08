import React from 'react';

const Cart = ({ cartItems, removeFromCart, proceedToCheckout }) => {
    // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price*item.item_quantity , 0);
  
  // Calculate tax fee (10%)
  const taxFee = totalPrice * 0.16;

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
              <p>Item quantity : {item.item_quantity }</p>
              <p>Price: <strong>Ksh {item.price}</strong></p>
              <button onClick={() => removeFromCart(item)}>Remove from Cart</button>
            </div>
          </div>
        ))}
      </div>
       <div className="total-price">
       <h4>Total Price: Ksh {totalPrice}</h4>
       <h4>Tax Fee : Ksh {taxFee}</h4>
       <h4>Total Amount to be paid : Ksh {taxFee + totalPrice}</h4>
       </div>
      <button onClick={proceedToCheckout}>Proceed to Checkout</button>
    </div>
  );
};

export default Cart;
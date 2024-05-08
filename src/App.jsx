import { useState, useEffect } from 'react'
import ProductCollection from './assets/components/productCollection'
import './App.css'
import Header from './assets/components/Header'
import Cart from './assets/components/cart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './assets/pages/Contact';
import About from "./assets/pages/About"



function App() {
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([]);
 
  

  useEffect(()=> {
    fetch('http://localhost:3000/catalogue')
    .then((r) => r.json())
    .then((data) => setItems(data))
  }, [])

   // Function to add item to cart
  const addToCart = (item) => {
    const updatedItems = items.map((product) => {
      if (product.id === item.id) {
        // Decrease quantity in db.json
        if (product.quantity > 0) {
          product.quantity -= 1;
        } else {
          alert('Out of stock');
          return product;
        }}})

    // Check if item already exists in cart
    const existingItemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);

    if (existingItemIndex !== -1) {

      // If item already exists, update its quantity
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].item_quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      // If item doesn't exist, add it to cart with quantity 1
      setCartItems([...cartItems, { ...item, item_quantity: 1 }]);
    
    }
    
  };
    // Function to remove item from cart
  const removeFromCart = (item) => {
    setCartItems(cartItems.filter((i) => i.id !== item.id));
  }

 
  
  
  
  return (
    
     <Router>
      <div>
        <Header cartItems={cartItems} />
       
       <Routes>
          <Route path="/contact" element={<Contact />} />    
          <Route path="/about" element={<About />} />
          <Route path="/" element={<ProductCollection items={items} addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
        </Routes>
       
      </div>
    </Router>
    
  )
}


export default App

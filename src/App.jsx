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
    setCartItems([...cartItems, item]);
   }

    // Function to remove item from cart
  const removeFromCart = (item) => {
    setCartItems(cartItems.filter((i) => i.id !== item.id));
  }
  
  return (
    
     <Router>
      <div>
        <h1>CART-BORA APP</h1>
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

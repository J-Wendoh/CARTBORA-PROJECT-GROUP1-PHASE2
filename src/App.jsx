import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductCollection from './assets/components/productCollection';
import Header from './assets/components/Header';
import Cart from './assets/components/cart';
import Contact from './assets/pages/Contact';
import About from './assets/pages/About';
import SearchBar from './assets/components/searchBar';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/catalogue')
      .then((r) => r.json())
      .then((data) => {
        setItems(data);
        setFilteredItems(data); // Initially, filtered items are the same as the original items
      });
  }, []);

  // Function to add item to cart
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  // Function to remove item from cart
  const removeFromCart = (item) => {
    setCartItems(cartItems.filter((i) => i.id !== item.id));
  };

  // Function to handle search
  const handleSearch = (searchTerm) => {
    const filtered = items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  return (
    <Router>
      <div>
        <Header cartItems={cartItems} />
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/"
            element={<ProductCollection items={filteredItems} addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

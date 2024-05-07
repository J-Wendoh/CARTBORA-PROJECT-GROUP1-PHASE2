import { useState, useEffect } from 'react'
import ProductCollection from './assets/components/productCollection'
import './App.css'
import Header from './assets/components/Header'


function App() {
  const [items, setItems] = useState([])
  useEffect(()=> {
    fetch('http://localhost:3000/catalogue')
    .then((r) => r.json())
    .then((data) => setItems(data))
  }, [])

  return (
    <>
      <div>
      <h1>CART-BORA APP</h1>
        <Header/>
        <ProductCollection items={items}/>
      </div>
    </>
  )
}

export default App

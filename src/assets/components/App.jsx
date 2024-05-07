import { useState, useEffect } from 'react'
import ProductCollection from './ProductCollection'

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
        <h1>CART-Bora</h1>
        <ProductCollection items={items}/>
      </div>
    </>
  )
}

export default App

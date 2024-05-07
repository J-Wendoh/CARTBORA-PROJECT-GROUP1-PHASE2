import { useState, useEffect } from 'react'
import '../App.css'
import productCollection from './components/productCollection'

function App() {
  const [items, setItems] = useState([])
  useEffect(()=> {
    fetch('http://localhost:3000/catalogue')
    .then((r) => r.json())
    .then((items) => setItems(items))
  }, [])

  return (
    <>
      <div>
        <h1>CART-Bora</h1>
        <productCollection items={items}/>
      </div>
    </>
  )
}

export default App

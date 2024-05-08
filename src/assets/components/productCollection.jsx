import React from 'react'
import ProductCard from './productCard'



const ProductCollection = ({ items, addToCart }) => {
  return (
    <div className='product-collection'>
      {items.map((item) => (
        <ProductCard
          key={item.id}
          item={item}
          addToCart={addToCart} 
        />
      ))}
    </div>

  );
}

export default ProductCollection

import React from 'react'
import ProductCard from './ProductCard'

const ProductCollection = ({items}) => {
  return (
    <div className='product-collection'>
        {items.map((item) => (
            <ProductCard
            key={item.id}
            item={item}
                />
        ) )}
    </div>
  )
}

export default ProductCollection

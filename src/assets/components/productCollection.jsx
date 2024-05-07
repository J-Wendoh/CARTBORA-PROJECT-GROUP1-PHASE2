import React from 'react'
import productCard from './productCard'

const productCollection = ({items}) => {
  return (
    <div className='product-collection'>
        {items.map((item) => (
            <productCard
            key={item.id}
                />
        ) )}
    </div>
  )
}

export default productCollection

import React from 'react'

const ProductCard = ({ item }) => {
  return (
    <div className="product">
      <div className="product-card">
        <img src={item.productPicture} alt={item.productName} />
        <h2>{item.productName}</h2>
        <h3>{item.category}</h3>
        <p>{item.description}</p>
        <p>
          Price:<strong>Ksh {item.price}</strong>
        </p>
        <div className="product-button">
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard

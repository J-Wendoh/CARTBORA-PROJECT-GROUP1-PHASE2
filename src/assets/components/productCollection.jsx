
import React, { useState } from 'react';
import ProductCard from './productCard';
import FilterModule from './filterModule';
import SearchBar from './searchBar'; 
import React,  {useState} from 'react'
import ProductCard from './productCard'
import FilterModule from './filterModule'


const ProductCollection = ({ items, addToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const itemsToDisplay = items.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearchTerm = !searchTerm || item.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearchTerm;
  });

  return (
    <>
      <div>
        <SearchBar onSearch={handleSearch} />
        <FilterModule filterItems={handleCategoryChange} />
      </div>
      <div className='product-collection'>
        {itemsToDisplay.map((item) => (
          <ProductCard
            key={item.id}
            item={item}
            addToCart={addToCart} 
          />
        ))}
      </div>
    </>
  );
};
    <div>
      <FilterModule filterItems={filterItems}/>
    </div>
    <div className='product-collection'>
      {itemsToDisplay.map((item) => (
        <ProductCard
          key={item.id}
          item={item}
          addToCart={addToCart} 
        />
      ))}
    </div>
  )}

export default ProductCollection;

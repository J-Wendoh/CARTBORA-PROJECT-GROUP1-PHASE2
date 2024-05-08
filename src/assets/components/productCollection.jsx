import React,  {useState} from 'react'
import ProductCard from './productCard'
import FilterModule from './filterModule'



const ProductCollection = ({ items, addToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('All')

  // function handleCategoryChange(category) {
  //   setSelectedCategory(category);
  // }

  const filterItems = (catItem) => {
    setSelectedCategory(catItem);
    if (catItem === 'All') {
      // setItems(items); // Reset to all items if "All Products" is clicked
    } else {
      const filteredItems = items.filter((item) => item.category === catItem);
      console.log('Filtered Items:', filteredItems); // Log filtered items for debugging
      if (filteredItems.length > 0) {
        setItems(filteredItems);
        console.log('Updated Items:', items); // Log updated items for debugging
      }
    }
  };

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  return (
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

export default ProductCollection

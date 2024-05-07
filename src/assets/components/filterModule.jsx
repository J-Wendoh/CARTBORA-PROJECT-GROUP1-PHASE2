import React from 'react'

function FilterModule({filterItems, setItems, items}) {
  return (
    <div className="filter-buttons">
      <button type="button" onClick={() => setItems(items)}>All Products</button>
      <button type="button" onClick={() => filterItems('kitchen')}>Kitchen</button>
      <button type="button"onClick={() => filterItems('clothing')}>Clothing</button>
      <button type="button"onClick={() => filterItems('food')}>Food</button>
      <button type="button"onClick={() => filterItems('electronics')}>Electronics</button>
    </div>
  );
}

export default FilterModule

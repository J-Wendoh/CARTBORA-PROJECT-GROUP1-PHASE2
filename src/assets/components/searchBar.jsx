import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What product are you looking for?"
        value={searchTerm}
        onChange={handleChange}
        style={{ width: '300px', padding: '10px', fontSize: '16px' }}
      />
      <button type="submit" style={{ marginLeft: '10px', padding: '10px 20px' }}>Search</button>
    </form>
  );
};
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
}


export default SearchBar;

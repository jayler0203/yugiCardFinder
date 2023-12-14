// src/components/Search.js
import React from 'react';

const Search = ({ setSearchTerm }) => {
  return (
    <div className='search'>
      <input
        type="search"
        placeholder="Search cards by name"
        id='search-input'
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className='search-button'><span className="material-symbols-outlined">
search
</span></button>
    </div>
  );
};

export default Search;

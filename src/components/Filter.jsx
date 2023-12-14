// src/components/Filter.js
import React from 'react';

const Filter = ({ setFilter,options,topic }) => {
  return (
    <div className='filter'>
      <label>{topic}:</label>
      <select className='select-filter' onChange={(e) => { setFilter(e.target.value); console.log(e.target.value) }}>
        <option value="">All</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;

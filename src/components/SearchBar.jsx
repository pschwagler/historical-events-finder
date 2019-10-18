import React from 'react';

const SearchBar = ({ handleChange, handleSubmit, value }) => (
  <form onSubmit={handleSubmit} className='search-form'>
    <input
      type='text'
      className='search-input'
      onChange={handleChange}
      value={value}
    />
    <input className='search-submit' type='submit' />
  </form>
);

export default SearchBar;

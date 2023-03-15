import React, { useState } from "react";

const SearchBar = ({value, onChange, onSubmit}) => {

  // console.log(searchKeyword)
  return (
    <div className="search">
      <label>Search for Payments!</label>
      <input
        type="search"
        onChange={(event) => onChange(event.target.value)}
        value={value}
      />
      <button onClick={onSubmit}>Search</button>
    </div>
  );
};

export default SearchBar;

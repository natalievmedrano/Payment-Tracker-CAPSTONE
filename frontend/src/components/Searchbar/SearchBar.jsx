import React, { useState } from "react";

const SearchBar = ({}) => {
  const [searchKeyword, setSearchKeyword] = useState("");

  console.log(searchKeyword)
  return (
    <div>
      <input
        type="search"
        onChange={(event) => setSearchKeyword(event.target.value)}
        value={searchKeyword}
      />
      <button>Search</button>
    </div>
  );
};

export default SearchBar;

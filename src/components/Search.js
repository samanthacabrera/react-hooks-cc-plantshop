import React, { useState } from 'react'

function Search({ setPlants }) {
  // State variable to store the search term
  const [searchTerm, setSearchTerm] = useState('')

  const handleChange = (event) => {
    const value = event.target.value
    // Update the searchTerm state with the new value
    setSearchTerm(value);
  
    // console.log( value);
    setSearchTerm(value)
    setPlants(value)
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search plants..."
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;

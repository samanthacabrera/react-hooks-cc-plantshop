import React, { useState } from "react";

function PlantCard({ plant, markSoldOut }) {
  // State that keeps track of whether plant is sold out or not
  const [isSoldOut, setIsSoldOut] = useState(false);

  const handleSoldOutClick = () => {
    // Toggle isSoldOut state
    setIsSoldOut(prevState => !prevState); 
    // Pass current plant id to markSoldOut()
    markSoldOut(plant.id, !isSoldOut); 
  };

  return (
    <div className="card">
      <img src={plant.image} alt={plant.name} />
      <h2>{plant.name}</h2>
      <p>${plant.price}</p>
      {/*Render button if plant is in stock */}
      {!isSoldOut && (
        <button onClick={handleSoldOutClick} style={{ backgroundColor: 'green' }}>
          In Stock
        </button>
      )}
      {/*Render button if plant is out of stock */}
      {isSoldOut && (
        <button onClick={handleSoldOutClick} style={{ backgroundColor: 'gray' }}>
          Out of Stock
        </button>
      )}
    </div>
  )
}

export default PlantCard

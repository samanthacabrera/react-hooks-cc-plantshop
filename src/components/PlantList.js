import React from 'react'
import PlantCard from './PlantCard'

function PlantList({ plants, setPlants, markSoldOut }) {
  // console.log(plants);
  return (
    <div className="plant-list">
      {plants.map(plant => (
        <PlantCard key={plant.id} plant={plant} markSoldOut={markSoldOut} />
      ))}
    </div>
  )
}

export default PlantList


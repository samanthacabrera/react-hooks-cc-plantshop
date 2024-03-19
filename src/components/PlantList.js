import React from 'react'
import PlantCard from './PlantCard'

function PlantList({ plants, setPlants, markSoldOut }) {
  // console.log(plants);
  return (
    <ul className="cards">
      {plants.map(plant => (
        <PlantCard key={plant.id} plant={plant} markSoldOut={markSoldOut} />
      ))}
    </ul>
  )
}

export default PlantList


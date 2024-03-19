import React, { useState, useEffect } from 'react';
import PlantList from './PlantList';
import NewPlantForm from './NewPlantForm';
import Search from './Search';

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [filteredPlants, setFilteredPlants] = useState([]);

  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then(r => r.json())
      .then(data => {
        // Initialize plants state with fetched data
        setPlants(data);
        // Initialize filteredPlants state with all plants initially
        setFilteredPlants(data); 
      });
  }, []);

  // POST request to add new plant
  function addPlant(newPlant) {
    fetch('http://localhost:6001/plants', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPlant)
    })
      .then(r => r.json())
      .then(data => {
        const newPlants = [...plants, data]
        // Update plants with new plant
        setPlants(newPlants)
        // Update filteredPlants with new plant 
        setFilteredPlants(newPlants)
      })
  }

  const handleSearch = (searchTerm) => {
    const lowercaseSearchTerm = searchTerm.toLowerCase()
    // Filter through plants (case-insensitive)
    const filteredPlants = plants.filter(plant =>
      plant.name.toLowerCase().includes(lowercaseSearchTerm)
    )
    setFilteredPlants(filteredPlants)
  }

  const markSoldOut = (id) => {
    //console.log('Marking plant as sold out:', id);
    // Map through all plants and switch soldOut to equal true
    const updatedPlants = plants.map(plant =>
      plant.id === id ? { ...plant, soldOut: true } : plant
    )
    setPlants(updatedPlants)
  }

  return (
    <main>
      <NewPlantForm addPlant={addPlant}/>
      <Search plants={plants} setPlants={handleSearch} />
      <PlantList plants={filteredPlants} setPlants={setPlants} markSoldOut={markSoldOut} />
    </main>
  )
}

export default PlantPage
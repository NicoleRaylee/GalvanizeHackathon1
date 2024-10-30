import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PetSelection () {
    const [selectedPet, setSelectedPet] = useState(null);
    const navigate = useNavigate();

    const pets = [
      { id: 1, name: 'Chomby', image: 'src/images/Vpet1.png'},
      { id: 2, name: 'Sparky', image: 'src/images/Vpet2.png'},
      { id: 3, name: 'Fluffle', image: 'src/images/Vpet3.png'}  
    ];

    const handleSelectPet = (pet) => {
        setSelectedPet(pet);
    };

    const handleAdopt = () => {
        if (selectedPet) {
            navigate('/profile', { state: {
                pet: selectedPet } });
            } else {
                alert('Please select a pet to adopt!');
            }
    };
    
    return (
        <div className='pet-selection'>
            <h2>Adopt a Pet!</h2>
            <div className='pet-options'>
                {pets.map((pet) => (
                    <div key={pet.id} 
                    onClick={() => handleSelectPet(pet)}>
                    <img src={pet.image} alt={pet.name} />
            <p>{pet.name}</p>
            </div>

             ))}
            </div>
            <button onClick={handleAdopt}>Adopt Selected Pet!</button>
        </div>
    );
}

export default PetSelection;
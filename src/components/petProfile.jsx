import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function PetProfile() {
    const location = useLocation();
    const { pet } = location.state || { pet: null };

    if (!pet) {
        return <p>No pet selected. Please choose a pet.</p>;
    }
    
    const [petName, setPetName] = 
    useState('Your New Pet');
    const [newPetName, setNewPetName] = useState('');
    const [hungerLevel, setHungerLevel] = useState(100);
    const [happinessLevel, setHappinessLevel] = useState(50);

    const feedPet = () => {
        if (hungerLevel === 100) {
          alert("Your pet is already full!");
        } else {
          setHungerLevel((prevHunger) => Math.min(prevHunger + 20, 100));
        //   alert("You fed your pet!");
        }
      };
    
    const petPet = () => {
        setHappinessLevel((prev) => Math.min(prev + 10, 100));
        
    };

    const playWithPet = () => {
        setHappinessLevel((prev) => Math.min(prev + 20, 100));
        setHungerLevel((prev) => Math.max(prev -10, 0));
    };



      useEffect(() => {
        const interval = setInterval(() => {
            setHungerLevel((prevHunger) =>
            Math.max(prevHunger - 5, 0));
        }, 20000);

       
       return () => 
        clearInterval(interval);
      }, []);

      useEffect(() => {
        const interval = setInterval(() => {
            setHappinessLevel((prev) =>
            Math.max(prev - 5,0));    
        }, 25000);
       
       return () => 
        clearInterval(interval);
      }, []);


      

      const petRename = () => {
        if (newPetName.trim() !== '')
      {
        setPetName(newPetName);
        setNewPetName('');

      } else {
        alert('Please enter a valid name!')

      }
    };


    return (
        <div className='pet-profile'>
        <h2>{pet.name}'s Profile</h2>
        <img src={pet.image} alt={pet.name}></img>
            <p>Name: {petName}</p> {}
            <input
                type='text'
                value={newPetName}
                onChange={(e) =>
              setNewPetName(e.target.value)}
              placeholder='Enter new pet name'
            />   
            <div className="meter">
                <span>Hunger</span>
                <div className="progress-bar" style={{width:
                    `${hungerLevel}%`, backgroundColor: hungerLevel > 50 ?
                    '#4caf50' : '#ff9800'}}>
                {hungerLevel}%

            </div>
            </div> 

            <div className="meter">
                <span>Happiness</span>
                <div className="progress-bar" style={{width:
                    `${happinessLevel}%`, backgroundColor: happinessLevel > 50 ?
                    '#4caf50' : '#ff9800'}}>
                {happinessLevel}%

            </div>
            </div> 


            <button onClick={petRename}>Rename Pet</button>
            <p>Hunger: {hungerLevel}</p>
            <button onClick={feedPet}>Feed Pet</button>
            <button onClick={petPet}>Pet</button>
            <button onClick={playWithPet}>Play With Pet</button>
        
        </div>
    );
}


export default PetProfile;
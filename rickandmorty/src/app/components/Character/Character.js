import React from 'react'
import './Character.css';

const Character = (character) => {
   console.log(character.origin)
  return (
    <>
    <div className='container-character'>
        <h3>{character.name}</h3>
        <img src={character.image} alt={character.name} width={300} />
        <p>{`Origin: ${character.origin !== "unknown" ? character.origin : "-"}`}</p>
    </div>
      
    </> 
  )
}

export default Character
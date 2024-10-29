"use client"
import React, { useEffect,useState } from 'react'
import Character from '../Character/Character'
import './List.css'

const List = () => {
  const [characters,setCharacters] = useState([]);
  const [loading,setLoading] = useState(true);
  useEffect(()=>{
    async function fetchData() {
      try{
        const data = await fetch('https://rickandmortyapi.com/api/character');
        const {results} = await data.json();
        console.log(results)
        setCharacters(results);
        setLoading(false)
      }
      catch(err){
        console.log(err)
      }
    }
    fetchData();
    console.log(characters)
  },[])
  return (
    <>
    <div className='container-main'>
      <h2>Characters</h2>
      <div className='container-list'>
      {loading ? (<div>loading...</div>):(characters.map((character)=>(<Character key={character.id} name={character.name} origin={character.origin.name} image={character.image}/>)))}
      </div>
    </div>  
    </>
  )
}

export default List
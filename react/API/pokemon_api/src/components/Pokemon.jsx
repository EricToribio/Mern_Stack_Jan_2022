import React,{useState, useEffect} from 'react'

const Pokemon = () => {
    const [pokemonNames, setPokemonNames] = useState([])
    
        
    
    const fetchPokemon=() => {
   
            fetch("https://pokeapi.co/api/v2/pokemon?offset=1&limit=807")
            .then(response => response.json())
            .then(response => setPokemonNames(response.results))
            }
    console.log(pokemonNames.length)


    return (
        <div>
            <button onClick={fetchPokemon}>Fetch pokemon</button>
            <div>
                {pokemonNames.length > 0 && 
            </div>
        </div>
    )
}

export default Pokemon

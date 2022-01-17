import React, { useState } from 'react'
import axios from 'axios'

const Pokemon = () => {
    const [pokemonNames, setPokemonNames] = useState([])
    
    
    const onclickHandler =  () => {

        axios.get("https://pokeapi.co/api/v2/pokemon?offset=1&limit=807")
            .then(response => {
                setPokemonNames(response.data.results)
                
            })
    }

    return (
        <div>
                
                <button onClick={onclickHandler}>Fetch pokemon</button>
            <div>
                {
                    pokemonNames.map((pokemon, idx) => {
                        return (<p key={idx}>{pokemon.name}</p>)
                    })
                }
            </div>
        </div>
    )}
            
        
    



export default Pokemon

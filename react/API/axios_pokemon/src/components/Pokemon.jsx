import React, { useState } from 'react'
import axios from 'axios'

const Pokemon = () => {
    const [pokemonNames, setPokemonNames] = useState(false)
    


    
    const onclickHandler =  () => {

        axios.get("https://pokeapi.co/api/v2/pokemon?offset=1&limit=807")
            .then(response => {
                setPokemonNames(response.data)
                
            })


    }




    if(pokemonNames){
    return (
        <div>

            <div>
                {
                    pokemonNames.results.map((pokemon, idx) => {
                        return (<p key={idx}>{pokemon.name}</p>)
                    })
                }
            </div>
        </div>
    )}else{
        return(
            <button onClick={onclickHandler}>Fetch pokemon</button>
            
        )
    }
}


export default Pokemon

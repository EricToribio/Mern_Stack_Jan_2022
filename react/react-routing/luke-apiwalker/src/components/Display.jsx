import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


const Display = () => {
    const { param, id } = useParams()
    const [ apiData, setApiData] = useState()
    const [ error, setError] = useState(false)
    console.log(param , id)
    const apiCall =`https://swapi.dev/api/${param}/${id}`
    useEffect(() => {
        axios.get(apiCall)
            .then(response => {
                setApiData(response.data)
                setError(false)
            }).catch(err =>{
                setError('https://www.memesmonkey.com/images/memesmonkey/s_82/825a51a4f0360db6d91ebeef1f11f87d.jpeg')
                console.log(err)
                
            })
    }, [param,id,error]);
    
    console.log(apiData)
    return (
        <div>
       
        {
         (param === 'people' && !error  ) &&
            <div>
                <h1>{apiData.name}</h1>
                <h2>Height : {apiData.height}</h2>
                <h2>Mass : {apiData.mass}</h2>
                <h2>Hair Color : {apiData.hair_color}</h2>
                <h2>Skin Color : {apiData.skin_color}</h2>
            </div>
}{
            ( param === 'planets' && !error) &&
            <div>
                <h1>{apiData.name}</h1>
                <h2>Climate : {apiData.climate}</h2>
                <h2>Terrain : {apiData.terrain}</h2>
                <h2>Surface Water {apiData.surface_water}:</h2>
                <h2>Population : {apiData.population} </h2>
            </div>
        }
        {error &&
        <img src={error} alt="these are not the droids you're looking for"/>}  
        
        </div>
    )
}

export default Display

import React from 'react'
import axios from 'axios';
    
export default props => {
    
    const { playerId, successCallback } = props;
    console.log(playerId)
    
    const deletePlayer = e => {
        axios.delete('http://localhost:8000/api/team/delete/' + playerId)
            .then(res=>{
                successCallback();
            })
    }
    
    return (
        <button className='btn btn-danger' onClick={deletePlayer}  >
            Delete
        </button>
    )
}
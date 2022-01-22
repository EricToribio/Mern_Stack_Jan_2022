import axios from 'axios';

import React, { useEffect, useState } from 'react';

const ManagePlayerStatus = () => {
  const [players, setPlayers] = useState([])
  // useEffect(() => {
  //   axios.get("http://localhost:8000/api/team")
  //   .then(response => {
  //     setPlayers(response.data.Team)
  //     console.log(response.data.Team)
  //   }).catch(err => console.log(err))
  // },[])
  useEffect(() => {
    axios.get('http://localhost:8000/api/team')
    .then(response => {
        setPlayers(response.data.Team)
    } ).catch(err => {
        console.log(err)
    })
},[])
  return (
    <table className=''>
      <thead>
        <tr>
          <th>Players Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
      {
        players.map((player, i) =>{
          return(
            <tr>
              <td>{player.name}</td>
              
              <td>
                {player.playerStatus === "playing"?
                <button className='btn btn-success'>Playing</button>
                :
                  <button className='btn'>Playing</button>
                }
                {player.playerStatus=== "notPlaying"?
                <button className='btn btn-danger'>Not Playing</button>
                  :
                  <button className='btn'>Not Playing</button>
                }
                {player.playerStatus === "undecided"?
                <button className='btn btn-warning'>Undecided</button>
                  :
                  <button className='btn'>Undecided</button>
                }
              </td>
              
            </tr>
          )
        })
      
      }
      </tbody>
    </table>
    
        )
};

export default ManagePlayerStatus;

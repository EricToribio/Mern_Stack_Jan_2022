import axios from 'axios';


import React, { useEffect, useState } from 'react';

const ManagePlayerStatus = () => {
  const [players, setPlayers] = useState([])
  const [updateStatus, setUpdateStatus] = useState()
  const [errors, setErrors] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8000/api/team')
      .then(response => {
        setPlayers(response.data.Team)
      }).catch(err => {
        console.log(err)
      })
  }, [updateStatus])

  const setStatus = (value, id) => {
    axios.put(`http://localhost:8000/api/team/update/${id}`, {
      playerStatus: value
    }).then(response => {
      console.log(response.data)
      setUpdateStatus(response.data)
    }).catch(err => {
      const errorResponse = err.response.data.errors; // Get the errors from err.response.data
      const errorArr = []; // Define a temp error array to push the messages in
      for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
        errorArr.push(errorResponse[key].message)
      }
      // Set Errors
      setErrors(errorArr);
    })

  }
  return (
    <table className='table table-dark table-striped border mt-3'>
      {errors.map((err, index) => <p key={index}>{err}</p>)}
      <thead>
        <tr>
          <th>Players Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          players.map((player, i) => {
            return (
              <tr>
                <td>{player.name}</td>
                <td >
                  {player.playerStatus === "playing" ?
                    <button className='btn btn-success text-light '>Playing</button>
                    :
                    <button value="playing" onClick={(e) => setStatus(e.target.value, player._id)} className='btn btn-light'>Playing</button>
                  }
                  {player.playerStatus === "notPlaying" ?
                    <button className='btn btn-danger mx-3'>Not Playing</button>
                    :
                    <button value="notPlaying" onClick={(e) => setStatus(e.target.value, player._id)} className='btn btn-light mx-3'>Not Playing</button>
                  }
                  {player.playerStatus === "undecided" ?
                    <button className='btn btn-warning'>Undecided</button>
                    :
                    <button value='undecided' onClick={(e) => setStatus(e.target.value, player._id)} className='btn btn-light '>Undecided</button>
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

import axios from 'axios';
import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

const AddPlayer = () => {
    const [name, setName] = useState("")
    const [preferredPosition, setPreferredPosition] = useState("Any")
    const [playerStatus, setPlayerStatus] = useState("undecided")
    const [errors, setErrors] = useState([])
    const history = useHistory()

    const onSubmitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/team/new',{
            name : name,
            preferredPosition : preferredPosition,
            playerStatus : playerStatus
        }) .then(res => {console.log(res)
            history.push("/players/list")})
            .catch(err => {
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
        <div className='border p-5 mt-4'>
            <h3 className='d-flex justify-content-start'>Add Player</h3>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <form className=' mx-auto col-9' onSubmit={(e) => onSubmitHandler(e)} >
            <div className=' row '>
                <label  htmlFor="playerName">Player Name :</label>
                <input  type="text" onChange={(e) => setName(e.target.value)}/>
                {
                        name.length!=0 && name.length < 3?
                            <div className='bg-dark mt-3'>
                                <p style={{ color: 'red' }}>** First Name must be at least 2 Characters</p>
                            </div> :
                            ''
                    }
            </div>
            <div className=' row my-3'>
                <label  htmlFor="preferredPosition">Preferred Position :</label>
                <input  type="text" onChange={(e) => setPreferredPosition(e.target.value)} />
            </div>
            <div className='d-flex justify-content-end'>
                <button className='btn btn-success col-5'>Add</button>
                </div>
            </form>
        </div>
    )
};

export default AddPlayer;

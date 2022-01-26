import axios from 'axios';
import React, { useState } from 'react';

 const RoomsForm = ({ setNewRoom }) => {
    const [input, setInput] = useState()
    const [errors, setErrors] = useState([])

    const onSubmitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/chatroom/new',{
            name : input,
            chats : ""
        })
        .then(response =>{
            setNewRoom(input)
        })
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
        <div>
            <form onSubmit={onSubmitHandler}>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
                <div>
                    <label htmlFor="roomName">Enter RoomName :</label>
                    <input type="text" autoComplete='off' value={input}
                        onChange={(e) => setInput(e.target.value)} />
                </div>
                <div>
                    <button>Submit</button>
                </div>

            </form>
        </div>
    );

};

export default RoomsForm

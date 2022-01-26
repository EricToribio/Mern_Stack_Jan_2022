import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AllChatRooms = ({newRoom ,loggedinuser}) => {
    const [chatRooms, setChatRooms] = useState([])
    const [errors, setErrors] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/chatroom")
        .then(response => {
            console.log("hi")
            setChatRooms(response.data.ChatRoom)
            console.log(response.data)
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
    },[newRoom])
    
  return (
  <div>{errors.map((err, index) => <p key={index}>{err}</p>)}
        {
            chatRooms.map((room,i) =>{
                return(
                <div>
                    <Link to={`/${room._id}/${loggedinuser._id}`}>{room.name}</Link>
                </div>
            )})
        }
  </div>
  );
};
export default AllChatRooms

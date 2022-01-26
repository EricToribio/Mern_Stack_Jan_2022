import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import io from 'socket.io-client';
import ChatForm from '../components/ChatForm';
import { Chatrooms } from '../components/Chatrooms';

export const RoomsView = () => {
  const {room , id} = useParams()
  const [user,setUser] = useState()
  const [chatroom, setChatRoom] = useState()
  const [chats, setChats] = useState([])
  const [socket] = useState(() => io(":8000"))

  useEffect(() => {
    socket.on("post chat",async msg =>{
      await setChats(prevmsgs => {return [...prevmsgs,msg]})
    })

    return ()=> socket.disconnect(true)

  },[socket])

  useEffect(()=>{
    axios.get(`http://localhost:8000/api/user/${id}`)
        .then(res=>{
          setUser(res.data.User)
          console.log(res.data)
        })
        .catch(err=> {
            console.log("errorrrrrr",err)
        })
}, [])

  useEffect(() => {
    axios.get(`http://localhost:8000/api/chatroom/${room}`)
    .then(response => {
      setChatRoom(response.data.ChatRoom)
    })
    .catch(err => {
      console.log(err)
    })
  })
  return (
    <div>
      <h1></h1>
      <Chatrooms chats={chats}/>
      <ChatForm socket={socket} user={user}/>
    </div>
  )
};

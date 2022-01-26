
import React from 'react';


export const Chatrooms = ({chats}) => {
    
    

    
  return( 
  <div>
    {
      chats.map((chat, i) => {
        return (
          <h5 key={i}>{chat}</h5>
        )
      })
    }
     

  </div>
)}

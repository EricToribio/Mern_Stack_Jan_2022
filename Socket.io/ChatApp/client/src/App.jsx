import './App.css';
import React, {useState, useEffect} from 'react'
import io from 'socket.io-client'
function App() {
  const [socket] = useState(() => io(":8000"))
  const [input,setInput] = useState('')
  const [messages, setMessages] = useState([])
  useEffect(() =>  {
    console.log("am I running? Then catch me");
    socket.on('hostChat', newMsg => {
      setMessages(prevMsgs => {
        return [...prevMsgs, newMsg]})

    })
    return () => socket.disconnect(true)

  }, [socket])
  const onSubmitHandler = (e) => {
    e.preventDefault()
    socket.emit('chat', input)
  }
  return (
    <div className="App">
      <form onSubmit={onSubmitHandler}>
        <input type="text" name='msg' autoComplete='off' onChange={(e) => setInput(e.target.value)}/>
        <input type="submit" value="Submit" />
      </form>
      {
        messages.map((item,i) => {
          return (
            <h4 key={i}>{item}</h4>
          )
        })
      }
    </div>
  );
}

export default App;

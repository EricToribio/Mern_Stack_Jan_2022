import React,{ useState } from 'react';


const ChatForm = ({ socket, user }) => {
    const [input, setInput] = useState()
    

    const onSubmitHandler = (e) => {
        e.preventDefault()
        let newChat = `${user.username} : ${input}`
        socket.emit('chat', newChat)
       

    }
    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <input type="text" autoComplete='off' onChange={(e) => setInput(e.target.value)} />
                <button>Send</button>
            </form>
        </div>
    )
};

export default ChatForm;

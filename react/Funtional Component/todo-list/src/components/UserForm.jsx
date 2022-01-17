import React,{useState} from "react";

const UserForm = props => {
    const [todo, setTodo] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        const newTask = {
            task : todo ,
            completed : false
        }
        props.listUpdate(newTask)
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="list-input">Enter Task </label>
                <input type="text" onChange={(e) => setTodo(e.target.value)} 
                value={todo} />
                <button disabled={todo.length < 3 }>Submit</button>
            </form>
        </div>
    )
}

export default UserForm
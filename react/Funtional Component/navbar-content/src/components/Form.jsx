import React, {useContext, useState} from "react";
import UserContext from "../context/UserContext";

const Form = (props) => {
    const [input ,setInput] = useState('')
    const context = useContext(UserContext)
    console.log(context)

    const handleSubmit = (e) => {
        e.preventDefault()
        context.setVal(input)
    }
    
    return(
        <form className="mx-auto d-flex gap-3 " onSubmit={handleSubmit} >
            <label htmlFor="name">Enter Name</label>
            <input  type="text" name="name" value={input} 
            onChange={(e) => setInput(e.target.value)} />
            <button>Submit</button>
        </form>
    )
}
export default Form
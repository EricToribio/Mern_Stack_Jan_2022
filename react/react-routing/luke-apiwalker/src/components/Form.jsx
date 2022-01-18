import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
const Form = () => {
    const [param,setParam] = useState('people')
    const [id, setId] = useState(1)
    const history = useHistory()

    const submitHandler = (e) =>{
        e.preventDefault()
        history.push(`/${param}/${id}`)
    }
    
    return (
        <div className='mx-auto'>
            <form className='d-flex gap-4 p-4 ' onSubmit={submitHandler}>
                <label htmlFor="params">Search For: </label>
                <select name="params" onChange={(e) => setParam(e.target.value)}>
                    <option value="people">People</option>
                    <option value="planets">Planet</option>
                    
                </select>
                
                    <label htmlFor="id">ID: </label>
                    <input type="number" name="id" id="id" value={id}
                    onChange={(e) => setId(e.target.value)}/>
                
                <button>Search</button>
            </form>
        </div>
    )
}

export default Form

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios'


const AuthorForm = () => {
    const history = useHistory()
    const [name, setName] = useState("")
    const [errors, setErrors] = useState([])
    const onSubmitHandler = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/authors/new", {
            name: name
        })
            .then(res => {console.log(res)
            history.push("/")})
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
        <div className='card col-3 mx-auto bg-secondary'>
            <h1>Add Author </h1>
            <form onSubmit={(e) => onSubmitHandler(e)}>
                {errors.map((err, index) => <p key={index}>{err}</p>)}
                <div className='form-group p-4'>
                    <label className='form-label' htmlFor="name"><h3>Name :</h3></label>
                    <input className='form-control' type="text" value={name} name="name" onChange={(e) => setName(e.target.value)} />
                    {
                        name.length!=0 && name.length < 3?
                            <div className='bg-dark mt-3'>
                                <p style={{ color: 'red' }}>First Name must be at least 2 Characters</p>
                            </div> :
                            ''
                    }
                </div>
                <div className='d-flex justify-content-center gap-3 mb-3'>
                    <button className='btn btn-success' disabled={name < 3 }>Submit</button>
                    <button className='btn btn-warning' onClick={(e) => history.push("/")}>Cancel</button>
                </div>
            </form>
        </div>
    )
}


export default AuthorForm;


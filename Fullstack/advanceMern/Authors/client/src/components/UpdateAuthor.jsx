import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import { useParams } from 'react-router-dom';

const UpdateAuthorForm = () => {
    const history = useHistory()
    const [name, setName] = useState("")
    const [errors, setErrors] = useState([])
    const {id} = useParams()
    const [deleteData , setDeleteData] = useState()
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
        .then(response => {
            setName(response.data.Author.name)
        } ).catch(err => {
            console.log(err)
        })
    },[deleteData])



    const onSubmitHandler = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/authors/update/${id}`, {
            name: name
        })
            .then(res => {console.log(res)
            
                history.push("/")
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

    const onDeleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/authors/delete/${id}`)
        .then(response => {
            console.log(response)
            setDeleteData(response)      
        })
        .catch(err => console.log(err))
    }

    return (
        <div className='card col-3 mx-auto bg-secondary '>
            <h1 className='mt-3'>Update Author </h1>
           
           <form onSubmit={(e) => onSubmitHandler(e)}>
                {errors.map((err, index) => <p key={index}>{err}</p>)}
                <div className='form-group p-4'>
                    <label className='form-label'  htmlFor="name">Name :</label>
                    <input className='form-control'value={name} type="text"  name="name" onChange={(e) => setName(e.target.value)} />
                </div>
                <div className='mb-3'>
                    <button className='btn btn-success' >Submit</button>
                    </div>
            </form>
           
        
            <div className='d-flex gap-3 justify-content-center'>
                <button className='btn btn-warning' onClick={(e) => history.push("/")}>Cancel</button>
                <button className="btn btn-danger text-dark" onClick={(e) => onDeleteHandler(id)}>Delete</button>
            </div>
        </div>
    )
}


export default UpdateAuthorForm;


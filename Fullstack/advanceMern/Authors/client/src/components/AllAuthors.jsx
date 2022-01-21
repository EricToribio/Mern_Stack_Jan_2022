
import axios from "axios";
import React, {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";

const AllAuthors = () => {
    const [authors, setAuthors] = useState([])
    const history = useHistory()
    const [deleteData , setDeleteData] = useState()
    

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
        .then(response => {
            setAuthors(response.data.Author)
        } ).catch(err => {
            console.log(err)
        })
    },[deleteData])
    
    const onDeleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/authors/delete/${id}`)
        .then(response => {
            console.log(response)
            setDeleteData(response)      
        })
        .catch(err => console.log(err))
    }
    const onEditHandler = (id) => {
        history.push(`/${id}/edit`)
    }
    

    return(
        <div className=" card bg-secondary col-4 mx-auto mt-3">
            <h1>Favorite Authors</h1>
            <a className="link-light" href="/new">Add a Author</a>
            <div className=" mx-auto mt-3">
                <table className="table table-dark table-striped ">
                    <thead>
                        <tr>
                            <th>Authors</th>
                            <th>Actions Available</th>
                        </tr>
                    </thead>
                    <tbody>


                {
                    authors.map((author, i) => {
                        return (
                        <tr key={i}>
                            <td  >  {author.name.toUpperCase()}</td>
                            <td className="d-flex gap-2 justify-content-center">
                                <button className="btn btn-danger text-dark" onClick={(e) => onDeleteHandler(author._id)}>Delete</button>
                                <button className="btn btn-warning text-dark" onClick={(e) => onEditHandler(author._id)}>Edit</button>
                            </td>
                        </tr>
                
                
                
                
                    )})
                }
                    </tbody>
                </table>
            </div>
        </div>
    )
        }
export default AllAuthors
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const ShowOneProduct = () => {
    const { id } = useParams()
    const [oneProduct, setOneProduct] = useState()
    const history = useHistory()
    const apiCall = `http://localhost:8000/api/product/` + id


    console.log(apiCall)
    useEffect(() => {
        console.log("test")
        axios.get(apiCall)
            .then(response => {
                setOneProduct(response.data.product)
                console.log(response.data.product)
            }).catch(err => {
                console.log(err)
            })
    }, [])
    const handleDelete = () => {
        axios.delete(`http://localhost:8000/api/product/delete/${id}`)
            .then(response => {
                console.log(response)
                    
            })
            .catch(err => console.log(err))

        history.push("/")
    }
    const onEditHandler = () => {
        history.push(`/${id}/edit`)
    }


    return (
        <div>
            {oneProduct ?
                <div>
                    <h2>{oneProduct.title}</h2>
                    <h4>{oneProduct.price}</h4>
                    <h4>{oneProduct.description}</h4>
                    <div className='d-flex mx-auto'>
                    <button className='btn btn-warning' onClick={(e) => onEditHandler()}>Edit</button>
                    <button className='btn btn-danger' onClick={(e) => handleDelete()}>Delete</button>
                    </div>
                </div> :
                <div></div>
            }
        </div>
    )
}

export default ShowOneProduct;

rs

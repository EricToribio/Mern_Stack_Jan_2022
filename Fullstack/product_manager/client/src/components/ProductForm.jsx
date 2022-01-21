import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import axios from 'axios'


const ProductForm = () => {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState()

    const onSubmitHandler = (e) => {
        e.preventDefault()
        
        axios.post("http://localhost:8000/api/product/new",{
                title :title,
                price  : price,
                description : description
            })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Product Manager</h1>
            <form onSubmit={(e) => onSubmitHandler(e)}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <input type="number" name="price" onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <input type="text" name="description" onChange={(e) => setDescription(e.target.value)} />
                </div>
                <button disabled={!title || price < 1  || !description}>Submit</button>
            </form>
        </div>
    )
};

export default ProductForm;

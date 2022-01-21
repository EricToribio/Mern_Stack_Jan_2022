import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const UpdateProducts = () => {
    const [title, setTitle] = useState()
    const [price, setPrice] = useState()
    const [description, setDescription] = useState("")
    const { id } = useParams()
    const history = useHistory()
    const apiCall = `http://localhost:8000/api/product/` + id
    const [oneProduct, setOneProduct] = useState()

    // useEffect(() => {
    //     axios.get(apiCall)
    //         .then(response => {
    //             setTitle(response.data.products.title)
    //             setPrice(response.data.product.price)
    //             setDescription(response.data.product.description)
    //         }).catch(err => {
    //             console.log(err)
    //         }, [])
    // })
    useEffect(() => {
        console.log("test")
        axios.get(apiCall)
            .then(response => {
                setOneProduct(response.data.product)
                
            }).catch(err => {
                console.log(err)
            })
    }, [])

    const onSubmitHandler = (e) => {
        e.preventDefault()
        !title ?
        setTitle(oneProduct.title):
        !price ?
        setPrice(oneProduct.price):
        !description ?
        setDescription(oneProduct.description):
        axios.put(`http://localhost:8000/api/product/update/${id}`, {
            title: title,
            price: price,
            description: description
        })
            .then(response => console.log(response))
            .catch(err => console.log(err))

        history.push(`/${id}`)
    }
    
   
    
    




    return (
        <div>
            {
                oneProduct ?

                    <form onSubmit={(e) => onSubmitHandler(e)}>
                        <div>
                            <label htmlFor="title">Title</label>
                            <input type="text" placeholder={oneProduct.title} name="title" onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="price">Price</label>
                            <input type="number" placeholder={oneProduct.price} name="price" onChange={(e) => setPrice(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="description">Description</label>
                            <input type="text" placeholder={oneProduct.description} name="description" onChange={(e) => setDescription(e.target.value)} />
                        </div>
                        <button >Submit</button>
                    </form>
                    :
                    <div></div>

            }
        </div>
    )
};

export default UpdateProducts;

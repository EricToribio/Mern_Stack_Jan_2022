import axios from "axios";
import React, {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";

const AllProducts = () => {
    const [ products, setProducts] = useState([])
    const history = useHistory()
    const [deleteData , setDeleteData] = useState()
    

    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
        .then(response => {
            setProducts(response.data.product)
        } ).catch(err => {
            console.log(err)
        })
    },[deleteData])
    
    const onViewHandler = (id) => {
        console.log(id)
        history.push(`/${id}`)
    }
    const onDeleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/product/delete/${id}`)
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
        <div className=" ">
            {
                products.map((product, i) => {
                    return (
                    <div className="d-flex justify-content-center gap-2 m-3">
                        <p key={i} >  {product.title.toUpperCase()}</p>
                        <div>
                        <button className="btn btn-primary" onClick={(e) => onViewHandler(product._id)}>View Product</button>
                        <button className="btn btn-danger" onClick={(e) => onDeleteHandler(product._id)}>Delete</button>
                        <button className="btn btn-warning" onClick={(e) => onEditHandler(product._id)}>Edit</button>
                        </div>
                        
                    </div>
                    
                )})
            }
        </div>
    )
        }
export default AllProducts
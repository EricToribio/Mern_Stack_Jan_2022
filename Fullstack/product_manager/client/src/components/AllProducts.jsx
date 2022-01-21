import axios from "axios";
import React, {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";

const AllProducts = () => {
    const [ products, setProducts] = useState([])
    const history = useHistory()
    

    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
        .then(response => {
            setProducts(response.data.product)
        } ).catch(err => {
            console.log(err)
        })
    },[])
    
    const onClickHandler = (id) => {
        console.log(id)
        history.push(`/${id}`)
    }
    
    return(
        <div className=" ">
            {
                products.map((product, i) => {
                    return (
                    <div className="d-flex justify-content-center gap-2 m-3">
                        <p key={i} >  {product.title.toUpperCase()}</p>
                        <button className="btn btn-primary" onClick={(e) => onClickHandler(product._id)}>View Product</button>
                    </div>
                    
                )})
            }
        </div>
    )
        }
export default AllProducts
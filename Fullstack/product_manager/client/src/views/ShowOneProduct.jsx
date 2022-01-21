import axios from 'axios';
import React, {useEffect , useState} from 'react';
import { useParams } from 'react-router-dom';

const ShowOneProduct = () => {
    const {id} = useParams()
    const [oneProduct, setOneProduct] = useState()
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
    },[])
    

    return (
            <div>
                {oneProduct?
                    <div>
                    <h2>{oneProduct.title}</h2>
                    <h4>{oneProduct.price}</h4>
                    <h4>{oneProduct.description}</h4>
                </div> :
                <div></div>
                }
            </div>
    )
}

export default ShowOneProduct;

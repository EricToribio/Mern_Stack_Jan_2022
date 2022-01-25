import React, {useState} from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';


const Login = () => {
    const [errors, setErrors] = useState({
        username:"",
        email:"",
        password:"",
        confirm:""
    })

    const [loginInfo, setLoginInfo] = useState({ 
        email:"",
        password:"",
    })
    const history = useHistory()


    const loginChangeHandler = (e)=>{
        setLoginInfo({
            ...loginInfo,
            [e.target.name]:e.target.value
        })
    }

    const login = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/login", loginInfo, {withCredentials:true} )
            .then(res=>{
                console.log("LOGGGIN IN RESPONSE", res)
                if(res.data.msg == "success!"){
                    history.push("/dashboard")
                }
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


    return (
        <div className="container">
            <h2>Login below</h2>
            <Link to="/register">Register Here</Link>
        <form onSubmit= {login}>
            <div className="form-group">
                <label>Email</label>
                <input onChange = {loginChangeHandler} type="text" className="form-control" name= 'email' />
                {errors.email? <p className="text-danger">{errors.email.message}</p>: ""}

            </div>
            <div className="form-group">
                <label>Password</label>
                <input onChange = {loginChangeHandler} type="password" className="form-control" name= 'password' />
                {errors.password? <p className="text-danger">{errors.password.message}</p>: ""}

            </div>
            
            <input type="submit" value="Login" className= "btn btn-primary" />
        </form>
    </div>
    );
};


export default Login;
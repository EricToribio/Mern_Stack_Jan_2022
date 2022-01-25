import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';



const Dashboard = () => {
    const [loggedinuser, setLoggedInUser] = useState({})
    const history = useHistory()


    useEffect(()=>{
        axios.get("http://localhost:8000/api/users/getloggedinuser", {withCredentials:true})
            .then(res=>{
                console.log("logged in user info", res)
                setLoggedInUser(res.data)
            })
            .catch(err=> {
                history.push("/")
                console.log("errorrrrrr",err)
            })
    }, [])
    return (
        <div>
            <h1>Welcome, {loggedinuser.username} you made it to the dashboard!</h1>
        </div>
    );
};


export default Dashboard;
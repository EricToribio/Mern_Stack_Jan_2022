import React, { useState } from 'react';


const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("")
    
    const createUser = (e) => {

        const newUser = { firstName, lastName, email, password, confirmPassword };
    };

    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={(e) => setFirstName(e.target.value)} />
                    {
                        firstName.length <= 2 ?
                            <p style={{ color: 'red' }}>First Name must be at least 2 Characters</p> :
                            ''
                    }
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={(e) => setLastName(e.target.value)} />
                    {
                        lastName.length <= 2 ?
                            <p style={{ color: 'red' }}>Last Name must be at least 2 Characters</p> :
                            ''
                    }
                </div>
                <div>
                    <label>Email Address: </label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} />
                    {
                        email.length <= 2 ?
                            <p style={{ color: 'red' }}>Email must be at least 2 Characters </p> :
                            ''
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={(e) => setPassword(e.target.value)} />
                    {
                        password.length <= 8 ?
                            <p style={{ color: 'red' }}>Password must be at least 8 Characters </p> :
                            ''
                    }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="text" onChange={(e) => setConfirmPassword(e.target.value)} />
                    {
                        confirmPassword != password ?
                            <p style={{ color: 'red' }}>Passwords do not match</p> :
                            ''
                    }
                </div>

            </form>


        </div>

    );
};

export default UserForm;

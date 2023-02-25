import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function AddUser(){

    let navigate = useNavigate()

    const [user, setUser] = useState({
        name:"",
        username:"",
        email:"",
    });

    const{name, username, email} = user;  //This code uses object destructuring to create three variables name, username, and email 

    const onInputChange= (e) => {
        setUser(
            {...user,
                [e.target.name]:e.target.value  //value is input value from onChange. and name id dynamic set value for "name='name'"
            })
    }

    const onSubmit=async(e) => {
        e.preventDefault(); //for not show parameter in URL
        await axios.post("http://localhost:8080/users/create", user)
        navigate("/")  //await for wait request to complete, when complete, page will navigate to HomePage
    }
    
    return(
        <div className="container">
            <form onSubmit={(e) => onSubmit(e)}>
                <div className="form-row mt-3">
                <div className="form-group " style={{ textAlign: 'left'}}>
                    <label htmlFor="inputName" className="text-left" style={{ textAlign: 'left'}}>Name</label>
                    <input 
                        type="text" 
                        className="form-control"
                        id="inputName" 
                        placeholder="Enter your name" 
                        name='name'
                        value={name}
                        onChange={(e)=>onInputChange(e)}
                    />
                </div>
                <div className="form-group mt-3" style={{ textAlign: 'left'}}>
                    <label htmlFor="inputUsername">Username</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="inputUsername" 
                        placeholder="Enter your username" 
                        name='username'
                        value={username}
                        onChange={(e)=>onInputChange(e)}
                    />
                </div>
                </div>
                <div className="form-group mt-3" style={{ textAlign: 'left'}}>
                    <label htmlFor="Email">Email</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="inputEmail" 
                        placeholder="Enter your email" 
                        name='email'
                        value={email}
                        onChange={(e)=>onInputChange(e)}
                    />
                </div>
                <button type="submit" className="btn btn-primary mt-3">Submit</button>
                <Link type="submit" className="btn btn-danger mt-3 mx-3" to={"/"}>Cancle</Link>
            </form>
        </div>

    )
}
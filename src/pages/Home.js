import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { Button } from 'bootstrap';

function Home() {

    const [users, setUsers] = useState([])
    const {id} = useParams()

    useEffect(()=> {
        loadUsers();
    },[])  //use ",[]" for run one time only

    const loadUsers = async() => {
        const result = await axios.get("http://localhost:8080/users/users-list");
        // console.log(result.data);
        setUsers(result.data);
    }

    // delete-user
    const deleteUser = async (id)=> {
        await axios.delete(`http://localhost:8080/users/delete/${id}`)
        loadUsers()
    }

    return ( 
        <div className='container'>
            <div className='py-4'>
                <table className="table border shadow">
                    <thead style={{ textAlign: 'left'}}>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody style={{ textAlign: 'left'}}>
                        {
                            users.map((user, index)=> (
                                <tr key={index}>
                                    <th scope="row">{index+1}</th>
                                    <td >{user.id}</td>
                                    <td >{user.name}</td>
                                    <td >{user.username}</td>
                                    <td >{user.email}</td>
                                    <td>
                                        <Link className="btn btn-primary mx-1" style={{padding:'3px'}} to={`/viewuser/{user.id}`}>View</Link>
                                        <Link className="btn btn-outline-primary mx-1" style={{padding:'3px'}} to={`/edituser/{user.id}`}>Edit</Link>
                                        <button 
                                            className="btn btn-danger mx-1" style={{padding:'3px'}}
                                            onClick={()=> deleteUser(user.id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
     );
}

export default Home;
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {

    const [users, setUsers] = useState([])

    useEffect(()=> {
        loadUsers();
    },[])  //use ",[]" for run one time only

    const loadUsers = async() => {
        const result = await axios.get("http://localhost:8080/users/users-list");
        // console.log(result.data);
        setUsers(result.data);
    }

    return ( 
        <div className='container'>
            <div className='py-4'>
                <table className="table border shadow">
                    <thead style={{ textAlign: 'left'}}>
                        <tr>
                        <th scope="col">#</th>
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
                                    <td >{user.name}</td>
                                    <td >{user.username}</td>
                                    <td >{user.email}</td>
                                    <td>
                                        <button className='btn btn-primary mx-2'>View</button>
                                        <button className='btn btn-outline-primary mx-2'>Edit</button>
                                        <button className='btn btn-danger mx-2'>Delet</button>
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
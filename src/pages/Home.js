import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {

    const [users, setUsers] = useState([])

    useEffect(()=> {
        loadUsers();
    },[])  //use ",[]" for run one time only

    const loadUsers = async() => {
        const result = await axios.get("http://localhost:8080/users-list");
        console.log(result.data);
    }

    return ( 
        <div className='container'>
            <div className='py-4'>
                <table className="table border shadow">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
     );
}

export default Home;
import React, { useEffect, useState } from "react"
import Config from '../Config'
import { Link } from 'react-router-dom'
import Sidebar from "./Sidebar"


const UserAll = () => {

    const [ users, setUsers ] = useState([])

    useEffect(() => {
        getUserAll();
    },[]);

    const getUserAll = async () => {
        const response = await Config.getUserAll()
        setUsers(response.data)
    }

    return (
        <div className="container bg-light">
            <div className="row">
                <Sidebar />
                <div className="col-sm-9 mt-3 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>ID</th> <th>NAME</th> <th>ACCIÓN</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        !users ? "...loading " : users.map(
                                            (user) => {
                                                return (
                                                    <tr key={user.id}>
                                                        <td>{user.id}</td>
                                                        <td>{user.name}</td>
                                                        <td>
                                                            <Link to={`/admin/user/edit/${user.id}`} className='btn btn-primary'>Editar</Link>
                                                        </td>
                                                    </tr>
                                                )
                                            }
                                        )
                                    }
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UserAll
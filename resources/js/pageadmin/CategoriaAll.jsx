import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'
import Config from '../Config'

const CategoriaAll = () => {

    const [ categorias , setCategorias ] = useState([])

    useEffect(() => {
        _getCategoriaAll();
    },[]);

    const _getCategoriaAll = async () => {
        const response = await Config.getCategoriaAll()
        setCategorias(response.data)
    }

    return (
            <div className="container bg-light">
                <div className="row">
                    <Sidebar />
                    <div className="col-sm-9 mt-3 mb-3">
                        <div className="card">
                            <div className="card-body">
                                <Link to = {'/admin/categoria/create'} className='btn btn-primary'>Agregar Categoria</Link>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>ORDEN</th> <th>NAME</th> <th>ACCIÓN</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            !categorias ? "...loading " : categorias.map(
                                                (categoria) => {
                                                    return (
                                                        <tr key={categoria.id}>
                                                            <td>{categoria.orden}</td>
                                                            <td>{categoria.nombre}</td>
                                                            <td>
                                                                <Link to={`/admin/categoria/edit/${categoria.id}`} className='btn btn-primary'>Editar</Link>
                                                                <button className='btn btn-primary' onClick={() => _deleteCategoriaById(categoria.id)}>Eliminar</button>
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

export default CategoriaAll
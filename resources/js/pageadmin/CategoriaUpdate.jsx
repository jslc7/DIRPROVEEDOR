import React, { useEffect, useState } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import Config from "../Config";
import Sidebar from "./Sidebar";

const CategoriaUpdate = () => {

    const navigate = useNavigate()
    const { id } = useParams();
    const [nombre, setNombre] = useState('')
    const [descripcion, setDescripcion] = useState("")
    const [orden, setOrden] = useState("")
    const [menu, setMenu] = useState(false)
    const [urlfoto, setUrlfoto] = useState("foto.jpg")
    const [file, setFile] = useState("")

    const handleInputChange = async(e) => {
        let files = e.target.files
        let reader = new FileReader();
        reader.readAsDataURL(files[0])
        reader.onload = (e) => {
            setFile(e.target.result)
        }
    }

    useEffect (() => {
        const _getCategoriaUpdate = async() => {
            Config.getCategoriaById(id)
            .then(({data}) => {
                setNombre(data.nombre)
                setDescripcion(data.descripcion)
                setOrden(data.orden)
                setUrlfoto(data.urlfoto)
                setMenu(data.menu)
            })
        };
        _getCategoriaUpdate();
    },[])

    const submitUpdate = async (ev) => {
        ev.preventDefault()
        await Config.getCategoriaUpdate({nombre, descripcion, orden, file, menu}, id)
        navigate('/admin/categoria')
    }

    return (
        <div className="container bg-light">
            <div className='row'>
                <Sidebar/>
                    <div className="col-sm-9 mt-3 mb-3">
                        <div className="card">
                            <div className="card-body">
                                <form onSubmit = {submitUpdate}>
                                    <div className='form-group row'>
                                            <div className="mt-3">
                                                <div className="form-check form-switch">
                                                    <input className="form-check-input" checked = {menu} onChange={(e) => setMenu(!menu)} type="checkbox" role="switch" id="menu" />
                                                    <label className="form-check-label" htmlFor = 'menu'>Portada?</label> 
                                                </div>
                                            </div>
                                        <div className="col-sm-8">
                                            <label>Nombre</label>
                                            <input className='form-control' value={nombre} onChange={(e) = setNombre(e.target.value)} type="text" />
                                        </div>
                                        <div className="col-sm-4">
                                        <label>Orden</label>
                                            <input className='form-control' value={orden} onChange={(e) = setOrden(e.target.value)} type="number" />
                                        </div>
                                    </div>
                                        <div className='mt-3'>
                                            <label>Descripcion</label>
                                            <textarea className='form-control' value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
                                        </div>
                                        <div className='mt-3'>
                                            <label>Imagen</label>
                                            <img src={"/img/categoria/" + urlfoto } className="img-fluid img-thumbnail" />
                                            <textarea className='form-control' type = "file" onChange={(e) => handleInputChange(e)} />
                                        </div>
                                        <div className="btn-group mt-3">
                                            <Link to = {-1} className="btn btn-secondary"> - Back</Link>
                                            <button type='submit' className="btn btn-primary">Actualizar Categoria</button>
                                        </div>
                                </form>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default CategoriaUpdate
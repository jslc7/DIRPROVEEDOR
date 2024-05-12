import React, { useEffect, useState } from 'react'
import AuthUser from './AuthUser'
import { useNavigate } from 'react-router-dom'
import Config from '../Config'


const Register = () => {

    const { getToken } = AuthUser()
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const navigate = useNavigate()

    useEffect(()=>{
        if(getToken()){
            navigate('/')
        }
    },[])

    const submitRegistro=async(e) => {
        e.preventDefault();

        Config.getRegister({name,email,password})
        .then(({data})=>{
            if(data.success){
                navigate('/login')
            }
        })

    }

    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-4">
                    <div className="card mt-5 mb-5">
                        <div className="card-body">
                            <h1 className='text-center fw-bolder'>REGISTRO</h1>
                            <input type="text" className='form-control mt-3' placeholder="Nombre:" value={name} onChange={(e)=>setName(e.target.value)} required />

                            <input type="email" className='form-control mt-3' placeholder="Email:" value={email} onChange={(e)=>setEmail(e.target.value)} required />

                            <input type="password" className='form-control mt-3' placeholder="Password:" value={password} onChange={(e)=>setPassword(e.target.value)} required/>

                            <button onClick={ submitRegistro } className='btn btn-primary w-100 mt-3'>ENVIAR</button>
                            <p className='text-center mt-3'> <a href="#" className='small text-decoration-none'>Términos y Condicones</a></p>

                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
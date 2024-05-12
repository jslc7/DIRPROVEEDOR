import React from 'react'
import AuthUser from '../pageauth/AuthUser'
import Config from '../Config'

    const Navbar = () => {

        const { getRol, getLogout, getToken } = AuthUser();

        const logoutUser = () =>{
            Config.getLogout('/logout')
            .then(response =>{
                getLogout();
            }).catch(error => {
                console.error(error);
            })
        }

        const renderLinks = () =>{
            if(getToken()){
                return(
                    <>
                        <li className="nav-item">
                        <a className="nav-link" href={`/${getRol()}`}>Administración</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/" onClick={logoutUser}>Logout</a>
                        </li>
                    </>
                )
                } else{
                    return(
                    <>
                        <li className="nav-item">
                        <a className="nav-link" href="/login" >Login</a>
                        </li>
                    </>
                    )
                }
        }

        return(
            <nav className="navbar navbar-expand-lg bg-light">
                <div className='container'>
                <a className="navbar-brand" href="/">DIRPROVEED</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Inicio </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Materiales Eléctricos
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="/">Conductores</a>
                                <a className="dropdown-item" href="/">Iluminación Led</a>
                                <a className="dropdown-item" href="/">Tableros</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Acerca de Nosotros</a>
                            </li>
                            
                            <li className="nav-item">
                                <a className="nav-link" href="/categorias">Categorías</a>
                            </li>
                        </ul>

                            <ul className="navbar-nav ms-auto">
                            { renderLinks() }
                            </ul>
                    </div>
                </div>
            </nav>
        )
    }

export default Navbar
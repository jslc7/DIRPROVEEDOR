import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'

// LAYOUTS
import LayoutPublic from './layouts/LayoutPublic'
import LayoutAdmin from './layouts/LayoutAdmin'
import LayoutClient from './layouts/LayoutClient'

// PUBLIC
import PageHome from './pagepublic/PageHome'
import ProtectedRoutes from './pageauth/ProtectedRoutes'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// AUTH
import Login from './pageauth/Login'
import Register from './pageauth/Register'
import PanelAdmin from './pageadmin/PanelAdmin'
import PanelClient from './pageclient/PanelClient'

// ROL ADMIN
import UserAll from './pageadmin/UserAll'
import UserUpdate from './pageadmin/UserUpdate'
import CategoriaAll from './pageadmin/CategoriaAll'
import CategoriaStore from './pageadmin/CategoriaStore'
import CategoriaUpdate from './pageadmin/CategoriaUpdate'

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path = "/" element ={<LayoutPublic/>} >
                    <Route index element ={<PageHome/>} />
                    <Route path ='/login' element ={<Login/>} />
                    <Route path ='/register' element ={<Register/>} />

                </Route>

                    <Route element ={<ProtectedRoutes />} >
                        <Route path ="/admin" element ={<LayoutAdmin/>} >
                            <Route index element = {<PanelAdmin/>} />
                            <Route path ='user' element ={<UserAll/>} />
                            <Route path ='user/edit/:id' element ={<UserUpdate/>} />
                            <Route path ='categoria' element ={<CategoriaAll/>} />
                            <Route path ='categoria/create' element ={<CategoriaStore />} />
                            <Route path ='categoria/edit/:id' element ={<CategoriaUpdate/>} />

                        </Route>

                        <Route path = "/client" element = {<LayoutClient/>}>
                            <Route index element = {<PageHome/>} />
                            <Route index element = {<PanelClient/>} />

                        </Route>
                    </Route>
            </Routes>
        </Router>
    )
}


export default App


if (document.getElementById('root')) {
    const Index = ReactDOM.createRoot(document.getElementById("root"));

    Index.render(
            <App/>
    )
}
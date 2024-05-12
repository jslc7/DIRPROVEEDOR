import axios from "axios";


const base_api_url = "http://localhost:8000/api/v1";
///Route

export default {
    //AUTH
    getRegister:(data)=>axios.post(`${base_api_url}/auth/register`,data),
    getLogin:(data) => axios.post(`${base_api_url}/auth/login`,data),
    getLogout:(data) => axios.post(`${base_api_url}/auth/logout`,data),

    // ROL ADMIN
    getUserAll:()=>axios.get(`${base_api_url}/admin/user`),
    getUserById:(id)=>axios.get(`${base_api_url}/admin/user/${id}`),
    getUserUpdate:(data, id)=>axios.put(`${base_api_url}/admin/user/${id}`,data),

    getCategoriaAll:()=>axios.get(`${base_api_url}/admin/categoria`),
    getCategoriaStore:(data)=>axios.post(`${base_api_url}/admin/categoria`,data),
    getCategoriaById:(id)=>axios.get(`${base_api_url}/admin/categoria/${id}`),
    getCategoriaUpdate:(data, id)=>axios.put(`${base_api_url}/admin/categoria/${id}`,data),
    getCategoriaDeleteById:(id)=>axios.delete(`${base_api_url}/admin/categoria/${id}`),
}
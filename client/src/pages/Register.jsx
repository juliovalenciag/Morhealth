import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {

    const [inputs, setInputs] = useState({
        username: "",
        email:"",
        password:"",
    })

    const [err,setError] = useState(null);

    const navigate = useNavigate()

    const handleChange = e =>{
        setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
    }

    const handleSubmitR = async e =>{
        e.preventDefault()
        try{
        await axios.post("/auth/registro", inputs)
        navigate("/login");
        } catch(err){
            setError(err.response.data);
        }
    }

    return (
        <div className='auth'>
            <h1>Registro</h1>
            <input required type="text" placeholder='username' name='username' onChange={handleChange}/>
            <input required type="email" placeholder='email' name='email' onChange={handleChange}/>
            <input required type="password" placeholder='password' name='password' onChange={handleChange}/>
            <button onClick={handleSubmitR}>Registrar</button>

            {err && <p>{err}</p>}
            <span>Ya tienes cuenta? <Link to='/login'>Inicia Sesión</Link></span>
            <p>Quieres volver al menú?</p>
            <span><Link to='/'>Regresar al menú</Link></span>
        </div>
    )
}

export default Register

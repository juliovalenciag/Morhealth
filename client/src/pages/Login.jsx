import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { AuthContext } from '../context/authContext'
const Login = () => {

    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        password: "",
    })

    const [err, setError] = useState(null);

    const navigate = useNavigate();

    const { login } = useContext(AuthContext);


    const handleChange = e => {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            await login(inputs)
            navigate("/morhealth");
        } catch (err) {
            setError(err.response.data);
        }
    }

    return (
        <section class="relative flex flex-wrap lg:h-screen lg:items-center">
            <div class="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
                <div class="mx-auto max-w-lg text-center">
                    <h1 class="text-2xl font-bold sm:text-3xl">Iniciar Sesión</h1>
                    <p class="mt-4 text-gray-500">
                        Tu historia comienza con morse
                    </p>
                </div>
                <form action="" class="mx-auto mt-8 mb-0 max-w-md space-y-4">
                    <div className='auth'>

                        <div class="relative">
                            <label for="username" class="sr-only">Usuario</label>
                            <input required type="text" placeholder='Usuario' name='username' onChange={handleChange} class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm" />

                        </div>

                        <label for="Contrase" class="sr-only">Contraseña</label>
                        <div class="relative">
                            <input required type="password" placeholder='Contraseña' name='password' onChange={handleChange} class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm" />
                        </div>
                        <button onClick={handleSubmit} class="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white">Iniciar Sesión</button>

                        {err && <p>{err}</p>}
                        <div class="flex items-center justify-between">

                            <p class="text-sm text-gray-500">
                            ¿No tienes cuenta?
                            <Link class="underline" to='/registro'>Registrate</Link>
                            </p>
                            
                            
                        </div>
                    </div>


                </form>

            </div>

            <div class="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
    <img
      alt="Welcome"
      src="https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
      class="absolute inset-0 h-full w-full object-cover"
    />
  </div>
        </section>
    )
}

export default Login

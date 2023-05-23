import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import mhlogo from './../../assets/logo/morhealthlogo.png';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import axios, { Axios } from 'axios';
import { AuthContext } from '../../context/authContext'
import { v } from '../../styles/variables';
import * as Yup from 'yup';

const LoginPage = () => {

    axios.defaults.withCredentials = true;

    const API_URL = "http://localhost:8800/api/auth";
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [lastname_p, setLastname_p] = useState("");
    const [lastname_m, setLastname_m] = useState("");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");
    const [loginStatus, setLoginStatus] = useState("");
    const [registerStatus, setRegisterStatus] = useState("");

    const apiClient = axios.create({
        baseURL: API_URL,
    });

    const [loginInputs, setLoginInputs] = useState({
        username: "",
        password: "",
    });


    const [registerInputs, setRegisterInputs] = useState({
        username: "",
        password: "",
        email: "",
        name: "",
        lastname_p: "",
        lastname_m: "",
        gender: "",
        age: ""
    });
    const [err, setError] = useState(null);
    const [ageError, setAgeError] = useState(null);
    const { login } = useContext(AuthContext);
    const [signIn, toggle] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [activeRegistration, setActiveRegistration] = useState("user");

    const registerFunction = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/register", {
            username: username,
            password: password,
            email: email,
            name: name,
            lastname_m: lastname_m,
            lastname_p: lastname_p,
            age: age,
            gender: gender,
        }).then((response) => {
            if (response.data.message) {
                setRegisterStatus(response.data.message);
            } else {
                setRegisterStatus("Cuenta creada correctamente")
            }
        })

    }
    const loginFunction = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/login", {
            username: username,
            password: password,
        }).then((response) => {
            if (response.data.message) {
                setLoginStatus(response.data.message);
            } else {
                setLoginStatus(response.data[0].email);
            }
        })
    }


    const showUserRegistration = () => {
        setActiveRegistration("user");
        toggle(false);
    };
    const showProfessionalRegistration = () => {
        setActiveRegistration("professional");
        toggle(false);
    };
    const togglePasswordVisibilityOn = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setShowPassword(true);
    };

    const togglePasswordVisibilityOff = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setShowPassword(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginInputs(prev => ({ ...prev, [name]: value }));
        if (name === "age") {
            if (value < 15 || value > 64) {
                setAgeError("La edad debe estar entre 15 y 64 años");
            } else {
                setAgeError(null);
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Inputs before submit:', loginInputs);

        const requestBody = {
            username: loginInputs.username,
            password: e.target.elements.password.value
        };

        try {
            const response = await apiClient.post("/login", requestBody);
            if (response.data) {
                login(response.data);
                navigate("/morhealth");
            } else {
                throw new Error("Usuario o contraseña incorrectos");
            }
        } catch (err) {
            if (err.response) {
                setError(`Error: ${err.response.data.message || err.response.data}`);
            } else {
                setError(err.message || 'Error inesperado');
            }
        }
    };


    const handleSubmitR = async e => {
        e.preventDefault();
        try {
            console.log('RegisterInputs before submit:', registerInputs); // Debug line
            const response = await apiClient.post("/registro", {
                username: registerInputs.username,
                name: registerInputs.name,
                email: registerInputs.email,
                password: registerInputs.password,
                lastname_p: registerInputs.lastname_p,
                lastname_m: registerInputs.lastname_m,
                gender: registerInputs.gender,
                age: registerInputs.age,
            });
            if (response.status === 200) {
                toggle(true);
            } else {
                setError(`Error: ${response.status}`);
            }
        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                setError(err.errors.join(', '));
            } else if (err.response && err.response.status === 409) {
                setError('Usuario ya existe');
            } else {
                setError(err.message || 'Error inesperado');
            }
        }
    }



    return (
        <Container>


            <SignUpContainer signIn={signIn}>
                <SesionForm onSubmit={(e) => handleSubmitR(e, !signIn)}>

                    {
                        activeRegistration === "user" ? (
                            <>
                                <SesionTitle>Registro de usuario</SesionTitle>
                                <SesionInput required type="text" placeholder='Nombre' name='name' onChange={(e) => { setName(e.target.value) }}></SesionInput>
                                <SesionInput required type="text" placeholder='Apellido paterno' name='lastname_p' onChange={(e) => { setLastname_p(e.target.value) }}></SesionInput>
                                <SesionInput required type="text" placeholder='Apellido materno' name='lastname_m' onChange={(e) => { setLastname_m(e.target.value) }}></SesionInput>
                                <SesionInput
                                    required
                                    type="number"
                                    placeholder="Edad"
                                    name="age"
                                    min="15"
                                    max="64"
                                    onChange={(e) => { setAge(e.target.value) }}
                                />
                                {ageError && <ErrMss>{ageError}</ErrMss>}

                                <Select
                                    required
                                    name="gender"
                                    id="gender"
                                    onChange={(e) => { setGender(e.target.value) }}
                                >
                                    <option value="">Seleccione su género</option>
                                    <option value="1">Hombre</option>
                                    <option value="2">Mujer</option>
                                </Select>

                                <SesionInput required type="text" placeholder='Usuario' name='username' onChange={(e) => { setUsername(e.target.value) }} ></SesionInput>
                                <SesionInput required type="email" placeholder='Email' name='email' onChange={(e) => { setEmail(e.target.value) }}></SesionInput>

                                <InputContainer>
                                    <SesionInput
                                        required
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder='Contraseña'
                                        name='password'
                                        onChange={(e) => { setPassword(e.target.value) }}
                                    />
                                    <ShowPasswordButton
                                        onMouseDown={togglePasswordVisibilityOn}
                                        onMouseUp={togglePasswordVisibilityOff}
                                        onMouseLeave={togglePasswordVisibilityOff}
                                    >
                                        {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                                    </ShowPasswordButton>
                                </InputContainer>
                            </>
                        ) : (
                            <>
                                <SesionTitle>Registro de profesional</SesionTitle>
                                <SesionInput required type="text" placeholder='Nombre' name='name' onChange={(e) => { setName(e.target.value) }}></SesionInput>
                                <SesionInput required type="text" placeholder='Apellido paterno' name='lastname_p' onChange={(e) => { setLastname_p(e.target.value) }}></SesionInput>
                                <SesionInput required type="text" placeholder='Apellido materno' name='lastname_m' onChange={(e) => { setLastname_m(e.target.value) }}></SesionInput>

                                <Select required name="occupation" onChange={(e) => { setGender(e.target.value) }}>
                                    <option value="">Selecciona una ocupación</option>
                                    <option value="Entrenador">Entrenador</option>
                                    <option value="Nutriologo">Nutriologo</option>
                                    <option value="Médico">Médico</option>
                                </Select>

                                <SesionInput required type="text" placeholder='Ubicación' name='location' onChange={(e) => { setName(e.target.value) }}></SesionInput>
                                <SesionInput required type="tel" placeholder='Teléfono' name='phone' maxLength="10" onChange={(e) => { setName(e.target.value) }}></SesionInput>

                                <SesionInput required type="text" placeholder='Usuario' name='username' onChange={(e) => { setUsername(e.target.value) }}></SesionInput>
                                <SesionInput required type="email" placeholder='Email' name='email' onChange={(e) => { setEmail(e.target.value) }}></SesionInput>

                                <InputContainer>
                                    <SesionInput
                                        required
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder='Contraseña'
                                        name='password'
                                        onChange={(e) => { setPassword(e.target.value) }}
                                    />
                                    <ShowPasswordButton
                                        onMouseDown={togglePasswordVisibilityOn}
                                        onMouseUp={togglePasswordVisibilityOff}
                                        onMouseLeave={togglePasswordVisibilityOff}
                                    >
                                        {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                                    </ShowPasswordButton>
                                </InputContainer>
                            </>
                        )
                    }


                    <SesionButton type="submit" onClick={registerFunction}>Registrar</SesionButton>
                    <h2>{registerStatus}</h2>

                    {err && <ErrMss>{err}</ErrMss>}
                </SesionForm>
            </SignUpContainer>



            <SignInContainer signIn={signIn}>
                <SesionForm>
                    <Logo src={mhlogo} alt='Morhealth' />
                    <SesionTitle>Iniciar sesión</SesionTitle>
                    <SesionInput required type="text" placeholder='Usuario' name='username' onChange={(e) => { setUsername(e.target.value) }} ></SesionInput>

                    <InputContainer>
                        <SesionInput
                            required
                            type={showPassword ? 'text' : 'password'}
                            placeholder='Contraseña'
                            name='password'
                            onChange={(e) => { setPassword(e.target.value) }}
                        />
                        <ShowPasswordButton
                            onMouseDown={togglePasswordVisibilityOn}
                            onMouseUp={togglePasswordVisibilityOff}
                            onMouseLeave={togglePasswordVisibilityOff}
                        >
                            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                        </ShowPasswordButton>
                    </InputContainer>

                    <SesionAnchor>¿Olvidaste tu contraseña?</SesionAnchor>

                    <SesionButton type="submit" onClick={loginFunction}>Ingresar</SesionButton>
                    <h2>{loginStatus}</h2>
                    {err && <ErrMss>{err}</ErrMss>}
                </SesionForm>
            </SignInContainer>

            <OverlayContainer signIn={signIn}>
                <Overlay signIn={signIn}>
                    <LeftOverlayPanel signIn={signIn}>
                        <SesionTitle>Bienvenido de vuelta</SesionTitle>
                        <Paragraph>Para mantenerse conectado</Paragraph>
                        <GhostButton onClick={() => toggle(true)}>
                            Iniciar sesión
                        </GhostButton>
                    </LeftOverlayPanel>

                    <RightOverlayPanel signIn={signIn}>
                        <SesionTitle>Hola, amigo</SesionTitle>
                        <Paragraph>Registrarse como: </Paragraph>
                        <GhostButton onClick={showUserRegistration}>Usuario</GhostButton>
                        <Paragraph>O</Paragraph>
                        <Paragraph>Registrarse como: </Paragraph>
                        <GhostButton onClick={showProfessionalRegistration}>Profesional</GhostButton>
                    </RightOverlayPanel>
                </Overlay>
            </OverlayContainer>
        </Container>
    )
};

const Container = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 height: 100vh;
 background-color: #F0F2F3;
`;

const Logo = styled.img`
    width: 50px;
    max-width: 100%;
    height: auto;
    margin-bottom: 20px;
`;

const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;

const ShowPasswordButton = styled.button`
  position: absolute;
  right: 10px; 
  background: transparent;
  border: none;
  cursor: pointer;
  top: 50%;
  transform: translateY(-50%);
`;



const Select = styled.select`
  background-color: #eee;
  border-radius: 0.5rem;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;

  &:focus {
    outline: none;
    border-color: blanchedalmond;
  }
`;

const SignUpContainer = styled.div`
position: absolute;
top: 0;
height: 100%;
transition: all 0.6s ease-in-out;
left: 0;
width: 50%;
opacity: 0;
z-index: 1;
${props => props.signIn !== true ? `
  transform: translateX(100%);
  opacity: 1;
  z-index: 5;
`
        : null}
`;

const SesionForm = styled.form`
 background-color: #ffffff;
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 padding: 0 50px;
 height: 100%;
 text-align: center;
 `;

const CustomInput = styled.input`
width: 100%;
padding: 0.5rem 1rem;
margin-bottom: 1rem;
border: 1px solid #ccc;
border-radius: 4px;
font-size: 16px;
outline: none;
&:focus {
  border-color: #3f51b5;
}
`;

const SesionTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: ${v.mdSpacing};
`;

const ErrMss = styled.p`
    color: #FF6C4C;
    font-weight: bold;
    margin-top: 20px;
`;

const SesionInput = styled.input`
 background-color: #eee;
 border-radius: .5rem;
 padding: 12px 15px;
 margin: 8px 0;
 width: 100%;
`;

const SesionButton = styled.button`
    border-radius: 20px;
    border: 1px solid #216B91;
    background-color: #216B91;
    color: #ffffff;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
    &:active {
        transform: scale(0.95);
    }
    &:focus {
        outline: none;
    }
`;

const GhostButton = styled.button`
    border: 1px solid #ffffff;
    border-radius: 20px;
    background-color: transparent;
    color: #ffffff;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
    &:active {
        transform: scale(0.95);
    }
    &:focus {
        outline: none;
    }
`;

const SignInContainer = styled.div`
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
    left: 0;
    width: 50%;
    z-index: 2;
    ${props => (props.signIn !== true ? `transform: translateX(100%);` : null)}
`;

const SesionAnchor = styled.a`
    color: #223159;
    font-size: 14px;
    text-decoration: none;
    margin: 15px 0;
`;

const OverlayContainer = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform 0.6s ease-in-out;
    z-index: 100;
    ${props => props.signIn !== true ? `transform: translateX(-100%);` : null}
`;

const Overlay = styled.div`
    background: #031728;
    background: -webkit-linear-gradient(to right, #031728, #223159);
    background: linear-gradient(to right, #031728, #223159);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0 0;
    color: #ffffff;
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
    ${props => (props.signIn !== true ? `transform: translateX(50%);` : null)}
`;

const OverlayPanel = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 40px;
    text-align: center;
    top: 0;
    height: 100%;
    width: 50%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
`;

const LeftOverlayPanel = styled(OverlayPanel)`
    transform: translateX(-20%);
    ${props => props.signIn !== true ? `transform: translateX(0);` : null}
`;

const RightOverlayPanel = styled(OverlayPanel)`
    right: 0;
    transform: translateX(0);
    ${props => props.signIn !== true ? `transform: translateX(20%);` : null}
`;

const Paragraph = styled.p`
    font-size: 14px;
    font-weight: 100;
    line-height: 20px;
    letter-spacing: 0.5px;
    margin: 20px 0 30px;
`;

export default LoginPage;
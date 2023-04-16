import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import logo from './../../assets/logo/morhealthlogo.png';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../context/authContext'

const LoginPage = () => {

    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        password: "",
    })

    const [err, setError] = useState(null);

    const navigate = useNavigate();

    const { login } = useContext(AuthContext);


    const [signIn, toggle] = useState(true);

    const [showPassword, setShowPassword] = useState(false);

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

    const handleSubmitR = async e => {
        e.preventDefault()
        try {
            await axios.post("/auth/registro", inputs)
            toggle(true);
        } catch (err) {
            setError(err.response.data);
        }
    }

    
    return (
        <Container>
            <SignUpContainer signIn={signIn}>
                <SesionForm>
                    <Logo src={logo} alt='Morhealth' />
                    <SesionTitle>Crea tu cuenta</SesionTitle>
                    <SesionInput required type="text" placeholder='Usuario' name='username' onChange={handleChange}></SesionInput>
                    <SesionInput required type="email" placeholder='Email' name='email' onChange={handleChange}></SesionInput>

                    <InputContainer>
                        <SesionInput required type={showPassword ? 'text' : 'password'} placeholder='Contraseña' name='password' onChange={handleChange} />
                        <ShowPasswordButton
                            onMouseDown={togglePasswordVisibilityOn}
                            onMouseUp={togglePasswordVisibilityOff}
                            onMouseLeave={togglePasswordVisibilityOff}
                        >
                            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                        </ShowPasswordButton>
                    </InputContainer>

                    <SesionButton onClick={handleSubmitR}>Registrar</SesionButton>
                    {err && <ErrMss>{err}</ErrMss>}
                </SesionForm>
            </SignUpContainer>

            <SignInContainer signIn={signIn}>
                <SesionForm>
                    <Logo src={logo} alt='Morhealth' />
                    <SesionTitle>Iniciar sesión</SesionTitle>
                    <SesionInput required type="text" placeholder='Usuario' name='username' onChange={handleChange} ></SesionInput>

                    <InputContainer>
                        <SesionInput required type={showPassword ? 'text' : 'password'} placeholder='Contraseña' name='password' onChange={handleChange} />
                        <ShowPasswordButton
                            onMouseDown={togglePasswordVisibilityOn}
                            onMouseUp={togglePasswordVisibilityOff}
                            onMouseLeave={togglePasswordVisibilityOff}
                        >
                            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                        </ShowPasswordButton>
                    </InputContainer>


                    <SesionAnchor>¿Olvidaste tu contraseña?</SesionAnchor>


                    <SesionButton onClick={handleSubmit} >Ingresar</SesionButton>
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
                        <Paragraph>Regístrate para comenzar</Paragraph>
                        <GhostButton onClick={() => toggle(false)}>Registrarse</GhostButton>
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
    width: 150px;
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

const SesionTitle = styled.h1`
 font-weight: bold;
 margin: 0;
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
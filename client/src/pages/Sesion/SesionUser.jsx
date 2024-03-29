import React, { useState } from 'react';
import axios from 'axios';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { v } from '../../styles/variables';
import mhLogo from '../../assets/logo/morhealthlogo.png'

const SesionUser = () => {
    const navigate = useNavigate();
    axios.defaults.withCredentials = true;

    const [signIn, toggle] = useState(true);
    const [showPassword, setShowPassword] = useState(false);


    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const showUserRegistration = () => {
        toggle(false);
    };

    const [loginInputs, setLoginInputs] = useState({
        username: '',
        password: '',
    });

    const [registerInputs, setRegisterInputs] = useState({
        username: '',
        password: '',
        email: '',
        name: '',
        lastname_p: '',
        lastname_m: '',
        gender: '',
        age: '',
    });

    const handleChangeR = (e) => {
        const { name, value } = e.target;
        setRegisterInputs((prev) => ({ ...prev, [name]: value }));
    };

    const handleChangeL = (e) => {
        const { name, value } = e.target;
        setLoginInputs((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmitR = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:8080/api/users/register', registerInputs)
            .then((res) => {
                if (res.data.Status === 'Exito') {
                    toggle(true);
                } else {
                    alert('ERROR');
                }
            })
            .catch((err) => console.log(err));
    };

    const handleSubmitL = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:8080/api/users/login', loginInputs)
            .then((res) => {
                if (res.data.Status === 'Exito') {
                    navigate('/morhealth');
                } else {
                    alert(res.data.Error);
                }
            })
            .catch((err) => console.log(err));
    };

    return (
        <Container>
            <SignUpContainer signIn={signIn}>
                <SesionForm onSubmit={handleSubmitR}>
                <Logo src={mhLogo} alt='Morhealth' />
                    <SesionTitle>Registrarse como usuario</SesionTitle>

                    <SesionInput
                        required
                        type="text"
                        onChange={handleChangeR}
                        placeholder="Ingresa tu nombre"
                        name="name"
                    />
                    <SesionInput
                        required
                        type="text"
                        onChange={handleChangeR}
                        placeholder="Ingresa tu apellido paterno"
                        name="lastname_p"
                    />
                    <SesionInput
                        required
                        type="text"
                        onChange={handleChangeR}
                        placeholder="Ingresa tu apellido materno"
                        name="lastname_m"
                    />

                    <SesionInput
                        required
                        type="number"
                        onChange={handleChangeR}
                        placeholder="Ingresa tu edad"
                        name="age"
                        min="15"
                        max="64"
                    />

                    <Select id="gender" name="gender" onChange={handleChangeR}>
                        <option value="">Seleccione su género</option>
                        <option value="1">Hombre</option>
                        <option value="2">Mujer</option>
                    </Select>

                    <SesionInput
                        required
                        type="text"
                        onChange={handleChangeR}
                        placeholder="Ingresa tu username"
                        name="username"
                    />

                    <SesionInput
                        required
                        type="email"
                        onChange={handleChangeR}
                        placeholder="Ingresa tu email"
                        name="email"
                    />

                    <InputContainer>
                        <SesionInput
                            required
                            type={showPassword ? 'text' : 'password'}
                            onChange={handleChangeR}
                            placeholder="Ingresa tu contraseña"
                            name="password"
                        />
                        <ShowPasswordButton
                            type="button"
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                        </ShowPasswordButton>
                    </InputContainer>
                    <SesionButton type="submit">Registrarse</SesionButton>
                </SesionForm>
            </SignUpContainer>

            <SignInContainer signIn={signIn}>
                <SesionForm onSubmit={handleSubmitL}>
                <Logo src={mhLogo} alt='Morhealth' />
                    <SesionTitle>Iniciar sesión</SesionTitle>

                    <SesionInput
                        required
                        type="text"
                        onChange={handleChangeL}
                        placeholder="Username"
                        name="username"
                    />

                    <InputContainer>
                        <SesionInput
                            required
                            type={showPassword ? 'text' : 'password'}
                            onChange={handleChangeL}
                            placeholder="Contraseña"
                            name="password"
                        />
                        <ShowPasswordButton
                            type="button"
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                        </ShowPasswordButton>
                    </InputContainer>

                    <SesionAnchor>¿Olvidaste tu contraseña?</SesionAnchor>

                    <SesionButton className="flex" type="submit">
                        Ingresar
                    </SesionButton>
                </SesionForm>
            </SignInContainer>

            <OverlayContainer signIn={signIn}>
                <Overlay signIn={signIn}>
                    <LeftOverlayPanel signIn={signIn}>
                        <SesionTitle>Bienvenido,</SesionTitle>
                        <Paragraph>Si ya tienes cuenta: </Paragraph>
                        <GhostButton2 onClick={() => toggle(true)}>
                            Iniciar sesión
                        </GhostButton2>
                    </LeftOverlayPanel>

                    <RightOverlayPanel signIn={signIn}>
                        <SesionTitle>Bienvenido,</SesionTitle>
                        <Paragraph>Registrarse como:</Paragraph>
                        <GhostButton2 onClick={showUserRegistration}>Usuario</GhostButton2>
                        <Paragraph>Si eres un profesional, </Paragraph>
                        <Link to='/ingresar/profesional'>
                            <GhostButton >Profesional</GhostButton>
                        </Link>
                        <Link to='/'>
                            <Paragraph1>Volver al inicio</Paragraph1>
                        </Link>
                    </RightOverlayPanel>
                </Overlay>
            </OverlayContainer>
        </Container>
    );
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
    border-radius: 10px;
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
    &:hover {
        background-color: #223159;
    }
`;

const GhostButton2 = styled.button`
    border: 2px solid #223159;
    border-radius: 10px;
    background-color: #031728;
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
    &:hover{
        background-color: #216B91;
    }
`;

const GhostButton = styled.button`
    border: 1px solid #ffffff;
    border-radius: 10px;
    background-color: transparent;
    color: #ffffff;
    font-size: 10px;
    font-weight: bold;
    padding: 8px 25px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
    &:active {
        transform: scale(0.95);
    }
    &:focus {
        outline: none;
    }
    &:hover{
        background-color: #031728;
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

const Paragraph1 = styled.p`
    font-size: 15px;
    font-weight: 100;
    line-height: 20px;
    letter-spacing: 0.5px;
    margin: 20px 0 30px;
    &:hover{
        color: #D9D9D9;
    }
`;


export default SesionUser

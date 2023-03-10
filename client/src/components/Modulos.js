import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import Fitness from './../assets/img/fitness.jpg';
import Nutricion from './../assets/img/dietas.jpg';
import Morhealth from './../assets/img/morhealth.jpg';
import Salud from './../assets/img/salud.jpg';
import { Link } from 'react-router-dom';

const Modulos = () => {
  return (
    <ModulosContainer>
        
        <ModulosWrapper>
            <ModulosCard>
                <Link to="/ejercicios">
                <Img
                 src={Fitness}/>
                <ModulosInfo>
                    <TextWrap>
                        <ModulosTitle> Ejercicios </ModulosTitle>
                    </TextWrap>
                </ModulosInfo>
                    </Link>
            </ModulosCard>
            <ModulosCard>
            <Link to="/nutricion">
                <Img
                 src={Nutricion}/>
                <ModulosInfo>
                    <TextWrap>
                        <ModulosTitle> Nutricion</ModulosTitle>
                    </TextWrap>
                </ModulosInfo>
                    </Link>

            </ModulosCard>
            <ModulosCard>
                <Link to="/salud">
                <Img
                 src={Salud}/>
                <ModulosInfo>
                    <TextWrap>
                        <ModulosTitle> Salud </ModulosTitle>
                    </TextWrap>
                </ModulosInfo>
                    
                    </Link>
            </ModulosCard>
            <ModulosCard>
            <Link to="/morse">
                <Img src={Morhealth}/>
                <ModulosInfo>
                    <TextWrap>
                        <ModulosTitle> Morse </ModulosTitle>
                    </TextWrap>
                </ModulosInfo>
                    
                    </Link>
            </ModulosCard>
        </ModulosWrapper>
    </ModulosContainer>
  )
}

const ModulosContainer = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
`;
const ModulosHeading = styled.div`
    font-size: clamp(1.2rem, 5vw, 3rem);
    text-align: center;
    margin-bottom: 5rem;
    color: black;
`;
const ModulosWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    justify-items: center;
    padding 1rem;
    

    @media screen and (max-width: 1200px) {
        grid-template-columns: 1fr 1fr;
        
    }

    @media screen and (max-width: 868px){
        grid-template-columns: 1fr;
       
    }
`;
const ModulosCard = styled.div`
    line-height: 2;
    width: 100%;
    height: 500px;
    position: relative;
    border-radius: 10px;
    transition: 0.2s ease;
    text-decoration: none;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

   
`;
const Img = styled.img`
    height: 100%;
    max-width: 100%;
    position: relative;
    border-radius: 10px;
    filter: brightness(70%);
    transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

    :hover{
        filter: brightness(100%);
    }
`;
const ModulosInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 2rem;

    @media screen and (max-width: 280px){
        padding: 0 1rem;
    }
`;
const TextWrap = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    top: 400px;
`;
const ModulosTitle = styled.h1`
    font-weight: 500;
    font-size: 2.5rem;
    text-decoration: none;
    color: white;
    text-shadow: 1px 1px 1px #000;
    align-text: center;
    align-items: center;
    justify-content: center;
`;

export default Modulos
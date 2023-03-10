import React from 'react';
import styled from 'styled-components';
import { BsFillHeartFill } from 'react-icons/bs';
import { MdOutlineFitnessCenter } from 'react-icons/md';
import { FaAppleAlt } from 'react-icons/fa';
import { GiWalrusHead } from 'react-icons/gi';


const StatsData = [
    {
        icon: (<BsFillHeartFill style={{color: '#DC143C'}}/>),
        title: "Salud",
        desc: "Proximamente",
    },
    {
        icon: (<MdOutlineFitnessCenter style={{color: '#708090'}}/>),
        title: "Ejercicios",
        desc: "Miles de ejercicios para mantenerte fuerte y saludable",
    },
    {
        icon: (<FaAppleAlt style={{color: '#9ACD32'}}/>),
        title: "Nutricion",
        desc: "Recetas y dietas",
    },
    {
        icon: (<GiWalrusHead style={{color: '#031728'}}/>),
        title: "Morse",
        desc: "Lo mejor para tus necesidades",
    },
]
const Stats = () => {
  return (
    <StatsContainer>
        <Heading>¿Qué ofrecemos?</Heading>
        <Wrapper>
            {StatsData.map((item , index) => {
                return(
                    <StatsBox key={index}>
                        <Icon>{item.icon}</Icon>
                        <Title>{item.title}</Title>
                        <Description>{item.desc}</Description>
                    </StatsBox>
                )
            })}
        </Wrapper>
    </StatsContainer>
  )
}

const StatsContainer = styled.div`
    width: 100%;
    background: #fff;
    color: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 4rem calc((100vw - 1300px) / 2);
`;
const Heading = styled.h1`
    text-align: start;
    font-size: clamp(1.5rem, 5vw, 2rem);
    margin-bottom: 3rem;
    padding: 0 2rem;
`;
const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4 , 1fr);
    justify-content: center;
    align-items: center;
    grid-gap: 10px;

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
    }
    @media screen and (max-width: 500px){
        grid-template-columns: 1fr;
    }
`;

const StatsBox = styled.div`
    height: 100%;
    width: 100%;
    padding: 2rem;
`;
const Icon = styled.div`
    font-size: 3rem;
    margin-bottom: 1rem;
`;
const Title = styled.div`
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    margin-bottom: 0.5rem;
`;
const Description = styled.div`
    font-size: 1.5rem;
`;
export default Stats
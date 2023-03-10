import React , { useState } from 'react';
import styled from 'styled-components';
import {FaSearch} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Search() {

    const[input, setInput] = useState("");

    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/nutricion/searched/' + input)
    }

  return (
    <FormStyle onSubmit={submitHandler}>
        <div>
            
            <FaSearch/>
            <input 
                onChange={(e) => setInput(e.target.value)}
                type="text" 
                value={input}/>
            
        </div>
    </FormStyle>
  );
}

const FormStyle = styled.form`
    margin: 0rem 20 rem;

    div{
        display: flex;
        width: 100%;
        position: relative;
        justify-content: center;
        align-items: center;
        margin-top: 2rem;
    }
        svg{
            position: relative;
            transform: translate(160%, 0%);
            color: white;
        }
    input{
        border: none;
        background: #031728;
        font-size: 1.5rem;
        color: white;
        padding: 1rem 3rem;
        border: none;
        border-radius: 1rem;
        outline: none;
    }
`;

export default Search
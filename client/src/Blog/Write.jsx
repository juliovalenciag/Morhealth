import React, { useState } from 'react';
import ReactQuill from 'react-quill';

import "react-quill/dist/quill.snow.css";
import styled from 'styled-components';
import Header from './components/header/Header';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import moment from "moment";


const Write = () => {

    const state = useLocation().state;

    const [value, setValue] = useState(state?.title || "");
    const [title, setTitle] = useState(state?.desc || "");
    const [file, setFile] = useState(null);
    const [cat, setCat] = useState(state?.cat || "");

    const navigate = useNavigate()
    
    const upload = async () => {
        try {
            const formData = new FormData();
            formData.append("file", file);
            const res = await axios.post("/upload", formData);
            return res.data;
        } catch (err) {
            console.log(err);
        }
    };


    const handleClick = async (e) => {
        e.preventDefault();
        const imgUrl = await upload();

        try {
            state
                ? await axios.put(`/posts/${state.idpost}`, {
                    title,
                    desc: value,
                    cat,
                    img: file ? imgUrl : "",
                })
                : await axios.post(`/posts/`, {
                    title,
                    desc: value,
                    cat,
                    img: file ? imgUrl : "",
                    date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
                });
            navigate("/morhealth/blog")
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <Header />
            <Container>
                <Content>
                    <TitleInput type='text' placeholder='Título' value={title} onChange={(e) => setTitle(e.target.value)} />
                    <EditorContainer>
                        <ReactQuill theme='snow' value={value} onChange={setValue} />
                    </EditorContainer>
                </Content>

                <Menu>
                    <MenuItem>
                        <h1>Publicar</h1>
                        <Info>
                            <b>Estado: </b> Borrador
                        </Info>
                        <Info>
                            <b>Visibilidad: </b> Público
                        </Info>
                        <FileInput type="file" name='' id='file' onChange={(e) => setFile(e.target.files[0])} />
                        <FileLabel htmlFor='file'>Subir foto</FileLabel>
                        <Buttons>
                            <Button>Guardar como borrador</Button>
                            <Button onClick={handleClick}>Publicar</Button>
                        </Buttons>
                    </MenuItem>
                    <MenuItem>
                        <h1>Categoría</h1>

                        <RadioInput type='radio' checked={cat === "salud"} name='cat' value='salud' id='salud' onChange={(e) => setCat(e.target.value)} />
                        <RadioLabel htmlFor="salud">Salud</RadioLabel>
                        <RadioInput type='radio' checked={cat === "fitness"} name='cat' value='fitness' id='fitness' onChange={(e) => setCat(e.target.value)} />
                        <RadioLabel htmlFor="ejercicios">Fitness</RadioLabel>
                        <RadioInput type='radio' checked={cat === "nutricion"} name='cat' value='nutricion' id='nutricion' onChange={(e) => setCat(e.target.value)} />
                        <RadioLabel htmlFor="nutricion">Nutrición</RadioLabel>

                    </MenuItem>
                </Menu>
            </Container>
        </>
    )
}

const Container = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 2rem;
    padding: 2rem;
`;

const Content = styled.div`
`;

const TitleInput = styled.input`
    width: 100%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    border-radius: 10px;
    border-bottom: 1px solid #ccc;
    outline: none;
    margin-bottom: 2rem;
`;

const EditorContainer = styled.div`
    .ql-container {
        min-height: 400px;
    }
`;

const Menu = styled.div`
    display: flex;
    flex-direction: column;
`;

const MenuItem = styled.div`
    
    padding: 1rem;
    border-radius: 5px;
    margin-bottom: 1rem;

    h1 {
        font-size: 1.3rem;
        margin-bottom: 1rem;
    }
`;

const Info = styled.span`
    display: block;
    margin-bottom: 0.5rem;
`;

const FileInput = styled.input`
    display: none;
`;

const FileLabel = styled.label`
    display: inline-block;
    background-color: #4e73df;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    cursor: pointer;
    margin: 1rem 0;
`;

const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Button = styled.button`
    background-color: #4e73df;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #2e59d9;
    }
`;

const RadioInput = styled.input`
    display: none;
`;

const RadioLabel = styled.label`
    display: inline-block;
    color: #031728;
    padding: 0.3rem 0.5rem;
    margin-right: 1rem;
    background-color: #f8f9fa;
    cursor: pointer;
    border-radius: 3px;

    &:hover {
        background-color: #d1d3e2;
    }
`;

export default Write;


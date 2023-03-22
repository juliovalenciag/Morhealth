import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const ListaEjercicios = ({ search }) => {
    const location = useLocation();
    const [ejercicios, setEjercicios] = useState([]);

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const type = searchParams.get("type") || "";
        const muscle = searchParams.get("muscle") || "";

        if (search) {
            searchParams.set("search", search);
        } else {
            searchParams.delete("search");
        }

        fetchEjercicios(type, muscle);
    }, [location, search]);

    const fetchEjercicios = async (type, muscle) => {
        try {
            const response = await axios.get("https://api.api-ninjas.com/v1/exercises", {
                params: {
                    type: type,
                    muscle: muscle,
                    search: search 
                },
                headers: {
                    "X-Api-Key": "9ofkWqIyGfpIfqelVbxfnQ==x9iV7lreXAyGq4mF",
                },
            });
            setEjercicios(response.data);
        } catch (error) {
            if (error.response) {
                console.error("Error:", error.response.status, error.response.data);
            } else {
                console.error("Request failed:", error.message);
            }
        }
    };

    return (
        <div>
            <h2>Lista de ejercicios</h2>
            <div>
                {ejercicios.map((ejercicio, index) => (
                    <Card key={ejercicio.id || index}>
                        <Title>{ejercicio.name}</Title>
                        <Subtitle>Tipo: {ejercicio.type}</Subtitle>
                        <Subtitle>Dificultad: {ejercicio.difficulty}</Subtitle>
                        <Subtitle>Músculo: {ejercicio.muscle}</Subtitle>
                    </Card>
                ))}
            </div>
        </div>
    );
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8f8f8;
  border-radius: 5px;
  padding: 20px;
  margin: 10px;
  width: 300px;
`;

const Title = styled.h3`
  text-align: center;
  margin-bottom: 10px;
`;

const Subtitle = styled.h4`
  margin-bottom: 5px;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 5px;
`;


export default ListaEjercicios;

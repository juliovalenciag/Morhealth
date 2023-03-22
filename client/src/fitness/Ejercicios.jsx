import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ListaEjercicios from './ListaEjercicios';


const Tarjeton = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 15px;
  margin: 5px;
  display: inline-block;
  cursor: pointer;
`;

const Ejercicios = () => {
    const navigate = useNavigate();
    const [ejercicios, setEjercicios] = useState([]);
    const [musculos, setMusculos] = useState([]);
    const [filteredEjercicios, setFilteredEjercicios] = useState([]);
    const [busqueda, setBusqueda] = useState("");

    const [criteria, setCriteria] = useState({
        type: "",
        muscle: "",
        difficulty: "",
    });

    const updateCriteria = (type, muscle, difficulty) => {
        setCriteria({ type, muscle, difficulty });
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            buscarEjercicio();
        }
    };

    const buscarEjercicio = () => {
        if (busqueda.trim()) {
            fetchEjercicios("", "", "", busqueda.trim());
            setBusqueda("");
        }
    };


    useEffect(() => {
        fetchEjercicios();
        fetchMusculos();
    }, []);

    const fetchEjercicios = async (type = "", muscle = "", difficulty = "", search = "") => {
        try {
            const response = await axios.get("https://api.api-ninjas.com/v1/exercises", {
                params: {
                    type: type,
                    muscle: muscle,
                    difficulty: difficulty,
                    search: search,
                },
                headers: {
                    "X-Api-Key": "9ofkWqIyGfpIfqelVbxfnQ==x9iV7lreXAyGq4mF",
                },
            });
            setEjercicios(response.data);
            setFilteredEjercicios(response.data);
        } catch (error) {
            if (error.response) {
                console.error("Error:", error.response.status, error.response.data);
            } else {
                console.error("Request failed:", error.message);
            }
        }
    };

    const handleClick = (type, muscle, difficulty) => {
        updateCriteria(type, muscle, difficulty);
    };


    useEffect(() => {
        if (busqueda.trim()) {
            const filtered = ejercicios.filter((ejercicio) =>
                ejercicio.name.toLowerCase().includes(busqueda.trim().toLowerCase())
            );
            setFilteredEjercicios(filtered);
        } else {
            setFilteredEjercicios(ejercicios);
        }
    }, [busqueda, ejercicios]);

    const fetchMusculos = async () => {
        try {
            const response = await axios.get("https://api.api-ninjas.com/v1/exercises", {
                params: {
                    distinct: "muscle",
                },
                headers: {
                    "X-Api-Key": "9ofkWqIyGfpIfqelVbxfnQ==x9iV7lreXAyGq4mF",
                },
            });
            setMusculos(response.data);
        } catch (error) {
            if (error.response) {
                console.error("Error:", error.response.status, error.response.data);
            } else {
                console.error("Request failed:", error.message);
            }
        }
    };

    const filterEjercicios = () => {
        const { type, muscle, difficulty } = criteria;

        let filtered = ejercicios;

        if (busqueda.trim()) {
            filtered = filtered.filter((ejercicio) =>
                ejercicio.name.toLowerCase().includes(busqueda.trim().toLowerCase())
            );
        }

        if (type) {
            filtered = filtered.filter((ejercicio) => ejercicio.type === type);
        }

        if (muscle) {
            filtered = filtered.filter((ejercicio) => ejercicio.muscle === muscle);
        }

        if (difficulty) {
            filtered = filtered.filter((ejercicio) => ejercicio.difficulty === difficulty);
        }

        return filtered;
    };

    useEffect(() => {
        setFilteredEjercicios(filterEjercicios());
    }, [busqueda, ejercicios, criteria]);

    return (

        <div>
            <SearchContainer>
                <SearchInput
                    type="text"
                    placeholder="Buscar ejercicio"
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                <SearchButton onClick={buscarEjercicio}>Buscar</SearchButton>
            </SearchContainer>

            {/*
            <div>
                <h2>Tipos de ejercicios</h2>
                <div>
                    {ejercicios.map((ejercicio, index) => (
                        <Tarjeton
                            key={`ejercicio-${index}`}
                            onClick={() => fetchEjercicios(ejercicio.type, "", busqueda)}
                        >
                            {ejercicio.type}
                        </Tarjeton>
                    ))}
                </div>
            </div>
                    */}
            <div>
                <h2>Músculos</h2>
                <div>
                    {musculos.map((musculo, index) => (
                        <Tarjeton
                            key={`musculo-${index}`}
                            onClick={() => fetchEjercicios("", musculo.muscle, busqueda)}
                        >
                            {musculo.muscle}
                        </Tarjeton>
                    ))}
                </div>
            </div>


            <div>
                <h2>Resultados de búsqueda</h2>
                <ResultContainer>
                    {filteredEjercicios.map((ejercicio) => (
                        <ResultCard key={ejercicio.id}>
                            <CardTitle>{ejercicio.name}</CardTitle>
                            <p>Tipo: {ejercicio.type}</p>
                            <p>Dificultad: {ejercicio.difficulty}</p>
                            <p>Músculo: {ejercicio.muscle}</p>
                        </ResultCard>
                    ))}
                </ResultContainer>
            </div>


        </div>
    )
};

const ResultContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

const ResultCard = styled.div`
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 5px;
  padding: 1rem;
  width: 300px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CardTitle = styled.h5`
  text-align: center;
  margin-bottom: 1rem;
`;
const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 1rem;
`;

const SearchButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border: 1px solid #007bff;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
    border-color: #0056b3;
  }
`;

export default Ejercicios

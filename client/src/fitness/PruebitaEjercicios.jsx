import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';




const PruebitaEjercicios = () => {
    const navigate = useNavigate();
    const [ejercicios, setEjercicios] = useState([]);
    const [filteredEjercicios, setFilteredEjercicios] = useState([]);

    const [targetMuscles, setTargetMuscles] = useState([]);
    const [bodyPart, setBodyPart] = useState([]);
    const [equipment, setEquipment] = useState([]);
    const [busqueda, setBusqueda] = useState("");




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


    const fetchEjercicios = async (type = "", bodyPart = "", muscle = "", search = "", equipment = "") => {
        try {
            const response = await axios.get("https://exercisedb.p.rapidapi.com/exercises", {
                params: {
                    type: type,
                    bodyPart: bodyPart,
                    muscle: muscle,
                    search: search,
                    equipment: equipment,
                },
                headers: {
                    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
                    "X-RapidAPI-Key": "bcc4caf5efmsh5406bb69b3ca3adp12e771jsnd8b2520faac3",
                },
            });
            setEjercicios(response.data.results || []);
            setFilteredEjercicios(response.data.results || []);
        } catch (error) {
            if (error.response) {
                console.error("Error:", error.response.status, error.response.data);
            } else {
                console.error("Request failed:", error.message);
            }
            setEjercicios([]);
            setFilteredEjercicios([]);
        }
    };

    const fetchBodyparts = async () => {
        try {
            const response = await axios.get("https://exercisedb.p.rapidapi.com/exercises/bodyPartList", {
                headers: {
                    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
                    "X-RapidAPI-Key": "bcc4caf5efmsh5406bb69b3ca3adp12e771jsnd8b2520faac3",
                },
            });
            setBodyPart(response.data || []);
        } catch (error) {
            console.error("Error:", error.message);
            setBodyPart([]);
        }
    };

    const fetchTargetMuscles = async () => {
        try {
            const response = await axios.get("https://exercisedb.p.rapidapi.com/exercises/targetList", {
                headers: {
                    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
                    "X-RapidAPI-Key": "bcc4caf5efmsh5406bb69b3ca3adp12e771jsnd8b2520faac3",
                },
            });
            setTargetMuscles(response.data || []);
        } catch (error) {
            console.error("Error:", error.message);
            setTargetMuscles([]);
        }
    };

    const fetchEquipment = async () => {
        try {
            const response = await axios.get("https://exercisedb.p.rapidapi.com/exercises/equipmentList", {
                headers: {
                    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
                    "X-RapidAPI-Key": "bcc4caf5efmsh5406bb69b3ca3adp12e771jsnd8b2520faac3",
                },
            });
            setEquipment(response.data || []);
        } catch (error) {
            console.error("Error:", error.message);
            setEquipment([]);
        }
    };


    useEffect(() => {
        fetchEjercicios();
        fetchBodyparts();
        fetchEquipment();
        fetchTargetMuscles();
    }, []);


    useEffect(() => {
        setFilteredEjercicios(ejercicios);
    }, [ejercicios]);




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


            <div>
                {ejercicios.map((ejercicio, index) => (
                    <Card key={ejercicio.id || index}>
                        <Title>{ejercicio.name}</Title>
                        <Subtitle>Tipo: {ejercicio.bodyPart}</Subtitle>
                        <Subtitle>Dificultad: {ejercicio.targetMuscles}</Subtitle>
                        <Subtitle>Músculo: {ejercicio.equipment}</Subtitle>
                    </Card>
                ))}
            </div>

            <div>
                <h2>Bodyparts</h2>
                <TarjetonesContainer>
                    {bodyPart.map((bodypart, index) => (
                        <Tarjeton
                            key={`bodypart-${bodypart.id}-${index}`}
                            onClick={() => fetchEjercicios("", bodypart.title, "", busqueda)}
                        >
                            {bodypart.title}
                        </Tarjeton>
                    ))}
                </TarjetonesContainer>
            </div>

            <div>
                <h2>Muscles</h2>
                <TarjetonesContainer>
                    {targetMuscles.map((targetMuscle, index) => (
                        <Tarjeton
                            key={`targetMuscle-${targetMuscle.id}-${index}`}
                            onClick={() => fetchEjercicios("", "", targetMuscle.title, busqueda)}
                        >
                            {targetMuscle.title}
                        </Tarjeton>
                    ))}
                </TarjetonesContainer>
            </div>

            <div>
                <h2>Equipment</h2>
                <TarjetonesContainer>
                    {equipment.map((equip, index) => (
                        <Tarjeton
                            key={`equipment-${equip.id}-${index}`}
                            onClick={() => fetchEjercicios("", "", "", busqueda, equip.title)}
                        >
                            {equip.title}
                        </Tarjeton>
                    ))}
                </TarjetonesContainer>
            </div>


            <div>
                <h2>Resultados de búsqueda</h2>
                <ResultContainer>
                    {filteredEjercicios.map((ejercicio) => (
                        <ResultCard key={ejercicio.id}>
                            <CardTitle>{ejercicio.name}</CardTitle>
                            <p>Músculo: {ejercicio.targetMuscle}</p>
                            <p>Equipamiento: {ejercicio.equipment}</p>
                            {ejercicio.gifUrl && (
                                <GifContainer>
                                    <img src={ejercicio.gifUrl} alt={`${ejercicio.name} gif`} />
                                </GifContainer>
                            )}
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

const Tarjeton = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 15px;
  margin: 5px;
  display: inline-block;
  cursor: pointer;
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

const TarjetonesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  margin-bottom: 1rem;
`;

const GifContainer = styled.div`
  text-align: center;
  margin-top: 1rem;
`;

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

export default PruebitaEjercicios

import React from 'react';
import styled from 'styled-components';



    const data = [
        {
          title: "Resumen",
          description: "Información general del dashboard",
        },
        {
          title: "Usuarios activos",
          description: "1,235",
        },
        {
          title: "Ganancias totales",
          description: "$15,670",
        },
        {
          title: "Tareas completadas",
          description: "1,256",
        },
        {
          title: "Nuevos usuarios",
          description: "155",
        },
        {
          title: "Tasa de rebote",
          description: "25%",
        },
        {
          title: "Tareas pendientes",
          description: "37",
        },
        {
          title: "Ventas totales",
          description: "1,000",
        },
        {
          title: "Valor medio del pedido",
          description: "$120",
        },
        
    
      ];
    


const FitnessHome = () => {
  return (
    <GridContainer>
    <FullHeightGridItem key={0}>
      <GridItemTitle>{data[0].title}</GridItemTitle>
      <GridItemDescription>{data[0].description}</GridItemDescription>
    </FullHeightGridItem>
    {data.slice(1).map((item, index) => (
      <GridItem key={index + 1}>
        <GridItemTitle>{item.title}</GridItemTitle>
        <GridItemDescription>{item.description}</GridItemDescription>
      </GridItem>
    ))}
  </GridContainer>
  )
}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 1rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const GridItem = styled.div`
  background-color: #60a5fa;
  color: #ffffff;
  border-radius: 1rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: bold;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
  }
`;

const FullHeightGridItem = styled(GridItem)`
  grid-row: span 4;
`;

const GridItemTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const GridItemDescription = styled.p`
  font-size: 1rem;
`;

export default FitnessHome
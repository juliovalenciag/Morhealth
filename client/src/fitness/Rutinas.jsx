import React from 'react';
import styled from 'styled-components';

const Rutinas = () => {
  return (
    <GridContainer>
      <GridItem>

        <InnerGridContainer>
          <InnerGridItemTitle>Principiante</InnerGridItemTitle>
          <InnerGridItem>Completo</InnerGridItem>
          <InnerGridItem>Parte Superior</InnerGridItem>
          <InnerGridItem>Parte Inferior</InnerGridItem>
          <InnerGridItemMore>Más</InnerGridItemMore>
        </InnerGridContainer>

      </GridItem>

      <GridItem>

        <InnerGridContainer>
          <InnerGridItemTitle>Intermedio</InnerGridItemTitle>
          <InnerGridItem>Completo</InnerGridItem>
          <InnerGridItem>Parte Superior</InnerGridItem>
          <InnerGridItem>Parte Inferior</InnerGridItem>
          <InnerGridItemMore>Más</InnerGridItemMore>
        </InnerGridContainer>

      </GridItem>

      <GridItem>

        <InnerGridContainer>
          <InnerGridItemTitle>Avanzado</InnerGridItemTitle>
          <InnerGridItem>Completo</InnerGridItem>
          <InnerGridItem>Parte Superior</InnerGridItem>
          <InnerGridItem>Parte Inferior</InnerGridItem>
          <InnerGridItemMore>Más</InnerGridItemMore>
        </InnerGridContainer>

      </GridItem>

      <GridItem>
        <GridItemImage />
      </GridItem>

    </GridContainer>
  )
}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(1, 1fr);
  gap: 1rem;
  width: 100%;
  height: 100vh;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
  }
  
`;

const GridItem = styled.div`
  background-color: #60a5fa;
  color: #ffffff;
  border-radius: 1rem;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: bold;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
`;

const GridItemImage = styled(GridItem)`
  background-image: url("https://images.unsplash.com/photo-1618688862225-ac941a9da58f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: bold;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  width: 100%;  // Asegúrate de que ocupe todo el ancho del GridItem
  height: 100%; // Asegúrate de que ocupe toda la altura del GridItem
`;

const InnerGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 1rem;
  width: 100%;
  height: 100%;
`;

const InnerGridItem = styled.div`
  background-color: #ff7f50;
  color: #ffffff;
  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: bold;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  height: 100%;
  margin-left: 5%;
  margin-right: 5%;
`;

const InnerGridItemTitle = styled.div`
  background-color: #ff7f50;
  color: #ffffff;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
`;

const InnerGridItemMore = styled.div`
  background-color: #ff7f50;
  color: #ffffff;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-left: 7%;
  margin-right: 7%;
  height: 70%;
`;


export default Rutinas

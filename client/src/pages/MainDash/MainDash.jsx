import React from "react";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";
import "./MainDash.css";
import styled from "styled-components";

const MainDashWrapper = styled.div`
  grid-area: maindash;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex-grow: 1;

  @media screen and (max-width: 1200px) {
    justify-content: flex-start;
    margin-top: 2rem;
  }

  @media screen and (max-width: 768px) {
    align-items: center;
  }
`;


const MainDash = () => {
  return (
    <MainDashWrapper>
      <h1>Bienvenido, Sawalito</h1>
      <Cards />
      <Table />
    </MainDashWrapper>
  );
};

export default MainDash;

import React from 'react';
import styled from 'styled-components';
import './estilos/MainDash.css';
import Cards from './Cards/Cards'
import Table from "./Table/Table";

const MorshealthHome = () => {
  return (
    <div className='MainDash'>
      <Cards />
      <Table />
    </div>
  );
}


export default MorshealthHome

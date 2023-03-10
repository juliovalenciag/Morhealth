import React from 'react';
import {FaHamburger , FaPizzaSlice} from 'react-icons/fa';
import {GiNoodles , GiChopsticks} from 'react-icons/gi';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Category() {
  return (
    <List>
        <SLink style={{textDecoration: 'none'}}  to={'/morshealth/nutricion/cuisine/Italian '}>
            <FaPizzaSlice/>
            <h4>Italiana</h4>
        </SLink>
        <SLink style={{textDecoration: 'none'}} to={'/morshealth/nutricion/cuisine/American'}>
            <FaHamburger/>
            <h4>Americana</h4>
        </SLink>
        <SLink style={{textDecoration: 'none'}} to={'/morshealth/nutricion/cuisine/Thai'}>
            <GiNoodles/>
            <h4>Thai</h4>
        </SLink>
        <SLink style={{textDecoration: 'none'}} to={'/morshealth/nutricion/cuisine/Japanese'}>
            <GiChopsticks/>
            <h4>Japonesa</h4>
        </SLink>
    </List>
  );
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
`;
const SLink = styled(Link)`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    h4{
        color: #031728;
    }
`;
export default Category;
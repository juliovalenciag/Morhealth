import React from 'react';
import styled from 'styled-components';
import { FaUtensils, FaCookieBite, FaGlassWhiskey, FaBreadSlice } from 'react-icons/fa';
import { colors } from '../../styles/variables';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.bg};
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  width: 120px; // Ajusta este valor según tus necesidades

  &:hover {
    transform: translateY(-0.5rem);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }

  h3 {
    margin: 1rem 0;
    color: white;
  }

  @media (max-width: 768px) {
    width: 90px; // Ajusta este valor según tus necesidades en dispositivos móviles
  }
`;

const RecipeTypeCard = ({ icon, title, value, onClick }) => {
    return (
        <Card onClick={() => onClick(value)}>
            {icon}
            <p>{title}</p>
        </Card>
    );
};
export default RecipeTypeCard;
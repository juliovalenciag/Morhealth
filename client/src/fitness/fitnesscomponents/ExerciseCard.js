import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledImg = styled.img`
  width: 100%;
`;

const StyledStack = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledButton = styled.button`
  margin-left: 21px;
  color: #fff;
  background: ${props => (props.primary ? '#216B91' : '#031728')};
  font-size: 14px;
  border-radius: 20px;
  text-transform: capitalize;
`;

const StyledTypography = styled.span`
  margin-left: 21px;
  color: #000;
  font-weight: bold;
  font-size: 20px;
  margin-top: 11px;
  padding-bottom: 10px;
  text-transform: capitalize;

  @media (min-width: 1024px) {
    font-size: 24px;
  }
`;

const ExerciseCard = ({ exercise }) => {
    return (
        <StyledLink to={`/morshealth/ejercicios/ejercicio/${exercise.id}`}>
            <StyledImg src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
            <StyledStack>
                <StyledButton primary>{exercise.bodyPart}</StyledButton>
                <StyledButton>{exercise.target}</StyledButton>
            </StyledStack>
            <StyledTypography>{exercise.name}</StyledTypography>
        </StyledLink>
    );
};

export default ExerciseCard;

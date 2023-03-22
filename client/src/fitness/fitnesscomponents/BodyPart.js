import React from 'react';
import styled from 'styled-components';
import Icon from './../../assets/img/gym.png';

const StyledStack = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => (props.active ? '#fff' : '#fff')};
  border-top: ${props => (props.active ? '4px solid #031728' : 'none')};
  border-bottom-left-radius: 20px;
  width: 270px;
  height: 282px;
  cursor: pointer;
  gap: 47px;
`;

const StyledImg = styled.img`
  width: 40px;
  height: 40px;
`;

const StyledTypography = styled.span`
  font-size: 24px;
  font-weight: bold;
  font-family: Alegreya;
  color: #3a1212;
  text-transform: capitalize;
`;

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
    return (
        <StyledStack
            type="button"
            active={bodyPart === item}
            onClick={() => {
                setBodyPart(item);
                window.scrollTo({ top: 780, left: 100, behavior: 'smooth' });
            }}
        >
            <StyledImg src={Icon} alt="dumbbell" />
            <StyledTypography>{item}</StyledTypography>
        </StyledStack>
    );
};

export default BodyPart;
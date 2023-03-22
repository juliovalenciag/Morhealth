import React from 'react';
import styled from 'styled-components';
import BodyPartImage from '../../assets/img/body-part.png';
import TargetImage from '../../assets/img/target.png';
import EquipmentImage from '../../assets/img/equipment.png';

const StyledStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  padding: 20px;
  align-items: center;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const StyledImg = styled.img`
  width: 100%;
`;

const StyledInnerStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 1024px) {
    gap: 35px;
  }
`;

const StyledTypography = styled.span`
  font-size: 30px;
  font-weight: 700;
  text-transform: capitalize;

  @media (min-width: 1024px) {
    font-size: 64px;
  }
`;

const StyledDescription = styled.span`
  font-size: 18px;
  color: #4f4c4c;

  @media (min-width: 1024px) {
    font-size: 24px;
  }
`;

const StyledButton = styled.button`
  background: #216b91;
  border-radius: 50%;
  width: 100px;
  height: 100px;
`;

const StyledExtraDetail = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  align-items: center;
`;

const StyledExtraTypography = styled.span`
  font-size: 20px;
  text-transform: capitalize;

  @media (min-width: 1024px) {
    font-size: 30px;
  }
`;

const Detail = ({ exerciseDetail }) => {
    const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

    const extraDetail = [
        {
            icon: BodyPartImage,
            name: bodyPart,
        },
        {
            icon: TargetImage,
            name: target,
        },
        {
            icon: EquipmentImage,
            name: equipment,
        },
    ];

    return (
        <StyledStack>
            <StyledImg src={gifUrl} alt={name} loading="lazy" />
            <StyledInnerStack>
                <StyledTypography>{name}</StyledTypography>
                <StyledDescription>
                    Ejercicios que te mantienen fuerte. <span style={{ textTransform: 'capitalize' }}>{name}</span> es uno de los mejores
                    <br /> ejercicios que trabajan {target}. Te ayudarán a mejorar tu condición,
                    <br /> tu humor y obtener energía.
                </StyledDescription>
                {extraDetail?.map((item) => (
                    <StyledExtraDetail key={item.name}>
                        <StyledButton>
                            <img src={item.icon} alt={bodyPart} style={{ width: '50px', height: '50px' }} />
                        </StyledButton>
                        <StyledExtraTypography>{item.name}</StyledExtraTypography>
                    </StyledExtraDetail>
                ))}
            </StyledInnerStack>
        </StyledStack>
    );
};

export default Detail;

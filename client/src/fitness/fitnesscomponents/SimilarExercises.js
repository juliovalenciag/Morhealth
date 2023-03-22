import React from 'react';
import styled from 'styled-components';
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const Wrapper = styled.div`
  margin-top: 100px;

  @media (max-width: 959.95px) {
    margin-top: 0;
  }
`;

const Title = styled(Typography)`
  font-weight: 700;
  font-size: 44px;
  margin-left: 20px;
  
  @media (max-width: 767px) {
    font-size: 25px;
  }

  span {
    color: #FF2625;
    text-transform: capitalize;
  }
`;

const ScrollWrapper = styled(Stack)`
  position: relative;
  padding: 2px;
`;

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
    return (
        <Wrapper>
            <Title fontWeight={700} color="#000" mb="33px">
                Similar <span>Target Muscle</span> exercises
            </Title>
            <ScrollWrapper direction="row">
                {targetMuscleExercises.length !== 0 ? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader />}
            </ScrollWrapper>
            <Title fontWeight={700} color="#000" mb="33px" mt={{ lg: '100px', xs: '60px' }}>
                Similar <span>Equipment</span> exercises
            </Title>
            <ScrollWrapper direction="row">
                {equipmentExercises.length !== 0 ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader />}
            </ScrollWrapper>
        </Wrapper>
    );
};

export default SimilarExercises;

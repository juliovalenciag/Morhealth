import React from 'react';
import styled from 'styled-components';


const Frase = () => {

  const features = [
    'Funcionalidad 1',
    'Funcionalidad 2',
    'Funcionalidad 3',
    'Funcionalidad 4',
    'Funcionalidad 5',
  ];

  return (
    <>
      {/*
            <AppFeaturesWrapper>
                {features.map((feature, index) => (
                    <FeatureCircle key={index}>
                        <h3>{feature}</h3>
                    </FeatureCircle>
                ))}
            </AppFeaturesWrapper>
                */}


      <ImageBackgroundSectionWrapper>
        <Phrase>
          <WordBlue> CREANDO </WordBlue>
          <WordTeal> LA MEJOR </WordTeal>
          <WordBlue> HISTORIA </WordBlue>
        </Phrase>
      </ImageBackgroundSectionWrapper>

    </>
  )
};

const AppFeaturesWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
`;

const FeatureCircle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffcc00;
  color: #fff;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 1rem;

  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
  }
`;

const FeatureSectionWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 2rem;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FeatureText = styled.div`
  max-width: 40%;

  @media (max-width: 768px) {
    max-width: 100%;
    text-align: center;
  }
`;

const FeatureImage = styled.img`
  max-width: 40%;

  @media (max-width: 768px) {
    max-width: 80%;
  }
`;

const ImageBackgroundSectionWrapper = styled.section`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 20vh;
  }
`;

const Phrase = styled.p`
  font-size: 4rem;
  text-align: center;
  margin: 0;
  font-family: "Inter", sans-serif;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const WordBlue = styled.span`
  color: #223159;
`;

const WordTeal = styled.span`
  color: #216B91;
`;


export default Frase

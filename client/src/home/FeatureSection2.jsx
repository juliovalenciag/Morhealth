import React from 'react';
import styled from 'styled-components';
import Heading from './common/heading/Heading';
import DeviceImage from '../assets/img/nutricionweb.png';
import GooglePlayStoreImage from '../assets/img/googleplay.png';



const FeatureSection2 = () => {
    return (
        <>
            <FeatureSectionWrapper>
                <FeatureImage src={DeviceImage} alt="Aplicación en el dispositivo" />
                <FeatureText>
                    <h2>Morhealth en Web</h2>
                    <p>
                        Descripción detallada de la funcionalidad de la aplicación. Explica cómo
                        la función específica mejora la experiencia del usuario y cómo se
                        diferencia de las aplicaciones similares disponibles en el mercado.
                    </p>
                </FeatureText>
            </FeatureSectionWrapper>
        </>
    )
};

const FeatureSectionWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
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

const GooglePlayStore = styled.img`
  width: 30%;
  margin-top: 1rem;
  display: block;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    width: 40%;
  }
`;

export default FeatureSection2

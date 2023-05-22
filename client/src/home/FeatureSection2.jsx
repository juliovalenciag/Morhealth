import React from 'react';
import styled from 'styled-components';
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
            Morhealth es una plataforma web integral que se centra en mejorar y mantener un estilo de vida saludable a través de módulos de nutrición y ejercicio. Los usuarios pueden explorar y personalizar recetas nutritivas, adaptadas a sus necesidades dietéticas y preferencias personales, así como descubrir rutinas de ejercicio específicas para alcanzar sus objetivos de fitness. La plataforma ofrece una amplia biblioteca de recetas saludables y planes de alimentación, junto con rutinas de ejercicios detalladas, desde principiantes hasta avanzados, para todas las disciplinas y objetivos. MorHealth hace que la gestión de tu bienestar sea accesible y eficiente, proporcionándote las herramientas necesarias para llevar una vida activa y equilibrada desde la comodidad de tu hogar.
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

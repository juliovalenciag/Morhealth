import React from 'react';
import styled from 'styled-components';
import DeviceImage from '../assets/img/mockup1.png';
import GooglePlayStoreImage from '../assets/img/googleplay.png';



const FeatureSection = () => {
    return (
        <>
            <FeatureSectionWrapper>
                <FeatureText>
                    <h2>Morhealth en Android</h2>
                    <p>
                    Es una aplicación móvil innovadora diseñada para ayudarte a monitorear y mejorar tu salud y bienestar en tiempo real. La aplicación permite a los usuarios registrar métricas de salud esenciales, como peso, presión arterial y niveles de glucosa, además de realizar un seguimiento de su sueño y consumo de agua diario. Con Morhealth en tu dispositivo Android, puedes llevar un control completo de tus hábitos de sueño, asegurándote de que descanses lo suficiente y obtengas información útil para mejorar la calidad de tu sueño. Además, la aplicación te ayuda a mantenerte hidratado mediante recordatorios para beber agua y monitorear tu consumo a lo largo del día. Morhealth en Android se convierte en tu compañero ideal para llevar una vida saludable, ofreciendo información valiosa y herramientas personalizadas para mantenerte en el camino correcto hacia un bienestar óptimo.
                    </p>
                    <GooglePlayStore src={GooglePlayStoreImage} alt="Google Play Store" />
                </FeatureText>
                <FeatureImage src={DeviceImage} alt="Aplicación en el dispositivo" />
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

export default FeatureSection

import React from "react"
import OnlineCourses from "./allcourses/OnlineCourses"
import Heading from "./common/heading/Heading"
import "./allcourses/courses.css"
import { coursesCard } from "./dummydata"
import styled from "styled-components";
import { colors } from "../styles/variables"

const HAbout = () => {

  const plans = [
    {
      title: 'Mensual',
      price: '$9.99',
      description: 'Acceso a contenido básico y soporte por correo electrónico.',
    },
    {
      title: 'Trimestral',
      price: '$19.99',
      description: 'Acceso a todo el contenido, soporte prioritario y descuentos exclusivos.',
    },
    {
      title: 'Anual',
      price: '$49.99',
      description: 'Acceso a contenido empresarial, soporte dedicado ',
    },
  ];

  return (
    <>
      <Section id="about">
        <Container>
          <Heading subtitle="Planes" title="Planes de suscripción para usuarios" />
          <CardContainer>
            {plans.map((plan, index) => (
              <Card key={index}>
                <Title>{plan.title}</Title>
                <Price>{plan.price}</Price>
                <Description>{plan.description}</Description>
                <Button>Suscribirse</Button>
              </Card>
            ))}
          </CardContainer>
        </Container>
      </Section>
    </>
  )
};

const Section = styled.section`
  background-color: #f5f5f5;
  padding: 40px 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
  padding: 40px;
  @media (max-width: 768px) {
    gap: 20px;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 10px;
  width: 300px;
  padding: 20px;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
  }
`;

const Title = styled.h3`
  font-size: 24px;
  margin-bottom: 20px;
  color: ${colors.darkest};
`;

const Price = styled.p`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
  color:${colors.lighter};
`;

const Description = styled.p`
  text-align: center;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: ${colors.principal};
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${colors.darkest};
  }
`;

export default HAbout

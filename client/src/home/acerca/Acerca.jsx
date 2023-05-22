import React from "react";
import styled from "styled-components";
import img from "../../assets/img/bg/bgacerca.jpg";
import Back from "../common/Back";
import AnimatedBoxes from "../AnimatedBoxes";
import FeatureSection from "../FeatureSection";
import FeatureSection2 from "../FeatureSection2";

const AcercaSection = styled.section`
  margin-bottom: 80px;
`;

const Container = styled.div`
  margin: auto;
`;

const Form = styled.form`
  padding: 30px;
  box-shadow: 0 0 20px 0 rgb(112 121 138 / 18%);
`;

const Title = styled.h4`
  margin-top: 10px;
  width: 100%;
`;

const InputGroup = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  border: none;
  margin-bottom: 20px;
  margin-right: 10px;
  width: 100%;
`;

const TextArea = styled.textarea`
  border: 1px solid rgba(0, 0, 0, 0.1);
  width: 100%;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const SubmitButton = styled.button`
  border-radius: 5px;
  padding: 17px 30px;
  background: #031728;
  border: none;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
`;

const Contacto = () => {
    return (
        <AcercaSection className="acerca">
            <Back name="Sobre morhealth" title="más salud, mejor vida" cover={img} />
            <Container>
                <AnimatedBoxes />
                <FeatureSection />
                <FeatureSection2 />
            </Container>
        </AcercaSection>
    );
};

export default Contacto;

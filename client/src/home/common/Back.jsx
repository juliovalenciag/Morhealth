import React from "react";
import styled from "styled-components";

const BackContainer = styled.div`
  height: 40vh;
  position: relative;
  padding: 20px;

  @media screen and (max-width: 800px) {
    height: 30vh;
  }
`;

const Container = styled.div`
  max-width: 80%;
  margin: auto;
  color: #fff;
  padding: 120px 0;
`;

const BackImage = styled.img`
  width:100%;
  height: 40vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  object-fit: cover;

  @media screen and (max-width: 800px) {
    height: 30vh;
  }
`;

const BackCover = styled.div`
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 40vh;
  background: rgba(17, 40, 72, 0.629);
  z-index: -1;

  @media screen and (max-width: 800px) {
    height: 30vh;
  }
`;

const Back = ({ name, title, cover }) => {
  return (
    <BackContainer className='back'>
      <Container>
        <span>{name}</span>
        <h1>{title}</h1>
      </Container>
      <BackImage src={cover} alt='' />
      <BackCover />
    </BackContainer>
  );
};

export default Back;

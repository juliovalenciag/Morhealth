import React from 'react';
import MainDash from './MainDash/MainDash';
import RightSide from './RigtSide/RightSide';
import styled from 'styled-components';

const MHomeWrapper = styled.div`  
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Inter", sans-serif;
`;

const AppGlassWrapper = styled.div`
  display: grid;
  height: 97%;
  width: 97%;
  background: var(--glass);
  border-radius: 2rem;
  gap: 16px;
  grid-template-columns: auto 20rem;
  grid-template-rows: auto auto;
  grid-template-areas: "maindash rightside";
  overflow: hidden;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 50% auto;
    grid-template-rows: auto auto;
    grid-template-areas:
      "maindash rightside"
      "maindash rightside";
    overflow-y: scroll;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    grid-template-areas:
      "maindash"
      "rightside";
  }
`;


const MhHome = () => {
  return (
    <MHomeWrapper>
      <AppGlassWrapper>
        <MainDash />
        <RightSide />
      </AppGlassWrapper>
    </MHomeWrapper>
  );
};

export default MhHome

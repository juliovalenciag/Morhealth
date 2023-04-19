import React from "react";
import CustomerReview from "../CustomerReview/CustomerReview";
import Updates from "../Updates/Updates";
import styled from "styled-components";

const RightSideWrapper = styled.div`
  grid-area: rightside;
  display: flex;
  flex-direction: column;
  width: 95%;
  justify-content: space-evenly;
  flex-grow: 1;

  @media screen and (max-width: 1200px) {
    justify-content: flex-start;
    margin-top: 3rem;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 0;

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

const RightSide = () => {
  return (
    <RightSideWrapper>
      <div>
        <h3>Blog</h3>
        <Updates />
      </div>
      <div>
        <h3>Progreso General</h3>
        <CustomerReview />
      </div>
    </RightSideWrapper>
  );
};

export default RightSide;

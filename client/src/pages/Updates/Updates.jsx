import React from "react";
import { UpdatesData } from "../Data/Data";
import styled from "styled-components";

const UpdatesWrapper = styled.div`
  width: 85%;
  background: white;
  border-radius: 0.7rem;
  padding: 1rem;
  gap: 1rem;
  display: flex;
  flex-direction: column;
  font-size: 13px;
`;

const UpdateWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const UpdateImg = styled.img`
  width: 3.2rem;
  height: 3.2rem;
`;

const NotiWrapper = styled.div`
  div {
    margin-bottom: 0.5rem;
  }

  div > span:nth-of-type(1) {
    font-weight: bold;
  }
`;

const Updates = () => {
  return (
    <UpdatesWrapper>
      {UpdatesData.map((update) => {
        return (
          <UpdateWrapper key={update.id}>
            <UpdateImg src={update.img} alt="profile" />
            <NotiWrapper>
              <div>
                <span>{update.name}</span>
                <span> {update.noti}</span>
              </div>
              <span>{update.time}</span>
            </NotiWrapper>
          </UpdateWrapper>
        );
      })}
    </UpdatesWrapper>
  );
};

export default Updates;

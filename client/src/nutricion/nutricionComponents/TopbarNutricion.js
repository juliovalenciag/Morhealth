import React, { useState } from 'react';
import moment from "moment/moment";
import { BiSearch } from "react-icons/bi";
import styled from "styled-components";

const TopbarNutricion = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    return (
        <Container>
            <Header>
                <span>{moment().format("dddd, Do MMM YYYY")}</span>
                <SearchBar>
                    <BiSearch size={20} />
                    <SearchInput type="text" placeholder="Search" />
                </SearchBar>
                <Profile onClick={toggleDropdown}>
                    <ProfileImage
                        src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80"
                        alt="person image"
                    />
                    <Details>
                        <span>Sawalito</span>
                    </Details>
                    {dropdownVisible && (
                        <Dropdown>
                            <DropdownItem>Editar perfil</DropdownItem>
                            <DropdownItem>Log out</DropdownItem>
                        </Dropdown>
                    )}
                </Profile>
            </Header>
        </Container>
    );
};

const Container = styled.div`
  display: flex;
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  padding: 1rem 2rem;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;

  & > span {
    font-size: 1rem;
  }
`;

const SearchBar = styled.div`
  background-color: rgba(255, 255, 255, 0.6);
  width: 100%;
  max-width: 25rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  height: 2rem;
  display: flex;
  align-items: center;
  border: 2px solid rgba(63, 63, 63, 0.5);
  justify-content: center;
  gap: 8px;
`;

const SearchInput = styled.input`
  background: transparent;
  color: #333;
  outline: none;
  border: none;
  padding: 0;
  width: 100%;
`;

const Profile = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;

const ProfileImage = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & > span {
    font-size: 0.9rem;
    font-weight: bold;
  }
`;
const Dropdown = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 10;
  min-width: 150px;
`;

const DropdownItem = styled.div`
  padding: 8px 12px;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
`;


export default TopbarNutricion;
import React from 'react';
import { Link } from 'react-router-dom';

import styled from "styled-components";

const BlogNavbar = () => {
  return (
    <NavbarContainer >
    <NavbarInnerContainer>
      <LeftContainer>
        <NavbarLinkContainer>
          <NavbarLink to="/morshealth/blog"> Morshealth Blog</NavbarLink>
          <NavbarLink to="/morshealth/blog">General</NavbarLink>
          <NavbarLink to="/morshealth/blog/?cat=nutricion"> Nutricion </NavbarLink>
          <NavbarLink to="/morshealth/blog/?cat=ejercicios"> Fitness</NavbarLink>
          <NavbarLink to="/morshealth/blog/?cat=salud"> Salud </NavbarLink>
          <span>Sawalito</span>
          <NavbarLink to="/morshealth/blog/publicar"> Publicar </NavbarLink>
        </NavbarLinkContainer>
      </LeftContainer>
      <RightContainer>
      </RightContainer>
    </NavbarInnerContainer>
    
      
    
  </NavbarContainer>
  )
};

const NavbarContainer = styled.nav`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
  background-color: grey;
  display: flex;
  flex-direction: column;
  border-radius: 10px;

`;

const LeftContainer = styled.div`
  flex: 80%;
  display: flex;
  align-items: center;
  padding-left: 5%;
`;

const RightContainer = styled.div`
  flex: 80%;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
`;
const NavbarInnerContainer = styled.div`

  height: 80px;
  display: flex;
`;

const NavbarLinkContainer = styled.div`
  display: flex;
`;

const NavbarLink = styled(Link)`
  color: white;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
  
`;


export default BlogNavbar

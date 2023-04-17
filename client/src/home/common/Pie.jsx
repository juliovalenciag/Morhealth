import React from "react";
import styled from "styled-components";
import { BsInstagram, BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import { colors } from "./../../styles/variables";

function Pie() {
  return (
    <Foot>
      <Copyright>&copy; Morhealth por Morse</Copyright>

      <SocialIcons>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <BsInstagram />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <BsTwitter />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <BsFacebook />
        </a>
        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
          <BsYoutube />
        </a>
      </SocialIcons>
    </Foot>
  );
}

const Foot = styled.footer`
  background-color: ${colors.darkest};
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 10rem;
  flex-wrap: wrap;
  
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    padding: 1rem;
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
`;

const Copyright = styled.p`
  font-size: 18px;
  margin: 0;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  a {
    color: white;
    text-decoration: none;

    &:hover {
      color: var(--secondary-color);
    }
  }

  svg {
    font-size: 1.4rem;
    cursor: pointer;
    transition: 0.5s ease-in-out;
  }
`;

export default Pie;
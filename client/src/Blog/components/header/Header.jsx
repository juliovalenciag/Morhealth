import React from "react";
import { nav } from "../../assets/data/data";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    header.classList.toggle("active", this.window.scrollY > 100);
  });
  return (
    <>
      <HeaderContainer className="header">
        
          <BlogNav className="blognav">
            <ul>
              {nav.map((link) => (
                <li key={link.id}>
                  <Link to={link.url}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </BlogNav>
          
        
      </HeaderContainer>
    </>
  );
};



const HeaderContainer = styled.header`
  background: #fff;
  padding: 20px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 8%);
  position: relative;
  z-index: 44;
  display: flex;
  justify-content: center;

  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  &.active {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    box-shadow: 0 0 4px 0 rgb(115 115 115 / 20%);
    z-index: 9999;
    background: #fff;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const BlogNav = styled.nav`
  ul {
    display: flex;
    width: 100%;
    justify-content: center;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    margin: 0 15px;
  }

  a {
    text-transform: capitalize;
    margin-right: 30px;
    color: #000;
    text-decoration: none;
    transition: color 0.3s;
    font-weight: 600;
    font-size: 18px;
    padding: 5px 10px;
    border-radius: 5px;

    &:hover {
      color: #fff;
      background-color: #007bff;
    }
  }

  @media screen and (max-width: 768px) {
    ul {
      flex-wrap: wrap;
      justify-content: center;
    }

    li {
      margin: 5px;
    }

    a {
      font-size: 16px;
    }
  }
`;

export default Header;
import React, { useState } from "react";
import styled from "styled-components";
import logo from './../../assets/img/morhealthname.png'
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Section = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  z-index: 100;
  background-color: #fff;
  position: relative;
`;

const Container = styled.div`
  max-width: 1400px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  z-index: 200;
  position: relative;
  transition: all 0.5s ease;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Logo = styled.img`
  height: 50px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  transition: all 0.5s ease;
  z-index: 200;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 70px;
    right: ${({ click }) => (click ? '0' : '-100%')};
    width: 100%;
    background: #fff;
    transition: all 0.5s ease;
    border-top: 1px solid #ccc;
    padding: 20px;
    z-index: 200;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #216B91;
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  z-index: 200;
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #031728;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #4B90C0;
  }
`;

const MenuIcon = styled.div`
  display: none;
  z-index: 200;

  @media screen and (max-width: 768px) {
    display: block;
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <Section>
            <Container>
                <Links>
                    <Logo src={logo} />
                    <MenuIcon onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </MenuIcon>
                    <List click={click}>
                        <Link to='/'><ListItem onClick={handleClick}>Inicio</ListItem></Link>
                        <Link to='/acerca'><ListItem onClick={handleClick}>Acerca</ListItem></Link>
                        <Link to='/planes'><ListItem onClick={handleClick}>Planes</ListItem></Link>
                        <Link to='/contacto'><ListItem onClick={handleClick}>Contacto</ListItem></Link>
                    </List>
                </Links>
                <Icons>
                    <Link to='ingresar'>
                        <Button>Ingresar</Button>
                    </Link>
                </Icons>
            </Container>
        </Section>
    );
};

export default Navbar;

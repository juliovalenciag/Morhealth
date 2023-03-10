import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./estiloscomp/Navbar.css";
import { GiRocketThruster } from "react-icons/gi";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { NavLink } from "react-router-dom";
import MH from './../assets/img/morhealthname.png'

function Navbar() {
  const [click, setClick] = useState(false);

  const[navbar,setNavbar] = useState(false)

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const changeBackground = () => {
    if(window.scrollY >= 80){
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className={navbar ? 'navbar active' : 'navbar'}>
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <img src={MH} width="160px"/>
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes style={{ color: '#031728' }}/> : <FaBars style={{ color: '#031728' }}/>}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Inicio
                </NavLink>
              </li>
              
              
              <li className="nav-item">
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Ingresar
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
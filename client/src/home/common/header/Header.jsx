import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Inicio</Link>
            </li>
            
            <li>
              <a href="#about">Acerca</a>
            </li>
           
            <li>
              <Link to='/pricing'>Planes</Link>
            </li>
            
            <li>
              <Link to='/contact'>Contacto</Link>
            </li>
          </ul>
          <Link to='/ingresar'>
            <div className='start'>
              <div className='button'>Ingresar</div>
            </div>
          </Link>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'><FaTimes/></i> : <i className='fa fa-bars'><FaBars/></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header

import React from "react";
import { BsFacebook } from 'react-icons/bs'
import { AiFillInstagram, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai'
import mhnamelogo from './../../../assets/img/morhealthname.png'
import styled from "styled-components";
import { Link } from "react-router-dom";


const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
            <Link to="/">
              <img src={mhnamelogo} width="160px" alt="Morhealth"/>
            </Link>
          </div>

        
        </div>
      </section>
    </>
  )
}



export default Head

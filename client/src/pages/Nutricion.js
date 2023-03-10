import React from 'react';
import Category from './../nutricion/Category';
import Veggie from './../nutricion/Veggie';
import Popular from './../nutricion/Popular';
import Search from './../nutricion/Search';
import { Button } from '../components/Button';

import './estilos/nutricion.css'


function Nutricion() {
  return (
    <div> 
      <div className='home'>
          <div className='content'>
            <h3> Mejores <span> recetas </span> al alcance de tus manos</h3>
            <p>Tu alimentación y estilo de vida te conducen hacia la salud o la enfermedad</p>
            <p>Crea tus dietas</p>
            <a href="localhost:8080" className='btn'>Dietas</a>
          </div>
      </div>
    
      <Search/>
      <Category/>
      <Veggie/>
      <Popular/>
    </div>
    
  )
}

export default Nutricion
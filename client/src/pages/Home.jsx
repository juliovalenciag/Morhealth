import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Modulos from '../components/Modulos';
import Navbar from '../components/Navbar';
import Stats from '../components/Stats';

const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Modulos/>
      <Stats/>
    </>
  )
}

export default Home

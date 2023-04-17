import React from "react"
import Heading from "./../common/heading/Heading"
import "./Hero.css"
import Video from './../../assets/videos/videoBg.mp4'

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <video autoPlay loop muted className='hero-video'>
          <source src={Video} type="video/mp4" />
        </video>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='Bienvenido a ' title='MORHEALTH' />
            <p>Tu compañero de salud al alcance de tus manos</p>
            <div className='button'>
              <button className='primary-btn'>
                Ingresar
              </button>
              <button>
                Ver los planes
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero

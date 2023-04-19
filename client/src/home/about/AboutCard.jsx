import React from "react"
import Heading from "./../common/heading/Heading"
import "./about.css"
import { homeAbout } from "./../dummydata"
import Awrapper from "./Awrapper"
import {AiOutlineHeart} from 'react-icons/ai'

const AboutCard = () => {
  return (
    <>
      <section className='aboutHome'>
        <div className='container flexSB'>
          <div className='left row'>
            <img src='https://images.unsplash.com/photo-1486663845017-3eedaa78617f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' alt='' />
          </div>
          <div className='right row'>
            <Heading subtitle='Con morhealth' title='Podrás:' />
            <div className='items'>
              {homeAbout.map((val) => {
                return (
                  <div className='item flexSB'>
                    <div className='img'>
                      <img src={val.cover} alt='' />
                    </div>
                    <div className='text'>
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutCard

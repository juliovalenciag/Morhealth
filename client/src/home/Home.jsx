import React from "react"
import AboutCard from "./about/AboutCard"
import Hblog from "./Hblog"
import HAbout from "./HAbout"
import Hero from "./hero/Hero"
import Hprice from "./Hprice"
import Testimonal from "./testimonal/Testimonal"
import HPro from "./HPro"
import ScrollToTop from "./common/ScrollToTop"

const Home = () => {
  return (
    <>
      <ScrollToTop/>
      <Hero />
      <AboutCard />
      <HAbout />
      <HPro/>
    </>
  )
}

export default Home

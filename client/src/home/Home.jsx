import React from "react"
import AboutCard from "./about/AboutCard"
import Hblog from "./Hblog"
import HAbout from "./HAbout"
import Hero from "./hero/Hero"
import Hprice from "./Hprice"
import Testimonal from "./testimonal/Testimonal"
import HPro from "./HPro"
import ScrollToTop from "./common/ScrollToTop"
import FeatureSection from "./FeatureSection"
import AppFeatures from "./AppFeatures"
import FeatureSection2 from "./FeatureSection2"
import AnimatedBoxes from "./AnimatedBoxes"

const Home = () => {
  return (
    <>
      <ScrollToTop/>
      <Hero />
      <AboutCard />
      <AnimatedBoxes/>
      <FeatureSection/>
      <FeatureSection2/>
      <AppFeatures/>

      <HAbout />
    </>
  )
}

export default Home

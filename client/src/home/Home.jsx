import React from "react"
import AboutCard from "./about/AboutCard"
import Hblog from "./Hblog"
import HAbout from "./HAbout"
import Hero from "./components/Hero"
import Testimonal from "./testimonal/Testimonal"
import HPro from "./HPro"
import ScrollToTop from "./common/ScrollToTop"
import FeatureSection from "./FeatureSection"
import AppFeatures from "./AppFeatures"
import FeatureSection2 from "./FeatureSection2"
import AnimatedBoxes from "./AnimatedBoxes"
import Navbar from "./components/Navbar"

const Home = () => {
  return (
    <>
      <ScrollToTop/>
      <Navbar/>
      <Hero />
      <AnimatedBoxes/>
      <FeatureSection/>
      <FeatureSection2/>
      <AppFeatures/>
      <HAbout />
    </>
  )
}

export default Home

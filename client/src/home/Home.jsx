import React from "react"
import Planes from "./planes/Planes"
import Hero from "./components/Hero"
import ScrollToTop from "./common/ScrollToTop"
import FeatureSection from "./FeatureSection"
import Frase from "./Frase"
import FeatureSection2 from "./FeatureSection2"
import AnimatedBoxes from "./AnimatedBoxes"
import Navbar from "./common/Navbar"

const Home = () => {
  return (
    <>
      <ScrollToTop />
      <Hero />
      <AnimatedBoxes />
      <FeatureSection />
      <FeatureSection2 />
      <Frase />
      <Planes />
    </>
  )
}

export default Home
